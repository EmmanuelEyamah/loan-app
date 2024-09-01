import { View, Text, Pressable, BackHandler } from "react-native";
import React, { useCallback, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import CustomButton from "../../components/CustomButton";
import FormField from "../../components/FormField";
import { useFocusEffect } from "@react-navigation/native";

const LoanRepayment = () => {
  const [activeCard, setActiveCard] = useState("full");

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        router.push("/(tabs)/home");
        return true;
      };

      BackHandler.addEventListener("hardwareBackPress", onBackPress);

      return () =>
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    }, [])
  );

  const handleBackPress = () => {
    router.push("/(tabs)/home");
  };

  return (
    <SafeAreaView className="bg-[#FAF9F6] flex-1 p-4">
      <Pressable
        onPress={handleBackPress}
        className="flex flex-row items-center gap-3"
      >
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text className="text-2xl font-semibold">Back</Text>
      </Pressable>
      <View className="flex-1 mt-20 items-center">
        <Text className="text-2xl font-pmedium mb-4">Loan Repayment</Text>
        <View className="w-full items-start flex px-2">
          <Pressable
            onPress={() => setActiveCard("full")}
            className={`w-full mb-4 p-4 h-[100px] rounded-md flex items-start justify-between ${
              activeCard === "full" ? "bg-blue-400" : "bg-slate-400"
            }`}
          >
            <Text
              className={`text-lg font-pmedium ${
                activeCard === "full" ? "text-white" : "text-black"
              }`}
            >
              Full Repayment
            </Text>
            <Text
              className={`text-2xl font-pmedium ${
                activeCard === "full" ? "text-white" : "text-black"
              }`}
            >
              N100,000
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setActiveCard("custom")}
            className={`w-full p-4 h-[100px] rounded-md flex items-start justify-between ${
              activeCard === "custom" ? "bg-blue-400" : "bg-slate-400"
            }`}
          >
            <Text
              className={`text-lg font-pmedium ${
                activeCard === "custom" ? "text-white" : "text-black"
              }`}
            >
              Custom Amount
            </Text>
          </Pressable>
        </View>
        {activeCard === "custom" && (
          <FormField
            title="Amount"
            otherStyles="mt-5"
            placeholder={"Enter your custom amount"}
            prefixIcon={
              <FontAwesome6 name="money-check-dollar" size={24} color="#ccc" />
            }
          />
        )}
        <CustomButton
          title="Proceed"
          containerStyles="mt-6"
          handlePress={() => {}}
        />
      </View>
    </SafeAreaView>
  );
};

export default LoanRepayment;
