import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import React from "react";
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedRef,
  useAnimatedStyle,
  interpolate,
  Extrapolation,
  runOnJS,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import data from "../constants/data";
import Pagination from "../components/Pagination";
import AnimatedButton from "../components/AnimationButton";

const Home = () => {
  const { width: SCREEN_WIDTH } = useWindowDimensions();
  const flatListRef = useAnimatedRef(null);
  const x = useSharedValue(0);
  const flatListIndex = useSharedValue(0);

  const onViewableItemsChanged = ({ viewableItems }) => {
    if (
      viewableItems &&
      viewableItems.length > 0 &&
      viewableItems[0].index !== undefined
    ) {
      flatListIndex.value = viewableItems[0].index;
    }
  };

  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      if (event.contentOffset.x < 0) {
        runOnJS(() =>
          flatListRef.current.scrollToIndex({ index: 0, animated: true })
        )();
        return;
      }
      x.value = event.contentOffset.x;
    },
  });

  const RenderItem = ({ item, index }) => {
    const imageAnimationStyle = useAnimatedStyle(() => {
      const opacityAnimation = interpolate(
        x.value,
        [
          (index - 1) * SCREEN_WIDTH,
          index * SCREEN_WIDTH,
          (index + 1) * SCREEN_WIDTH,
        ],
        [0, 1, 0],
        Extrapolation.CLAMP
      );
      const translateYAnimation = interpolate(
        x.value,
        [
          (index - 1) * SCREEN_WIDTH,
          index * SCREEN_WIDTH,
          (index + 1) * SCREEN_WIDTH,
        ],
        [100, 0, 100],
        Extrapolation.CLAMP
      );
      return {
        opacity: opacityAnimation,
        width: SCREEN_WIDTH * 0.8,
        height: SCREEN_WIDTH * 0.93,
        transform: [{ translateY: translateYAnimation }],
      };
    });
    const textAnimationStyle = useAnimatedStyle(() => {
      const opacityAnimation = interpolate(
        x.value,
        [
          (index - 1) * SCREEN_WIDTH,
          index * SCREEN_WIDTH,
          (index + 1) * SCREEN_WIDTH,
        ],
        [0, 1, 0],
        Extrapolation.CLAMP
      );
      const translateYAnimation = interpolate(
        x.value,
        [
          (index - 1) * SCREEN_WIDTH,
          index * SCREEN_WIDTH,
          (index + 1) * SCREEN_WIDTH,
        ],
        [100, 0, 100],
        Extrapolation.CLAMP
      );

      return {
        opacity: opacityAnimation,
        transform: [{ translateY: translateYAnimation }],
      };
    });
    return (
      <View style={[styles.itemContainer, { width: SCREEN_WIDTH }]}>
        <Animated.Image source={item.image} style={imageAnimationStyle} />
        <Animated.View style={textAnimationStyle} className="px-2">
          <Text className="text-center text-[38px] font-bold mb-3 text-primary font-pbold">
            {item.title}
          </Text>
          <Text className="text-center text-black leading-5 text-lg font-pmedium">
            {item.text}
          </Text>
        </Animated.View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.FlatList
        ref={flatListRef}
        onScroll={onScroll}
        data={data}
        renderItem={({ item, index }) => {
          return <RenderItem item={item} index={index} />;
        }}
        keyExtractor={(item) => item.id}
        scrollEventThrottle={16}
        horizontal={true}
        bounces={false}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{
          minimumViewTime: 300,
          viewAreaCoveragePercentThreshold: 10,
        }}
      />
      <View style={styles.bottomContainer}>
        <Pagination data={data} x={x} screenWidth={SCREEN_WIDTH} />
        <AnimatedButton
          flatListRef={flatListRef}
          flatListIndex={flatListIndex}
          dataLength={data.length}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF9F6",
  },
  itemContainer: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#FAF9F6",
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    paddingVertical: 20,
  },
});
