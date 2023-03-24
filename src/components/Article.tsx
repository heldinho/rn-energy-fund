import { View, Text, Pressable } from "react-native";
import { Article as ArticleType } from "@redux/articleSlide";

const Article: React.FC<ArticleType> = (props) => {
  const { title, content } = props;
  return (
    <View className="ml-4 mb-4 flex flex-1 basis-1/3 rounded-xl bg-zinc-100 px-3 py-5 active:bg-zinc-50">
      <Text className="text-sm font-bold">{title}</Text>
      <Text numberOfLines={5} className="mt-3 font-regular">
        {content}
      </Text>
      <Text className="mt-3 text-right underline">read more {">"}</Text>
    </View>
  );
};

export default Article;
