import { View, Text, ScrollView, Dimensions, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import images from "../../constants/images";
import FormField from "./../../components/FormField";
import CustomButton from "./../../components/CustomButton";

const VerifyOtp = () => {
  const handleProceed = () => {
    router.push("/reset-password");
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
          className="w-full flex justify-center items-center h-full px-4 my-6"
          style={{
            minHeight: Dimensions.get("window").height - 100,
          }}
        >
          <Image
            source={images.Wlogo}
            resizeMode="contain"
            className="w-[200px] h-[70px]"
          />
          <Text className="text-xl text-center font-semibold text-primary uppercase mt-10 font-psemibold">
            Check your Email Inbox for OTP verify code.
          </Text>

          <FormField
            title="Verification Code"
            placeholder={"223344"}
            otherStyles="mt-8"
          />
          <CustomButton
            title="Submit"
            containerStyles="mt-7"
            handlePress={handleProceed}
          />
          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-600 font-pregular">
              Resend Code:
            </Text>
            <Text className="text-lg font-psemibold uppercase text-primary">
              02:00
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default VerifyOtp;
