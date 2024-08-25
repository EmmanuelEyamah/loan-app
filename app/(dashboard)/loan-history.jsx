import { View, Text, Pressable, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { ScrollView } from "react-native-virtualized-view";
import TxnCard from "../../components/TxnCard";
import { transactions } from "./(tabs)/home";

const LoanHistory = () => {
  const handleBackPress = () => {
    router.push("/home");
  };
  return (
    <SafeAreaView className="bg-white flex-1 p-4">
      <Pressable
        onPress={handleBackPress}
        className="flex flex-row items-center gap-3"
      >
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text className="text-2xl font-semibold">Back</Text>
      </Pressable>
      <View className="flex-1 mt-10 items-center">
        <Text className="text-2xl font-pmedium mb-4">Loan History</Text>
        <ScrollView>
          <FlatList
            data={transactions}
            keyExtractor={(item) => item.id}
            scrollEnabled={true}
            renderItem={({ item }) => (
              <TxnCard type={item.type} date={item.date} amount={item.amount} />
            )}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default LoanHistory;
