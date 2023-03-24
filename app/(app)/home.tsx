import { Pressable, ScrollView, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

import Card from "@components/Card";

import Business from "@assets/business";
import { useSelector } from "react-redux";
import Article from "@components/Article";
import { useEffect } from "react";

export default function Home() {
  const fund = useSelector((state) => state.fund);
  const article = useSelector((state) => state.article);

  const router = useRouter();

  useEffect(() => {
    if (fund.selectedAsset) {
      router.push("/trade");
    }
  }, [fund.selectedAsset]);

  return (
    <SafeAreaView edges={["top"]} className="flex-1 bg-white">
      <ScrollView className="flex-1 px-5">
        <View className="mb-5 flex-row items-center justify-between">
          <Pressable className="rounded-full bg-zinc-100 p-2">
            <MaterialCommunityIcons size={24} name="account" />
          </Pressable>
          <View className="flex-row">
            <Text className="font-semi-bold text-sm">
              Account: {fund.account}
            </Text>
            <MaterialCommunityIcons size={18} name="chevron-down" />
          </View>
          <Pressable>
            <MaterialCommunityIcons size={24} name="bell-outline" />
          </Pressable>
        </View>

        <Text className="font-regular text-xs">Portfolio</Text>
        <View className="flex-row justify-between">
          <View>
            <View className="flex-row items-center">
              <Text className="font-semi-bold text-2xl">{fund.portfolio}</Text>
              <MaterialCommunityIcons
                color="#0FDF8F"
                size={18}
                name="arrow-top-right-thin"
              />
              <Text className=" text-emerald-400">{fund.increase}</Text>
            </View>
          </View>
          <Pressable className="mb-1 flex-row items-center gap-1 rounded bg-purple-700/10 p-2 active:bg-purple-700/40">
            <MaterialCommunityIcons
              size={24}
              color="#770FDF"
              name="circle-multiple-outline"
            />
            <Text className="font-semi-bold text-xs">Earn Rewards</Text>
          </Pressable>
        </View>

        <View className="-mx-5 mt-8 mb-5 border border-zinc-100" />
        <Text className="mb-5 font-semi-bold text-lg">Funds</Text>

        <View className="-mx-10">
          <ScrollView
            showsHorizontalScrollIndicator={false}
            className="px-5"
            horizontal
          >
            {fund.funds.map((f) => (
              <Card key={f.icon} {...f} />
            ))}
            <View className="w-20" />
          </ScrollView>
        </View>

        <View className="mt-5 rounded-lg bg-purple-700 p-5">
          <View className="flex-row">
            <View className="flex-1 justify-center">
              <Text className="mb-3 font-semi-bold text-[16px] text-white">
                Learn more about carbon credits
              </Text>
              <Text className="font-regular text-xs text-white">
                Check out our top tips!
              </Text>
            </View>
            <View className="flex-1 items-end">
              <Business />
            </View>
          </View>
        </View>

        <View className="-ml-4 mt-5 flex flex-row flex-wrap">
          {article.map((a) => (
            <Article key={a.id} {...a} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
