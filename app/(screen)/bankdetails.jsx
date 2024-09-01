import { View, Text, Pressable } from "react-native";
import React from "react";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const BankDetails = () => {
  return (
    <SafeAreaView className="flex-1 p-4 bg-[#FAF9F6]">
      <Pressable
        onPress={() => router.back()}
        className="flex flex-row items-center gap-3"
      >
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text className="text-2xl font-semibold">Back</Text>
      </Pressable>
      <View className="flex items-center justify-center mt-12">
        <Text className="text-xl font-pmedium">Bank Details</Text>
        <FormField
          title="Bank Name"
          otherStyles="mt-8"
          placeholder={"Access Bank"}
          prefixIcon={<AntDesign name="bank" size={24} color="#ccc" />}
        />
        <FormField
          title="Bank Account"
          otherStyles="mt-8"
          placeholder={"012345678"}
          prefixIcon={
            <MaterialIcons name="account-balance" size={24} color="#ccc" />
          }
        />
        <FormField
          title="BVN"
          otherStyles="mt-8"
          placeholder={"012345678"}
          prefixIcon={<AntDesign name="idcard" size={24} color="#ccc" />}
        />
        <CustomButton
          title="Submit"
          containerStyles="w-full mt-6"
          handlePress={() => {}}
        />
      </View>
    </SafeAreaView>
  );
};

export default BankDetails;
