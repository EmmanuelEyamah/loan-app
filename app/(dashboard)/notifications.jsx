import { View, Text, FlatList, BackHandler } from "react-native";
import React, { useCallback } from "react";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFocusEffect } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import TxnCard from "../../components/TxnCard";
import { router } from "expo-router";

export const transactions = [
  { id: "1", type: "sent", date: "12 | 08 | 24 -- 9:45am", amount: "12,000" },
  {
    id: "2",
    type: "received",
    date: "13 | 08 | 24 -- 10:15am",
    amount: "15,000",
  },
  { id: "3", type: "sent", date: "14 | 08 | 24 -- 2:30pm", amount: "8,500" },
];

const Notifications = () => {
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

  return (
    <SafeAreaView className="bg-[#FAF9F6] flex-1 p-4">
      <View className="flex mb-8 flex-row items-center justify-between">
        <Text className="text-2xl font-psemibold">Notifications</Text>
        <DrawerToggleButton tintColor="#000" />
      </View>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TxnCard type={item.type} date={item.date} amount={item.amount} />
        )}
        ListEmptyComponent={() => (
          <View className="flex w-full items-center justify-center h-full p-5">
            <View className="flex w-full items-center justify-center h-[400px] gap-3 ">
              <Ionicons name="notifications" size={150} color="#2c67f2" />
              <Text className="font-psemibold text-2xl text-center">
                Woops, No Notifications here
              </Text>
              <Text className="font-pregular text-lg text-center text-[#ccc]">
                When you request a loan or make loan payment, all notifications
                will appear here.
              </Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Notifications;
