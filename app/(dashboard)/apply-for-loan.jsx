import { View, Text, Modal, Pressable, BackHandler } from "react-native";
import React, { useCallback, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../../components/FormField";
import { AntDesign, FontAwesome6, Ionicons } from "@expo/vector-icons";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";
import { useFocusEffect } from "@react-navigation/native";
import { ScrollView } from "react-native-virtualized-view";
import { SelectList } from "react-native-dropdown-select-list";

const ApplyLoan = () => {
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

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showAmountField, setShowAmountField] = useState(false);
  const [selected, setSelected] = useState("");

  const handleProceed = () => {
    setIsModalVisible(false);
    setShowAmountField(true);
  };

  const handleBackPress = () => {
    router.push("/(tabs)/home");
  };

  const handleApply = () => {
    setIsModalVisible(true);
  };

  const loanPeriodData = Array.from({ length: 12 }, (_, i) => ({
    key: (i + 1).toString(),
    value: `${i + 1} month${i + 1 > 1 ? "s" : ""}`,
  }));

  return (
    <SafeAreaView className="bg-[#FAF9F6] flex-1 p-4">
      <Pressable
        onPress={handleBackPress}
        className="flex flex-row items-center gap-3"
      >
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text className="text-2xl font-semibold">Back</Text>
      </Pressable>
      <ScrollView>
        <View className="flex-1 mt-20 items-center">
          <Text className="text-2xl font-pmedium mb-4">Apply For Loan</Text>

          {showAmountField ? (
            <>
              <Text className="text-base mb-4 font-pregular text-center">
                Lorem ipsum dolor sit amet, Money adipisicing elit.
              </Text>
              <FormField
                title="Amount"
                otherStyles="mt-2"
                placeholder={"100,000"}
                prefixIcon={
                  <FontAwesome6
                    name="money-check-dollar"
                    size={24}
                    color="#ccc"
                  />
                }
              />
              <FormField
                title="Amount in words"
                otherStyles="mt-5"
                placeholder={"Five thousand naira only"}
                prefixIcon={
                  <FontAwesome6
                    name="money-check-dollar"
                    size={24}
                    color="#ccc"
                  />
                }
              />
              <View className="flex flex-col items-start w-full mt-5">
                <Text className="text-base text-black font-pmedium mb-3">
                  Loan Period
                </Text>
                <SelectList
                  setSelected={(val) => setSelected(val)}
                  data={loanPeriodData}
                  save="value"
                  placeholder="Select period"
                  search={false}
                  boxStyles={{
                    width: "100%",
                    maxHeight: 50,
                    borderColor: "#e5e7eb",
                  }}
                  dropdownStyles={{
                    maxHeight: 200,
                  }}
                />
              </View>
              <CustomButton
                title="Apply"
                containerStyles="mt-4"
                handlePress={handleApply}
              />
            </>
          ) : (
            <>
              <Text className="text-base mb-4 font-pregular text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </Text>
              <FormField
                title="BVN"
                otherStyles="mt-2"
                placeholder={"1234567890"}
                prefixIcon={<AntDesign name="idcard" size={24} color="#ccc" />}
              />
              <CustomButton
                title="Submit"
                containerStyles="mt-4"
                handlePress={() => setIsModalVisible(true)}
              />
            </>
          )}
        </View>

        <Modal
          transparent={true}
          visible={isModalVisible}
          animationType="slide"
          onRequestClose={() => setIsModalVisible(false)}
        >
          <View className="flex-1 justify-center items-center bg-gray-200 bg-opacity-50">
            <View className="bg-[#FAF9F6] flex flex-col justify-center items-center rounded-lg p-6 w-11/12">
              <Text className="text-lg mb-6">
                {showAmountField
                  ? "Loan application successfully"
                  : "BVN successfully verified"}
              </Text>
              <View className="flex flex-row items-center justify-center">
                <CustomButton
                  title="Proceed"
                  containerStyles="flex-1 ml-2"
                  handlePress={handleProceed}
                />
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ApplyLoan;
