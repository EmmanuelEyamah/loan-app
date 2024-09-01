import { View, Text, Pressable, Modal } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import CustomButton from "../../components/CustomButton";
import FormField from "../../components/FormField";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const DisableAccount = ({ goBack }) => {
  const [isFieldVisible, setIsFieldVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");

  const handleProceedClick = () => {
    if (isFieldVisible && verificationCode) {
      setIsModalVisible(true);
    } else {
      setIsFieldVisible(true);
    }
  };

  return (
    <SafeAreaView className="flex-1 p-4">
      <Pressable
        onPress={() => router.back()}
        className="flex flex-row items-center gap-3"
      >
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text className="text-2xl font-pmedium">Back</Text>
      </Pressable>
      <View className="flex mt-28  items-center justify-center">
        <Text className="text-2xl font-pmedium mb-7">Disable Account</Text>
        <Text className="text-base mb-2 font-pregular text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quis
          id numquam corrupti tempora ducimus quibusdam non labore
          necessitatibus optio?
        </Text>

        {isFieldVisible && (
          <FormField
            title="Verification Code"
            otherStyles="mt-8"
            placeholder={"0034565"}
            value={verificationCode}
            keyboardType="number-pad"
            onChangeText={setVerificationCode}
          />
        )}

        <CustomButton
          title={isFieldVisible ? "Enter Code" : "Proceed"}
          containerStyles="flex-1 mt-2"
          handlePress={handleProceedClick}
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
            <Text className="text-lg mb-6 text-red-500">
              Are you sure you want to disable your account?
            </Text>
            <View className="flex flex-row items-center justify-center">
              <CustomButton
                title="Cancel"
                bgColor="#fff"
                textolor="#2c67f2"
                containerStyles="flex-1 mr-2 border border-[#2c67f2]"
                handlePress={() => setIsModalVisible(false)}
              />
              <CustomButton
                title="Proceed"
                containerStyles="flex-1 ml-2"
                handlePress={() => {
                  setIsModalVisible(false);
                  router.push("/sign-in");
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default DisableAccount;
