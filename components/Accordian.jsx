import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

function AccordionItem({
  isExpanded,
  children,
  viewKey,
  style,
  duration = 500,
}) {
  const height = useSharedValue(0);

  const derivedHeight = useDerivedValue(() =>
    withTiming(height.value * Number(isExpanded.value), {
      duration,
    })
  );
  const bodyStyle = useAnimatedStyle(() => ({
    height: derivedHeight.value,
  }));

  return (
    <Animated.View
      key={`accordionItem_${viewKey}`}
      style={[styles.animatedView, bodyStyle, style]}
    >
      <View
        onLayout={(e) => {
          height.value = e.nativeEvent.layout.height;
        }}
        style={styles.wrapper}
      >
        {children}
      </View>
    </Animated.View>
  );
}

export function Parent({ accordion }) {
  const open = useSharedValue(false);

  const onPress = () => {
    open.value = !open.value;
  };

  return (
    <View style={styles.parent}>
      <View style={styles.header}>
        <Text className="text-lg font-pregular text-black">
          {accordion.title}
        </Text>
        <Pressable onPress={onPress}>
          <Text>
            <AntDesign name="plus" size={20} color="#000" />
          </Text>
        </Pressable>
      </View>
      <AccordionItem isExpanded={open} viewKey={accordion.id}>
        <Text className="text-base font-plight mt-2">{accordion.content}</Text>
      </AccordionItem>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    width: "100%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ccc",
    padding: 8,
    borderRadius: 5,
  },
  animatedView: {
    width: "100%",
    overflow: "hidden",
  },
  wrapper: {
    width: "100%",
    position: "absolute",
    display: "flex",
    alignItems: "flex-start",
  },
});
