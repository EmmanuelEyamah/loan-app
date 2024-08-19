import { View, Text, ScrollView, Dimensions, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";
import images from "../../constants/images";
import FormField from "./../../components/FormField";
import CustomButton from "./../../components/CustomButton";

const SignIn = () => {
  const handleProceed = () => {
    router.push("/home");
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
          <Text className="text-2xl font-semibold text-primary uppercase mt-10 font-psemibold">
            Login
          </Text>
          <FormField
            title="Email Address"
            otherStyles="mt-8"
            keyboardType="email-address"
          />
          <FormField title="Password" otherStyles="mt-8" />
          <View className="w-full flex items-start mt-2">
            <Link
              href="/forget-password"
              className="text-base font-psemibold text-primary capitalize underline"
            >
              forget Password
            </Link>
          </View>
          <CustomButton
            title="Sign up"
            containerStyles="mt-7"
            handlePress={handleProceed}
          />
          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-600 font-pregular">
              Don't have an account?
            </Text>
            <Link
              href="/sign-up"
              className="text-lg font-psemibold uppercase text-primary"
            >
              Signup
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
