import { View, Text, Pressable, FlatList } from "react-native";
import React from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";

const Transaction = ({ goBack }) => {
  return (
    <View className="flex-1 p-4 bg-white">
      <Pressable onPress={goBack} className="flex flex-row items-center gap-3">
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text className="text-2xl font-semibold">Back</Text>
      </Pressable>
      <View className="flex-1 mt-10 items-center justify-start">
        <Text className="text-2xl font-pmedium mb-4">Transaction History</Text>
        <View>
          <FlatList
            data={[]}
            keyExtractor={(item) => item.$id}
            scrollEnabled={true}
            renderItem={({ item }) => (
              <View className="w-full justify-between mb-6 flex flex-row items-center">
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
                  <Text className="text-black text-lg font-pmedium">
                    N 12,000
                  </Text>
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
                    Woops, No transaction history here
                  </Text>
                  <Text className="font-pregular text-lg text-center text-[#ccc]">
                    When you request a loan or make loan payment, all
                    transaction history will appear here.
                  </Text>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default Transaction;
