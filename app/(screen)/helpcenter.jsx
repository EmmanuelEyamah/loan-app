import {
  View,
  Text,
  Pressable,
  TextInput,
  Modal,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { Feather, FontAwesome, Fontisto, Ionicons } from "@expo/vector-icons";
import CustomButton from "../../components/CustomButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const HelpCenter = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <SafeAreaView className="flex-1 p-4 bg-[#FAF9F6]">
          <Pressable
            onPress={() => router.back()}
            className="flex flex-row items-center gap-3"
          >
            <Ionicons name="arrow-back" size={24} color="black" />
            <Text className="text-2xl font-semibold">Back</Text>
          </Pressable>
          <View className="flex-1 mt-10 items-center justify-center">
            <Text className="text-2xl font-pmedium mb-4">Help Center</Text>
            <Text className="text-base mb-4 font-pregular text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
              quis id numquam corrupti tempora ducimus quibusdam non labore
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
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default HelpCenter;
