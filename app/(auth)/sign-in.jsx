import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";
import images from "../../constants/images";
import FormField from "./../../components/FormField";
import CustomButton from "./../../components/CustomButton";
import { AntDesign, Fontisto } from "@expo/vector-icons";

const SignIn = () => {
  const handleProceed = () => {
    router.push("/home");
  };
  return (
    <SafeAreaView className="bg-[#FAF9F6] h-full">
      {/* <ImageBackground
        source={images.LoginImg}
        resizeMode="cover"
        style={{ flex: 1 }}
      > */}
      <View className="flex-1 justify-center">
        {/* <View
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "white",
              opacity: 0.95,
            }}
          /> */}
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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
              className="w-[200px] h-[50px]"
            />
            <Text className="text-2xl font-semibold text-primary uppercase mt-10 font-psemibold">
              Login
            </Text>
            <FormField
              title="Email Address"
              otherStyles="mt-8"
              keyboardType="email-address"
              placeholder={"example@gmail.com"}
              prefixIcon={<Fontisto name="email" size={24} color="#ccc" />}
            />
            <FormField
              title="Password"
              otherStyles="mt-8"
              placeholder={"*******"}
              keyboardType="number-pad"
              prefixIcon={<AntDesign name="lock" size={24} color="#ccc" />}
            />
            <View className="w-full flex items-start mt-2">
              <Link
                href="/forget-password"
                className="text-base font-psemibold text-primary capitalize underline"
              >
                forget Password
              </Link>
            </View>
            <CustomButton
              title="Sign In"
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
      </View>
      {/* </ImageBackground> */}
    </SafeAreaView>
  );
};

export default SignIn;
