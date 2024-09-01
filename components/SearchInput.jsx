import { View, TextInput } from "react-native";
import CustomButton from "./CustomButton";

const SearchInput = () => {
  return (
    <View className="w-full">
      <View className="flex flex-row items-center space-x-4 w-full h-16 px-4 bg-[#FAF9F6] mt-3 rounded-2xl border-2 border-gray-200 focus:border-primary">
        <TextInput
          className="text-base mt-0.5 text-white flex-1 font-pregular"
          placeholder="Ask a question"
        />
      </View>
      <CustomButton title="Submit" containerStyles="mt-2" />
    </View>
  );
};

export default SearchInput;
