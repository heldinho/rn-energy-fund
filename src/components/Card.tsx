import { View, Text, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";

import { selectAsset } from "@redux/fundSlide";

import Windy from "@assets/graph-wind";
import Sunny from "@assets/graph-sun";
import Nature from "@assets/graph-nature";

import Variation from "@components/Variation";

const Images = {
  Windy: <Windy />,
  Sunny: <Sunny />,
  Nature: <Nature />,
};

interface CardProps {
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  color: string;
  title: string;
  svg: string;
  price: string;
  variation: string;
  signal?: "positive" | "negative";
}

const Card: React.FC<CardProps> = (props) => {
  const {
    icon,
    color,
    title,
    svg,
    price,
    variation,
    signal = "positive",
  } = props;
  const up = signal === "positive";
  const dispatch = useDispatch();

  return (
    <Pressable
      onPress={() => dispatch(selectAsset(props))}
      className={`ml-4 rounded-lg border border-gray-200 p-3 active:bg-zinc-100`}
    >
      <MaterialCommunityIcons size={20} name={icon} color={color} />
      <Text className="mt-1 font-semi-bold text-sm">{title}</Text>

      <View className="mt-3">{Images[svg]}</View>

      <View className="mt-4 flex-row items-center">
        <Text className="mr-2 font-regular text-sm">{price}</Text>
        <Variation up={up} variation={variation} />
      </View>
    </Pressable>
  );
};
export default Card;
