import { View, Text, Pressable, Image } from "react-native";
import React, { useState } from "react";
import { AntDesign, Feather, Fontisto, Ionicons } from "@expo/vector-icons";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import { ScrollView } from "react-native-virtualized-view";
import { router } from "expo-router"; // Import router from expo-router
import CustomButton from "../../components/CustomButton";
import { SafeAreaView } from "react-native-safe-area-context";

const AccountDetails = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <SafeAreaView className="flex-1 p-4 bg-[#FAF9F6]">
      <Pressable
        onPress={() => router.back()}
        className="flex flex-row items-center gap-3"
      >
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text className="text-2xl font-semibold">Back</Text>
      </Pressable>

      <View className="mt-4 mb-7 w-full flex items-center justify-center">
        <View className="bg-gray-400 rounded-full w-40 h-40">
          <Image
            source={images.profile}
            className="w-full h-full rounded-full"
            resizeMode="cover"
          />
        </View>
      </View>

      <ScrollView>
        <View className="w-full flex items-center gap-1 justify-end flex-row">
          {!isEditing ? (
            <Pressable
              onPress={() => setIsEditing(true)}
              className="flex flex-row items-center"
            >
              <AntDesign name="edit" size={20} color="#2c67f2" />
              <Text className="text-lg underline text-primary font-pregular text-left">
                Edit Details
              </Text>
            </Pressable>
          ) : (
            <View className="flex flex-row gap-4">
              <Pressable onPress={() => setIsEditing(false)}>
                <Text className="text-lg text-red-500">Cancel</Text>
              </Pressable>
              <Pressable onPress={() => setIsEditing(false)}>
                <Text className="text-lg text-green-500">Update</Text>
              </Pressable>
            </View>
          )}
        </View>

        <View className="mt-3">
          <Text className="text-xl font-pregular">Personal Details</Text>
          <FormField
            title="Full Name"
            value={"Manny"}
            editable={isEditing}
            otherStyles="mt-8"
            prefixIcon={<AntDesign name="user" size={24} color="#ccc" />}
          />
          <FormField
            title="Phone"
            value={"07874322777"}
            editable={isEditing}
            otherStyles="mt-8"
            prefixIcon={<Feather name="phone" size={24} color="#ccc" />}
          />
          <FormField
            title="ID Number"
            value={"1234567890"}
            editable={isEditing}
            otherStyles="mt-8"
            prefixIcon={<AntDesign name="idcard" size={24} color="#ccc" />}
          />
          <FormField
            title="Date Of Birth"
            value={"12-12-24"}
            editable={isEditing}
            otherStyles="mt-8"
            prefixIcon={<Fontisto name="date" size={24} color="#ccc" />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountDetails;
