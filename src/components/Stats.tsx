import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type StatsTypes = {
  label: string;
  description: string;
};

const Stats: React.FC<StatsTypes> = (props) => {
  const { label, description } = props;

  return (
    <View className="flex-1 items-start">
      <View className="my-2 basis-1/3 flex-row items-center">
        <Text className="mr-1 font-regular text-base text-neutral-400">
          {label}
        </Text>
        <MaterialCommunityIcons
          name="information-outline"
          size={16}
          color="#A0A0A0"
        />
      </View>
      <Text className="font-regular text-base text-neutral-400">
        {description}
      </Text>
    </View>
  );
};

export default Stats;
