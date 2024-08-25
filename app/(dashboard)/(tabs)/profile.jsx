import { View, Text, FlatList, Pressable, Modal, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native-virtualized-view";
import Transaction from "./../../(screen)/transaction";
import AccountDetails from "../../(screen)/accountDetails";
import HelpCenter from "../../(screen)/helpcenter";
import Feedback from "../../(screen)/feedback";
import DisableAccount from "../../(screen)/disableAccount";
import CustomButton from "../../../components/CustomButton";
import { router } from "expo-router";
import { images } from "../../../constants";

const Profile = () => {
  const [currentScreen, setCurrentScreen] = useState("Profile");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const options = [
    {
      id: "1",
      icon: <AntDesign name="user" size={24} color="#ccc" />,
      title: "Account Details",
      screen: "AccountDetails",
    },
    {
      id: "2",
      icon: <AntDesign name="setting" size={24} color="#ccc" />,
      title: "Transaction History",
      screen: "Transaction",
    },
    {
      id: "3",
      icon: <Entypo name="help" size={24} color="black" />,
      title: "Help Center",
      screen: "HelpCenter",
    },
    {
      id: "4",
      icon: <MaterialIcons name="feedback" size={24} color="black" />,
      title: "Customer Feedback",
      screen: "CustomerFeedback",
    },
    {
      id: "5",
      icon: <AntDesign name="poweroff" size={24} color="black" />,
      title: "Disable Account",
      screen: "DisableAccount",
    },
    {
      id: "6",
      icon: <AntDesign name="login" size={24} color="#ef4444" />,
      title: "Logout",
      screen: "Logout",
      titleColor: "text-red-500",
    },
  ];

  const renderContent = () => {
    switch (currentScreen) {
      case "AccountDetails":
        return <AccountDetails goBack={() => setCurrentScreen("Profile")} />;
      case "Transaction":
        return <Transaction goBack={() => setCurrentScreen("Profile")} />;
      case "HelpCenter":
        return <HelpCenter goBack={() => setCurrentScreen("Profile")} />;
      case "CustomerFeedback":
        return <Feedback goBack={() => setCurrentScreen("Profile")} />;
      case "DisableAccount":
        return <DisableAccount goBack={() => setCurrentScreen("Profile")} />;
      default:
        return (
          <>
            <View className="p-4">
              <Text className="text-3xl font-pregular">Profile</Text>
            </View>
            <ScrollView>
              <View className="mt-4 w-full flex items-center justify-center">
                <View className="bg-gray-400 rounded-full w-40 h-40">
                  <Image
                    source={images.profile}
                    className="w-full h-full rounded-full "
                    resizeMode="cover"
                  />
                </View>
                <Text className="text-2xl text-black-200 font-pmedium mt-2">
                  Emmanuel Eyamah
                </Text>
                <Text className="text-2xl text-gray-200 font-pmedium">
                  @user3456
                </Text>
              </View>
              <View className="w-full mt-6 px-3">
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
            </ScrollView>
          </>
        );
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
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
                bgColor="#fff"
                textolor="#2c67f2"
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

export default Profile;
