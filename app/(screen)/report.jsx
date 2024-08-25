import { View, Text, Pressable, TextInput, Modal } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import CustomButton from "../../components/CustomButton";
import StarRating from "../../components/starRating";

const Report = ({ goBack }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <View className="flex-1 p-4 bg-white">
      <Pressable onPress={goBack} className="flex flex-row items-center gap-3">
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text className="text-2xl font-semibold">Back</Text>
      </Pressable>
      <View className="flex-1 mt-10 items-center justify-center">
        <Text className="text-2xl font-pmedium mb-4">Report a Bug</Text>
        <Text className="text-base mb-4 font-pregular text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quis
          id numquam corrupti tempora ducimus quibusdam non labore
          necessitatibus optio?
        </Text>

        <View className="w-full mt-3">
          <Text className="text-lg text-black font-pmedium mb-2">Message</Text>
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
          <View className="bg-white flex flex-col justify-center items-center rounded-lg p-6 w-11/12">
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
    </View>
  );
};

export default Report;
