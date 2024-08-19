import React, { useRef, useState, memo } from "react";
import Svg from "react-native-svg";
import Animated, {
  useDerivedValue,
  withTiming,
  useAnimatedProps,
  interpolateColor,
  createAnimatedPropAdapter,
  processColor,
} from "react-native-reanimated";
import { Path } from "react-native-svg";

const AnimatedCheckMarkPath = memo((props) => {
  const { progress, checkMarkColor } = props;
  const [length, setLength] = useState(0);
  const pathRef = useRef(null);
  const AnimatedPath = Animated.createAnimatedComponent(Path);
  const checkMarkAnimation = useAnimatedProps(() => {
    const strokeDashoffset = length - length * progress.value;
    const opacity = progress.value;
    return { strokeDashoffset, opacity };
  });

  return (
    <AnimatedPath
      animatedProps={checkMarkAnimation}
      onLayout={() => setLength(pathRef.current.getTotalLength())}
      ref={pathRef}
      d="M12 24.4068L20.6667 32.9999L36.5 17.1667"
      stroke={checkMarkColor}
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray={length}
      fill="none"
    />
  );
});

const AnimatedColor = memo((props) => {
  const {
    progress,
    unCheckedBorderColor,
    checkedBorderColor,
    unCheckedBackgroundColor,
    checkedBackgroundColor,
  } = props;
  const AnimationColor = Animated.createAnimatedComponent(Path);

  const animation = useAnimatedProps(
    () => {
      const fill = interpolateColor(
        progress.value,
        [0, 1],
        [unCheckedBackgroundColor, checkedBackgroundColor]
      );
      const stroke = interpolateColor(
        progress.value,
        [0, 1],
        [unCheckedBorderColor, checkedBorderColor]
      );
      return { fill, stroke };
    },
    [],
    createAnimatedPropAdapter(
      (propss) => {
        if (Object.keys(propss).includes("fill")) {
          propss.fill = { type: 0, payload: processColor(propss.fill) };
        }
        if (Object.keys(propss).includes("stroke")) {
          propss.stroke = { type: 0, payload: processColor(propss.stroke) };
        }
      },
      ["fill", "stroke"]
    )
  );
  return (
    <AnimationColor
      animatedProps={animation}
      d="M2 16C2 8.26801 8.26801 2 16 2H33C40.732 2 47 8.26801 47 16V33C47 40.732 40.732 47 33 47H16C8.26801 47 2 40.732 2 33V16Z"
      strokeWidth={4}
    />
  );
});

const CustomCheckBox = memo((props) => {
  const {
    checked,
    checkMarkColor,
    checkedBorderColor,
    unCheckedBorderColor,
    checkedBackgroundColor,
    unCheckedBackgroundColor,
    height,
    width,
  } = props;
  const progress = useDerivedValue(() => {
    return withTiming(checked ? 1 : 0);
  });

  return (
    <Svg width={width} height={height} viewBox="0 0 49 49">
      <AnimatedColor
        progress={progress}
        checkedBorderColor={checkedBorderColor}
        unCheckedBorderColor={unCheckedBorderColor}
        checkedBackgroundColor={checkedBackgroundColor}
        unCheckedBackgroundColor={unCheckedBackgroundColor}
      />
      <AnimatedCheckMarkPath
        progress={progress}
        checkMarkColor={checkMarkColor}
      />
    </Svg>
  );
});

export default CustomCheckBox;
