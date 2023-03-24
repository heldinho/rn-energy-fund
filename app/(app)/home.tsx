import { Pressable, ScrollView, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

import Card from "@components/Card";
import Windy from "@assets/graph-wind";
import Sunny from "@assets/graph-sun";
import Nature from "@assets/graph-nature";
import Business from "@assets/business";

export default function Home() {
  return (
    <SafeAreaView edges={["top"]} className="flex-1 bg-white">
      <ScrollView className="flex-1 px-5">
        <View className="mb-5 flex-row items-center justify-between">
          <Pressable className="rounded-full bg-zinc-100 p-2">
            <MaterialCommunityIcons size={24} name="account" />
          </Pressable>
          <View className="flex-row">
            <Text className="text-md font-semi-bold">Account: $1,457.23</Text>
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
              <Text className="font-semi-bold text-2xl">$1,245.23</Text>
              <MaterialCommunityIcons
                color="#0FDF8F"
                size={18}
                name="arrow-top-right-thin"
              />
              <Text className=" text-emerald-400">31.82%</Text>
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

        <View className="w-100 -mx-5 mt-8 mb-5 border border-zinc-100" />

        <Text className="mb-5 font-semi-bold text-lg">Funds</Text>

        <View className="-mx-10">
          <ScrollView
            showsHorizontalScrollIndicator={false}
            className="px-5"
            horizontal
          >
            <Card
              icon="weather-windy"
              color="#4A88D0"
              title="Wind Fund"
              Svg={<Windy />}
              price="$1032.23"
              variation="3.51%"
            />
            <Card
              icon="weather-sunny"
              color="#F0A719"
              title="Solar Fund"
              Svg={<Sunny />}
              price="$963.61"
              variation="0.13%"
              signal="negative"
            />
            <Card
              icon="leaf"
              color="#0FDF8F"
              title="Nature"
              Svg={<Nature />}
              price="$1122.95"
              variation="0.30%"
            />
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

        <View className="my-5 flex-row">
          <View className="flex-1 rounded-xl bg-zinc-100 px-3 py-5">
            <Text className="text-sm font-bold">
              Why should you invest here?
            </Text>
            <Text numberOfLines={4} className="mt-3 font-regular">
              The demand for renewable energy is on the rise, driven by
              increasing concern over climate change and the need to transition
              away from fossil fuels. As a result, the renewable energy market
              is expected to continue to grow, presenting potential investment
              opportunities.
            </Text>
            <Text className="mt-3 text-right underline">read more {">"}</Text>
          </View>
          <View className="ml-5 flex-1 rounded-xl bg-zinc-100 px-3 py-5">
            <Text className="text-sm font-bold">
              Why Invest In Eletric Vehicles?
            </Text>
            <Text numberOfLines={4} className="mt-3 font-regular">
              EVs have a lower carbon footprint compared to traditional
              gasoline-powered vehicles, and investing in them can help reduce
              greenhouse gas emissions and combat climate change.
            </Text>
            <Text className="mt-3 text-right underline">read more {">"}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
