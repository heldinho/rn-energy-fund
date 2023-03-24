import { Image, View, Text, Pressable } from "react-native";

const AspiraDac = require("@assets/aspira-dac.png");
const ClimeWorks = require("@assets/climeworks.png");

import AspiradacLogo from "@assets/aspiradac-logo";
import ClimeWorksLogo from "@assets/climeworks-logo";

type ImageCardProps = {
  id: string;
  description: string;
};

const Images = {
  aspira: AspiraDac,
  climeworks: ClimeWorks,
};

const Logos = {
  aspira: <AspiradacLogo />,
  climeworks: <ClimeWorksLogo />,
};

const ImageCard: React.FC<ImageCardProps> = (props) => {
  const { id, description } = props;

  return (
    <Pressable
      className={`ml-4 flex flex-1 flex-col rounded-lg border border-gray-200 p-3`}
    >
      <View className="flex-1">
        <Image className="-m-3 rounded-t" source={Images[id]} />
      </View>

      <View className="mt-5 mb-3">{Logos[id]}</View>

      <View className="w-48">
        <Text className="mt-1 font-regular text-sm">{description}</Text>
      </View>

      <Text className="mt-3 font-regular underline">Read more</Text>
    </Pressable>
  );
};

export default ImageCard;
