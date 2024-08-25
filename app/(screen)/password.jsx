import { View, Text, Pressable } from "react-native";
import React from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";

const Password = ({ goBack }) => {
  return (
    <View className="flex-1 p-4 bg-white">
      <Pressable onPress={goBack} className="flex flex-row items-center gap-3">
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text className="text-2xl font-semibold">Back</Text>
      </Pressable>
      <View className="flex items-center justify-center mt-12">
        <Text className="text-xl font-pmedium">Change Password</Text>
        <FormField
          title="Current Password"
          otherStyles="mt-8"
          secureTextEntry={true}
          placeholder={"******"}
          prefixIcon={<AntDesign name="lock" size={24} color="#ccc" />}
        />
        <FormField
          title="New Password"
          otherStyles="mt-8"
          secureTextEntry={true}
          placeholder={"******"}
          prefixIcon={<AntDesign name="lock" size={24} color="#ccc" />}
        />
        <FormField
          title="Confirm Password"
          otherStyles="mt-8"
          secureTextEntry={true}
          placeholder={"******"}
          prefixIcon={<AntDesign name="lock" size={24} color="#ccc" />}
        />
        <CustomButton
          title="Update Password"
          containerStyles="w-full mt-6"
          handlePress={() => {}}
        />
      </View>
    </View>
  );
};

export default Password;
