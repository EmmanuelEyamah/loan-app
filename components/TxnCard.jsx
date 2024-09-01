import React from "react";
import { View, Text } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

const TxnCard = ({ label, date, time, amount, type }) => {
  const isSent = type === "sent";
  return (
    <View className="w-full justify-between mb-6 flex flex-row items-center">
      <View className="gap-2 flex flex-row items-center">
        <FontAwesome name="bank" size={24} color="#1f2937" />
        <View>
          <Text className="text-black text-base font-pmedium">
            {isSent ? "Loan Repayment" : "Loan Received"}
          </Text>
          <Text className="text-[#a5a1a1] text-sm font-psemibold">
            {date} {time}
          </Text>
        </View>
      </View>
      <View className="gap-2 flex flex-row items-center">
        <Text
          className={`text-lg font-pmedium ${
            isSent ? "text-red-500" : "text-green-500"
          }`}
        >
          N {amount}
        </Text>
        <AntDesign
          name={isSent ? "arrowup" : "arrowdown"}
          size={24}
          color={isSent ? "red" : "green"}
          style={{ transform: isSent ? "rotate(45deg)" : "rotate(-45deg)" }}
        />
      </View>
    </View>
  );
};

export default TxnCard;
