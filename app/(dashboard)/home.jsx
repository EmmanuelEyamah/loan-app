import { View, Text, Image, FlatList, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../../constants/images";

const Home = () => {
  return (
    <SafeAreaView className="bg-white">
      <View className="flex px-4 py-3">
        <View className="flex justify-between items-start flex-row">
          <View className="items-center flex flex-row gap-5">
            <Pressable onPress={() => {}}>
              <Image
                source={images.Menu}
                resizeMode="contain"
                className="w-9 h-7"
              />
            </Pressable>
            <View>
              <Text className="font-pmedium text-sm text-gray-500">
                Welcome
              </Text>
              <Text className="text-2xl font-psemibold text-primary capitalize">
                Manny
              </Text>
            </View>
          </View>

          <View className="mt-1.5">
            <Image
              source={images.profile}
              className="w-12 h-12 rounded-full "
              resizeMode="cover"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
