import React, { useCallback, useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  Pressable,
  BackHandler,
  Modal,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../../../constants/images";
import { DrawerToggleButton } from "@react-navigation/drawer";
import {
  AntDesign,
  Feather,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { router } from "expo-router";
import { ScrollView } from "react-native-virtualized-view";
import TxnCard from "../../../components/TxnCard";
import { useFocusEffect } from "@react-navigation/native";

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

const Home = () => {
  const [isBalanceVisible, setIsBalanceVisible] = useState(false);
  const [isExitModalVisible, setIsExitModalVisible] = useState(false);

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        setIsExitModalVisible(true);
        return true; // Prevent default back behavior
      };

      BackHandler.addEventListener("hardwareBackPress", onBackPress);

      return () =>
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    }, [])
  );

  const handleExitApp = () => {
    BackHandler.exitApp(); // Exit the app
  };

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
    <SafeAreaView className="bg-[#FAF9F6] flex-1">
      <View className="flex px-4 py-3">
        <View className="flex fixed justify-between items-start flex-row">
          <View className="items-center flex flex-row gap-3">
            <View className="mt-1.5">
              <Image
                source={images.profile}
                className="w-12 h-12 rounded-full"
                resizeMode="cover"
              />
            </View>
            <View>
              <Text className="font-pmedium text-sm text-gray-500">
                Welcome
              </Text>
              <Text className="text-2xl font-psemibold text-primary capitalize">
                Manny
              </Text>
            </View>
          </View>
          <View className="mt-3">
            <DrawerToggleButton tintColor="#000" />
          </View>
        </View>
      </View>
      <ScrollView>
        <View className="p-3 items-center justify-center w-full">
          <View className="w-full h-[200px] bg-slate-200 border border-gray-300 rounded-lg bg-opacity-50 relative overflow-hidden">
            <View
              className="w-[200px] h-full bg-blue-400 absolute -right-20"
              style={{ transform: "rotate(45deg)" }}
            >
              <Image
                source={images.Blogo}
                className="w-24 h-20 absolute bottom-10 left-6"
                resizeMode="contain"
                style={{ transform: "rotate(-45deg)" }}
              />
            </View>
            <View className="p-4 flex justify-between h-full">
              <View>
                <View className="flex flex-row gap-2">
                  <Text className="text-primary font-pmedium text-4xl">
                    {isBalanceVisible ? "N180,000" : "****"}{" "}
                  </Text>
                  <Feather
                    name={isBalanceVisible ? "eye" : "eye-off"}
                    size={24}
                    color="black"
                    onPress={() => setIsBalanceVisible(!isBalanceVisible)}
                  />
                </View>
                <Text className="font-pregular text-base">Account Balance</Text>
              </View>
              <View>
                <Text className="font-pregular text-lg">
                  Last Login: 20-08-24
                </Text>
              </View>
            </View>
          </View>

          <FlatList
            data={options}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => handlePress(item.route)}
                className="mt-6 w-[118px] flex items-center justify-center mr-4 rounded-md h-[150px] border border-gray-300"
              >
                {item.icon}
                <Text className="mt-2 text-center font-pregular">
                  {item.label}
                </Text>
              </Pressable>
            )}
          />
        </View>
        <View className="mt-7 p-3">
          <View className="w-full flex flex-row items-center justify-between mb-5">
            <Text className="text-black-100 text-[23px] font-pmedium">
              Recent Activity
            </Text>
            <Text
              className="text-primary underline text-[16px] font-pmedium"
              onPress={() => router.push("/loan-history")}
            >
              View More
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
        </View>
      </ScrollView>

      <Modal
        visible={isExitModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setIsExitModalVisible(false)}
      >
        <View className="flex-1 justify-center items-center bg-gray-500 bg-opacity-50">
          <View className="bg-white p-5 rounded-lg w-80">
            <Text className="text-xl font-pmedium mb-4">
              Do you want to exit the app?
            </Text>
            <View className="flex-row justify-between">
              <TouchableOpacity
                onPress={() => setIsExitModalVisible(false)}
                className="px-5 py-2 bg-gray-200 rounded"
              >
                <Text className="text-base font-pmedium">No</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleExitApp}
                className="px-5 py-2 bg-red-500 rounded"
              >
                <Text className="text-base font-pmedium text-white">Yes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Home;
