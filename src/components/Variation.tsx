import { Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type VariationProps = {
  up: boolean;
  variation: string;
};

const Variation: React.FC<VariationProps> = (props) => {
  const { up, variation } = props;

  return (
    <View className="flex-row">
      <MaterialCommunityIcons
        size={16}
        color={up ? "#0FDF8F" : "#EE8688"}
        name={up ? "arrow-top-right-thin" : "arrow-bottom-right-thin"}
      />
      <Text
        className={`font-regular text-sm ${
          up ? "text-emerald-400" : "text-rose-400"
        }`}
      >
        {variation}
      </Text>
    </View>
  );
};
export default Variation;
