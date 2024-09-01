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
import { Ionicons } from "@expo/vector-icons";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const Report = () => {
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
            <Text className="text-2xl font-pmedium mb-4">Report a Bug</Text>
            <Text className="text-base mb-4 font-pregular text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
              quis id numquam corrupti tempora ducimus quibusdam non labore
              necessitatibus optio?
            </Text>

            <View className="w-full mt-3">
              <Text className="text-lg text-black font-pmedium mb-2">
                Message
              </Text>
              <TextInput
                multiline
                numberOfLines={10}
                className="w-full bg-none border border-primary rounded-md p-4 text-black font-normal text-base"
                placeholder="Type your message here..."
                placeholderTextColor="#888"
              />
            </View>

            <CustomButton
              title="Submit"
              containerStyles="mt-4"
              handlePress={() => setIsModalVisible(true)}
            />
          </View>
          <Modal
            transparent={true}
            visible={isModalVisible}
            animationType="slide"
            onRequestClose={() => setIsModalVisible(false)}
          >
            <View className="flex-1 justify-center items-center bg-gray-200 bg-opacity-50">
              <View className="bg-[#FAF9F6] flex flex-col justify-center items-center rounded-lg p-6 w-11/12">
                <Text className="text-lg mb-6">Report sent successfully</Text>
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

export default Report;
