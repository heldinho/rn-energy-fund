import { View, Text } from "react-native";

const Tabs = () => {
  return (
    <View className="flex-row">
      <View className="mr-6 border-b-2 border-b-purple-700 pb-1">
        <Text className="text-base font-semibold">Highlighted</Text>
      </View>
      <Text className="mr-6 font-regular text-base text-neutral-400">
        Value
      </Text>
      <Text className="mr-6 font-regular text-base text-neutral-400">
        Vintage
      </Text>
      <Text className="mr-6 font-regular text-base text-neutral-400">
        Registry
      </Text>
    </View>
  );
};

export default Tabs;
