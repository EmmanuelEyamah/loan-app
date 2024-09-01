import { View, Text, Pressable } from "react-native";
import React from "react";
import {
  AntDesign,
  Feather,
  Fontisto,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { ScrollView } from "react-native-virtualized-view";
import { router } from "expo-router";

const Guarantor = () => {
  return (
    <ScrollView className="flex-1 p-4 bg-[#FAF9F6]">
      <Pressable
        onPress={() => router.back()}
        className="flex flex-row items-center gap-3"
      >
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text className="text-2xl font-semibold">Back</Text>
      </Pressable>
      <View className="flex items-center justify-center mt-5">
        <Text className="text-xl font-pmedium">Guarantor Details</Text>
        <FormField
          title="Name of Guarantor"
          otherStyles="mt-8"
          placeholder={"Philip "}
          prefixIcon={<AntDesign name="user" size={24} color="#ccc" />}
        />
        <FormField
          title="Phone"
          otherStyles="mt-8"
          placeholder={"1234567890"}
          prefixIcon={<Feather name="phone" size={24} color="#ccc" />}
        />
        <FormField
          title="Email Address"
          otherStyles="mt-8"
          placeholder={"example@gmail.com"}
          prefixIcon={<Fontisto name="email" size={24} color="#ccc" />}
        />
        <FormField
          title="Guarantor Bank Name"
          otherStyles="mt-8"
          placeholder={"Access Bank"}
          prefixIcon={<AntDesign name="bank" size={24} color="#ccc" />}
        />
        <FormField
          title="Guarantor Bank Account"
          otherStyles="mt-8"
          placeholder={"1234567890"}
          prefixIcon={
            <MaterialIcons name="account-balance" size={24} color="#ccc" />
          }
        />
        <CustomButton
          title="Submit"
          containerStyles="w-full mt-6"
          handlePress={() => {}}
        />
      </View>
    </ScrollView>
  );
};

export default Guarantor;
