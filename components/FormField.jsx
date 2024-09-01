import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { icons } from "../constants";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  prefixIcon,
  editable = true,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-black font-pmedium">{title}</Text>

      <View className="w-full h-12 px-2 bg-[#FAF9F6]-100 rounded-xl border-2 border-gray-200 focus:border-primary flex flex-row items-center">
        {prefixIcon && <View className="mr-2">{prefixIcon}</View>}
        <TextInput
          className="flex-1 text-black font-pregular text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#ccc"
          onChangeText={handleChangeText}
          editable={editable}
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />

        {(title === "Password" ||
          title === "Current Password" ||
          title === "New Password" ||
          title === "Confirm Password") && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
