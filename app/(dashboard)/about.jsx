import { View, Text, Image, BackHandler } from "react-native";
import React, { useCallback } from "react";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../../constants/images";
import { ScrollView } from "react-native-virtualized-view";
import { useFocusEffect } from "@react-navigation/native";
import { router } from "expo-router";

const About = () => {
  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        router.push("/(tabs)/home");
        return true;
      };

      BackHandler.addEventListener("hardwareBackPress", onBackPress);

      return () =>
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    }, [])
  );
  return (
    <SafeAreaView className="bg-[#FAF9F6] flex-1 p-4">
      <View className="flex mb-8 flex-row items-center justify-between">
        <Text className="text-2xl font-psemibold">About</Text>
        <DrawerToggleButton tintColor="#000" />
      </View>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="w-full items-center justify-center flex my-4 mb-8 px-4">
          <Image
            source={images.Wlogo}
            className="w-60 h-60"
            resizeMode="contain"
          />
          <Text className="text-center font-pregular">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            saepe non odit? Sunt distinctio, voluptatibus consequatur enim odio,
            sequi reiciendis iure ipsam eum ipsum libero, eveniet similique
            inventore aspernatur. Aperiam velit blanditiis, perspiciatis aliquam
            quia eveniet mollitia ad tempora, praesentium pariatur dignissimos
            quo dolorum possimus, natus repellat vero expedita magnam.
          </Text>
          <Text className="font-pregular mt-2 text-base">@copyright 2024</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default About;
