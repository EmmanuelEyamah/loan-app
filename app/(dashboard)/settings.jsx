import { View, Text, FlatList, Pressable, Modal } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  AntDesign,
  Entypo,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { ScrollView } from "react-native-virtualized-view";
import { router } from "expo-router";
import AccountDetails from "../(screen)/accountDetails";
import DisableAccount from "../(screen)/disableAccount";
import HelpCenter from "../(screen)/helpcenter";
import Feedback from "../(screen)/feedback";
import CustomButton from "../../components/CustomButton";
import { DrawerToggleButton } from "@react-navigation/drawer";
import Report from "../(screen)/report";
import Password from "../(screen)/password";
import BankDetails from "../(screen)/bankdetails";
import Guarantor from "../(screen)/gurantor";

const Settings = () => {
  const [currentScreen, setCurrentScreen] = useState("Settings");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const options = [
    {
      id: "1",
      icon: <AntDesign name="user" size={24} color="black" />,
      title: "Account Details",
      screen: "AccountDetails",
    },
    {
      id: "2",
      icon: <AntDesign name="lock" size={24} color="black" />,
      title: "Change Password",
      screen: "Password",
    },
    {
      id: "3",
      icon: <MaterialIcons name="account-balance" size={24} color="black" />,
      title: "Bank Details",
      screen: "Bank",
    },
    {
      id: "4",
      icon: (
        <MaterialCommunityIcons
          name="card-account-details-outline"
          size={24}
          color="black"
        />
      ),
      title: "Guarantor Details",
      screen: "Guarantor",
    },
    {
      id: "5",
      icon: <AntDesign name="poweroff" size={24} color="black" />,
      title: "Disable Account",
      screen: "DisableAccount",
    },
  ];

  const options2 = [
    {
      id: "5",
      icon: <Entypo name="help" size={24} color="black" />,
      title: "Help Center",
      screen: "HelpCenter",
    },
    {
      id: "6",
      icon: <MaterialIcons name="feedback" size={24} color="black" />,
      title: "Customer Feedback",
      screen: "CustomerFeedback",
    },
    {
      id: "7",
      icon: <Entypo name="bug" size={24} color="black" />,
      title: "Report A Bug",
      screen: "Report",
    },
  ];

  const renderContent = () => {
    switch (currentScreen) {
      case "AccountDetails":
        return <AccountDetails goBack={() => setCurrentScreen("Settings")} />;
      case "DisableAccount":
        return <DisableAccount goBack={() => setCurrentScreen("Settings")} />;
      case "HelpCenter":
        return <HelpCenter goBack={() => setCurrentScreen("Settings")} />;
      case "CustomerFeedback":
        return <Feedback goBack={() => setCurrentScreen("Settings")} />;
      case "Password":
        return <Password goBack={() => setCurrentScreen("Settings")} />;
      case "Bank":
        return <BankDetails goBack={() => setCurrentScreen("Settings")} />;
      case "Guarantor":
        return <Guarantor goBack={() => setCurrentScreen("Settings")} />;
      case "Report":
        return <Report goBack={() => setCurrentScreen("Settings")} />;
      default:
        return (
          <>
            <View className="flex items-center justify-center">
              <Text className="text-3xl font-psemibold">Settings</Text>
            </View>
            <ScrollView>
              <View className="mt-4">
                <Text className="text-xl font-pregular mb-4 uppercase">
                  General
                </Text>
                <FlatList
                  data={options}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => (
                    <Pressable
                      onPress={() =>
                        item.screen === "Logout"
                          ? setIsModalVisible(true)
                          : setCurrentScreen(item.screen)
                      }
                      className="w-full h-[70px] border border-gray-200 mb-4 rounded-lg flex flex-row px-4 py-3 justify-between items-center"
                    >
                      <View className="flex flex-row gap-2 items-center">
                        {item.icon}
                        <Text
                          className={`text-black-200 text-xl ${
                            item.titleColor || ""
                          }`}
                        >
                          {item.title}
                        </Text>
                      </View>
                      <Ionicons
                        name="chevron-forward"
                        size={24}
                        color="black"
                      />
                    </Pressable>
                  )}
                />
              </View>
              <View className="mt-4">
                <Text className="text-xl font-pregular mb-4 uppercase">
                  Feedback
                </Text>
                <FlatList
                  data={options2}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => (
                    <Pressable
                      onPress={() => setCurrentScreen(item.screen)}
                      className="w-full h-[70px] border border-gray-200 mb-4 rounded-lg flex flex-row px-4 py-3 justify-between items-center"
                    >
                      <View className="flex flex-row gap-2 items-center">
                        {item.icon}
                        <Text
                          className={`text-black-200 text-xl ${
                            item.titleColor || ""
                          }`}
                        >
                          {item.title}
                        </Text>
                      </View>
                      <Ionicons
                        name="chevron-forward"
                        size={24}
                        color="black"
                      />
                    </Pressable>
                  )}
                />
              </View>
            </ScrollView>
          </>
        );
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white p-4">
      {currentScreen === "Settings" && (
        <View className="flex mb-8 flex-row items-center justify-between">
          <DrawerToggleButton tintColor="#000" />
        </View>
      )}
      {renderContent()}
      <Modal
        transparent={true}
        visible={isModalVisible}
        animationType="slide"
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View className="flex-1 justify-center items-center bg-gray-200 bg-opacity-50">
          <View className="bg-white flex flex-col justify-center items-center rounded-lg p-6 w-11/12">
            <Text className="text-lg mb-6 text-red-500">
              Are you sure you want to logout?
            </Text>
            <View className="flex flex-row items-center justify-center">
              <CustomButton
                title="Back"
                bgColor="#000"
                textColor="#000"
                containerStyles="flex-1 mr-2 border border-[#2c67f2]"
                handlePress={() => setIsModalVisible(false)}
              />
              <CustomButton
                title="Proceed"
                containerStyles="flex-1 ml-2"
                handlePress={() => {
                  setIsModalVisible(false);
                  router.push("/sign-in");
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Settings;
