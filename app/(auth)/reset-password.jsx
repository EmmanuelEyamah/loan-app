import { View, Text, ScrollView, Dimensions, Image, Modal } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import images from "../../constants/images";
import FormField from "./../../components/FormField";
import CustomButton from "./../../components/CustomButton";
import LottieView from "lottie-react-native";

const ResetPassword = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleProceed = () => {
    setIsModalVisible(true);
  };

  const handleModalProceed = () => {
    setIsModalVisible(false);
    router.push("/sign-in");
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView>
        <Image
          source={images.bgTop}
          resizeMode="cover"
          className="w-full h-[150px] absolute top-0"
        />
        <View
          className="w-full flex justify-center items-center h-full px-5 my-6"
          style={{
            minHeight: Dimensions.get("window").height - 100,
          }}
        >
          <Image
            source={images.Wlogo}
            resizeMode="contain"
            className="w-[200px] h-[70px]"
          />
          <Text className="text-2xl font-semibold text-primary uppercase mt-10 font-psemibold">
            Reset Password
          </Text>

          <FormField
            title="Password"
            otherStyles="mt-8"
            secureTextEntry={true}
          />
          <FormField
            title="Confirm Password"
            otherStyles="mt-8"
            secureTextEntry={true}
          />

          <CustomButton
            title="Reset"
            containerStyles="w-full mt-8"
            handlePress={handleProceed}
          />

          <Modal
            transparent={true}
            visible={isModalVisible}
            animationType="slide"
            onRequestClose={() => setIsModalVisible(false)}
          >
            <View className="flex-1 justify-center items-center bg-gray-200 bg-opacity-50">
              <View className="bg-white flex flex-col justify-center items-center rounded-lg p-6 w-11/12">
                <Text className="text-2xl font-semibold mb-4">
                  Password Reset Successfull
                </Text>
                <View className="w-40 h-40 flex items-center justify-center">
                  <LottieView
                    source={require("../../assets/animations/email-sent.json")}
                    autoPlay
                    loop
                  />
                </View>
                <CustomButton
                  title="Proceed to login"
                  handlePress={handleModalProceed}
                />
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ResetPassword;
