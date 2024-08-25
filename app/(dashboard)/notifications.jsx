import { View, Text, FlatList } from "react-native";
import React from "react";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Ionicons } from "@expo/vector-icons";

const Notifications = () => {
  return (
    <SafeAreaView className="bg-white flex-1 p-4">
      <View className="flex mb-8 flex-row items-center justify-between">
        <Text className="text-2xl font-psemibold">Notifications</Text>
        <DrawerToggleButton tintColor="#000" />
      </View>
      <FlatList
        data={["1", "2", "3", "4"]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <View className="w-full rounded-lg p-4 border border-gray-200 justify-between mb-6 flex flex-row items-center">
            <View className="gap-2 flex flex-row items-center">
              <View>
                <Text className="text-black text-base font-pmedium">
                  Loan Repayment
                </Text>
                <Text className="text-[#a5a1a1] text-sm font-psemibold">
                  12| 08 | 24 -- 9:45am
                </Text>
              </View>
            </View>
            <View className="gap-2 flex flex-row items-center">
              <Text className="text-black text-lg font-pmedium">N 12,000</Text>
              <AntDesign
                name="arrowup"
                size={24}
                color="lightgreen"
                style={{ transform: "rotate(45deg)" }}
              />
            </View>
          </View>
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
