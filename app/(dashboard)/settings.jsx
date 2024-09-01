import {
  View,
  Text,
  FlatList,
  Pressable,
  Modal,
  BackHandler,
} from "react-native";
import React, { useCallback, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native-virtualized-view";
import { router } from "expo-router";
import CustomButton from "../../components/CustomButton";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { useFocusEffect } from "@react-navigation/native";

const Settings = () => {
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

  const [currentScreen, setCurrentScreen] = useState("Settings");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const options = [
    {
      id: "1",
      icon: <AntDesign name="user" size={24} color="black" />,
      title: "Account Details",
      screen: "accountDetails",
    },
    {
      id: "2",
      icon: <AntDesign name="lock" size={24} color="black" />,
      title: "Change Password",
      screen: "password",
    },
    {
      id: "3",
      icon: <AntDesign name="poweroff" size={24} color="black" />,
      title: "Disable Account",
      screen: "disableAccount",
    },
  ];

  const options2 = [
    {
      id: "5",
      icon: <Entypo name="help" size={24} color="black" />,
      title: "Help Center",
      screen: "helpcenter",
    },
    {
      id: "6",
      icon: <MaterialIcons name="feedback" size={24} color="black" />,
      title: "Customer Feedback",
      screen: "feedback",
    },
    {
      id: "7",
      icon: <Entypo name="bug" size={24} color="black" />,
      title: "Report A Bug",
      screen: "report",
    },
  ];

  const handleNavigation = (screen) => {
    switch (screen) {
      case "Logout":
        setIsModalVisible(true);
        break;
      default:
        router.push(`/(screen)/${screen}`);
        break;
    }
  };

  const renderContent = () => {
    switch (currentScreen) {
      default:
        return (
          <>
            <View className="flex items-center mt-10 justify-center">
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
                      onPress={() => handleNavigation(item.screen)}
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
                      onPress={() => handleNavigation(item.screen)}
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
    <SafeAreaView className="flex-1 bg-[#FAF9F6] p-4">
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
          <View className="bg-[#FAF9F6] flex flex-col justify-center items-center rounded-lg p-6 w-11/12">
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
