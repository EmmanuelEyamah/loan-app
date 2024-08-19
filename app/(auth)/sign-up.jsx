import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Image,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useMemo, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";
import images from "../../constants/images";
import FormField from "./../../components/FormField";
import CustomButton from "./../../components/CustomButton";
import * as DocumentPicker from "expo-document-picker";
import LottieView from "lottie-react-native";
import RadioGroup from "react-native-radio-buttons-group";

const SignUp = () => {
  const [step, setStep] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [selectedId, setSelectedId] = useState();

  const radioButtons = useMemo(
    () => [
      {
        id: "1",
        label: "Male",
        value: "male",
        color: "#2c67f2",
        size: 28,
      },
      {
        id: "2",
        label: "Female",
        value: "female",
        color: "#2c67f2",
        size: 28,
      },
    ],
    []
  );

  const handleProceed = () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setIsModalVisible(true);
      setModalMessage("Email verification has been sent to your email.");
    } else if (step === 3) {
      setIsModalVisible(true);
      setModalMessage("Email verification successfull.");
    } else if (step === 4) {
      setStep(5);
    } else if (step === 5) {
      setStep(6);
    } else if (step === 6) {
      setStep(7);
    } else if (step === 7) {
      setStep(8);
    } else if (step === 8) {
      setIsModalVisible(true);
      setModalMessage("Account created successfully.");
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleModalProceed = () => {
    setIsModalVisible(false);
    if (step === 2) {
      setStep(3);
    } else if (step === 3) {
      setStep(4);
    } else if (step === 8) {
      router.push("/sign-in");
      setStep(1);
    }
  };

  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    if (result.type === "success") {
      setProfilePhoto(result);
    }
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView>
        <Image
          source={images.bgTop}
          resizeMode="cover"
          className="w-full h-[150px] absolute top-0"
        />
        <View
          className="w-full flex justify-center items-center h-full px-5 my-6"
          style={{
            minHeight: Dimensions.get("window").height - 100,
          }}
        >
          <Image
            source={images.Wlogo}
            resizeMode="contain"
            className="w-[200px] h-[70px]"
          />
          <Text className="text-2xl font-semibold text-primary uppercase mt-10 font-psemibold">
            {step === 1
              ? "Create Account"
              : step === 2
              ? "Additional Information"
              : step === 3
              ? "Confirm Code"
              : step === 4
              ? "Create Password"
              : step === 5
              ? "Bank Information"
              : step === 6
              ? "Profile Photo"
              : "Guarantor Information"}
          </Text>

          {step === 1 && (
            <>
              <FormField title="Full Name" otherStyles="mt-8" />
              <FormField title="Phone" otherStyles="mt-8" />
              <FormField title="ID Number" otherStyles="mt-8" />
              <View className="w-full items-start mt-6">
                <RadioGroup
                  radioButtons={radioButtons}
                  onPress={setSelectedId}
                  selectedId={selectedId}
                  layout="row"
                />
              </View>
            </>
          )}

          {step === 2 && (
            <>
              <FormField title="Marital Status" otherStyles="mt-8" />
              <FormField title="Date Of Birth" otherStyles="mt-8" />
              <FormField title="Address" otherStyles="mt-8" />
              <FormField title="Email" otherStyles="mt-8" />
            </>
          )}

          {step === 3 && (
            <>
              <FormField title="Verification Code" otherStyles="mt-8" />
            </>
          )}

          {step === 4 && (
            <>
              <FormField
                title="Password"
                otherStyles="mt-8"
                secureTextEntry={true}
              />
              <FormField
                title="Confirm Password"
                otherStyles="mt-8"
                secureTextEntry={true}
              />
            </>
          )}

          {step === 5 && (
            <>
              <FormField title="Bank Name" otherStyles="mt-8" />
              <FormField title="Bank Account" otherStyles="mt-8" />
              <FormField title="BVN" otherStyles="mt-8" />
            </>
          )}

          {step === 6 && (
            <>
              <View className="mt-8 w-full flex items-center justify-center">
                <View className="bg-gray-400 rounded-full w-40 h-40"></View>
              </View>
              <CustomButton
                title="Upload Profile Photo"
                containerStyles="mt-8"
                handlePress={pickDocument}
              />
            </>
          )}

          {step === 7 && (
            <>
              <FormField title="Name of Guarantor" otherStyles="mt-8" />
              <FormField title="Phone" otherStyles="mt-8" />
              <FormField title="Email Address" otherStyles="mt-8" />
            </>
          )}

          {step === 8 && (
            <>
              <FormField title="Guarantor Bank Name" otherStyles="mt-8" />
              <FormField title="Guarantor Bank Account" otherStyles="mt-8" />
            </>
          )}

          <View className="flex flex-row justify-between w-full mt-7">
            {step > 1 && (
              <CustomButton
                title="Back"
                bgColor="#fff"
                textolor="#2c67f2"
                containerStyles="flex-1 mr-2 border border-[#2c67f2]"
                handlePress={handleBack}
              />
            )}
            <CustomButton
              title={step === 3 ? "Verify" : step === 7 ? "Proceed" : "Submit"}
              containerStyles={step > 1 ? "flex-1 ml-2" : "w-full"}
              handlePress={handleProceed}
            />
          </View>

          {step === 1 && (
            <View className="flex justify-center pt-5 flex-row gap-2">
              <Text className="text-lg text-gray-600 font-pregular">
                Have an account already?
              </Text>
              <Link
                href="/sign-in"
                className="text-lg font-psemibold uppercase text-primary"
              >
                Login
              </Link>
            </View>
          )}

          <Modal
            transparent={true}
            visible={isModalVisible}
            animationType="slide"
            onRequestClose={() => setIsModalVisible(false)}
          >
            <View className="flex-1 justify-center items-center bg-gray-200 bg-opacity-50">
              <View className="bg-white flex flex-col justify-center items-center rounded-lg p-6 w-11/12">
                <Text className="text-2xl font-semibold mb-4">
                  {step === 3
                    ? "Email Verification"
                    : step === 8
                    ? "Congratulations"
                    : "Confirm Email"}
                </Text>
                <View className="w-40 h-40 flex items-center justify-center">
                  {step === 3 ? (
                    <LottieView
                      source={require("../../assets/animations/email-sent.json")}
                      autoPlay
                      loop
                    />
                  ) : (
                    <LottieView
                      source={require("../../assets/animations/success.json")}
                      autoPlay
                      loop
                    />
                  )}
                </View>
                <Text className="text-lg mb-6">{modalMessage}</Text>
                <CustomButton
                  title="Proceed"
                  handlePress={handleModalProceed}
                />
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
