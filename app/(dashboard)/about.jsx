import { View, Text, Image } from "react-native";
import React from "react";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../../constants/images";

const About = () => {
  return (
    <SafeAreaView className="bg-white flex-1 p-4">
      <View className="flex mb-8 flex-row items-center justify-between">
        <Text className="text-2xl font-psemibold">About</Text>
        <DrawerToggleButton tintColor="#000" />
      </View>

      <View className="w-full items-center justify-center flex my-4 mb-8 px-4">
        <Image
          source={images.Wlogo}
          className="w-60 h-60"
          resizeMode="contain"
        />
        <Text className="text-center font-pregular">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem saepe
          non odit? Sunt distinctio, voluptatibus consequatur enim odio, sequi
          reiciendis iure ipsam eum ipsum libero, eveniet similique inventore
          aspernatur. Aperiam velit blanditiis, perspiciatis aliquam quia
          eveniet mollitia ad tempora, praesentium pariatur dignissimos quo
          dolorum possimus, natus repellat vero expedita magnam.
        </Text>
        <Text className="font-pregular mt-2 text-base">@copyright 2024</Text>
      </View>
    </SafeAreaView>
  );
};

export default About;
