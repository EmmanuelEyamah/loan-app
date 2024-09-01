import React, { useCallback, useState } from "react";
import { View, Text, TextInput, Modal, BackHandler } from "react-native";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-virtualized-view";
import CustomButton from "../../components/CustomButton";
import { Feather, FontAwesome, Fontisto } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import { router } from "expo-router";

const Help = () => {
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

  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <SafeAreaView className="bg-[#FAF9F6] flex-1 p-4">
      <View className="flex mb-8 flex-row items-center justify-between">
        <DrawerToggleButton tintColor="#000" />
      </View>

      <ScrollView>
        <View className="flex-1 mt-10 items-center justify-center">
          <Text className="text-2xl font-pmedium mb-4">Help Center</Text>
          <Text className="text-base mb-4 font-pregular text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quis
            id numquam corrupti tempora ducimus quibusdam non labore
            necessitatibus optio?
          </Text>

          <View className="w-full mt-3">
            <TextInput
              multiline
              numberOfLines={8}
              className="w-full bg-none border border-primary rounded-md p-4 text-black font-normal text-base"
              placeholder="Type your message here..."
              placeholderTextColor="Your message here"
            />
          </View>

          <CustomButton
            title="Submit"
            containerStyles="mt-4"
            handlePress={() => setIsModalVisible(true)}
          />
          <View className="mt-7 flex">
            <Text className="text-lg font-pregular">
              You can also reach us on
            </Text>
            <View className="mt-2">
              <View className="flex flex-row items-center justify-center gap-3 mb-3">
                <FontAwesome name="whatsapp" size={24} color="black" />
                <Text className="text-base font-pregular">080773653725</Text>
              </View>
              <View className="flex flex-row items-center justify-center gap-3 mb-3">
                <Feather name="phone-call" size={24} color="black" />
                <Text className="text-base font-pregular">08066564745</Text>
              </View>
              <View className="flex flex-row items-center justify-center gap-3">
                <Fontisto name="email" size={24} color="black" />
                <Text className="text-base font-pregular">
                  example@gmail.com
                </Text>
              </View>
            </View>
          </View>
        </View>
        <Modal
          transparent={true}
          visible={isModalVisible}
          animationType="slide"
          onRequestClose={() => setIsModalVisible(false)}
        >
          <View className="flex-1 justify-center items-center bg-gray-200 bg-opacity-50">
            <View className="bg-[#FAF9F6] flex flex-col justify-center items-center rounded-lg p-6 w-11/12">
              <Text className="text-lg mb-6">Message sent successfully</Text>
              <View className="flex flex-row items-center justify-center">
                <CustomButton
                  title="Proceed"
                  containerStyles="flex-1 ml-2"
                  handlePress={() => {
                    setIsModalVisible(false);
                  }}
                />
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Help;
