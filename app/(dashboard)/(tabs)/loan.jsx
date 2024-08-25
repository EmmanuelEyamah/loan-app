import { View, Text, FlatList, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { ScrollView } from "react-native-virtualized-view";
import { router } from "expo-router";
import TxnCard from "../../../components/TxnCard";
import { transactions } from "./home";

const Loan = () => {
  const options = [
    {
      id: "1",
      label: "Apply for Loan",
      icon: <FontAwesome name="money" size={24} color="#4b5563" />,
      route: "/apply-for-loan",
    },
    {
      id: "2",
      label: "Loan Repayment",
      icon: (
        <MaterialCommunityIcons name="cash-refund" size={24} color="#4b5563" />
      ),
      route: "/loan-repayment",
    },
    {
      id: "3",
      label: "Loan History",
      icon: <FontAwesome name="history" size={24} color="#4b5563" />,
      route: "/loan-history",
    },
  ];

  const handlePress = (route) => {
    router.push(route);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="p-4">
        <Text className="text-3xl font-pmedium">Loan</Text>
      </View>
      <View className="p-3 items-center justify-center w-full">
        <FlatList
          data={options}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => handlePress(item.route)}
              className="w-[118px] flex items-center justify-center mr-4 rounded-md h-[150px] border border-gray-300"
            >
              {item.icon}
              <Text className="mt-2 text-center font-pregular">
                {item.label}
              </Text>
            </Pressable>
          )}
        />
        <View className="w-full mt-3 h-[150px] bg-blue-400 rounded-xl bg-opacity-50 p-3">
          <View className="flex w-full flex-row items-center justify-between">
            <Text className="text-xl text-white font-pmedium">Loan Status</Text>
            <View className="bg-primary py-2 px-4 rounded-sm ">
              <Text className="text-base text-white font-pregular">
                Pay Now
              </Text>
            </View>
          </View>
          <Text className="text-3xl text-white font-pmedium mt-2">
            N180,000
          </Text>
          <View className="flex w-full flex-row items-center justify-between mt-6">
            <Text className="text-base text-white font-pmedium">
              Date: 12-08-24
            </Text>
            <Text className="text-base text-white font-pmedium">
              Due Date: 12-09-24
            </Text>
          </View>
        </View>
      </View>
      <ScrollView className="mt-7 p-3">
        <View className="w-full flex flex-row items-center justify-between mb-5">
          <Text className="text-black-100 text-[23px] font-pmedium">
            Recents Transactions
          </Text>
        </View>

        <FlatList
          data={transactions}
          keyExtractor={(item) => item.id}
          scrollEnabled={true}
          renderItem={({ item }) => (
            <TxnCard type={item.type} date={item.date} amount={item.amount} />
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Loan;
