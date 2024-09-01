import { View, Text, Dimensions, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import images from "../../constants/images";
import FormField from "./../../components/FormField";
import CustomButton from "./../../components/CustomButton";
import { Fontisto } from "@expo/vector-icons";
import { ScrollView } from "react-native-virtualized-view";

const ForgetPassword = () => {
  const handleProceed = () => {
    router.push("/verify-otp");
  };

  return (
    <SafeAreaView className="bg-[#FAF9F6] h-full">
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
            A verify otp will be sent to you Email address
          </Text>
          <FormField
            title="Email Address"
            otherStyles="mt-8"
            keyboardType="email-address"
            placeholder={"example@gmail.com"}
            prefixIcon={<Fontisto name="email" size={24} color="#ccc" />}
          />
          <CustomButton
            title="Get Code"
            containerStyles="mt-7"
            handlePress={handleProceed}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgetPassword;
