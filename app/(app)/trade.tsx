import { Text, View, Pressable, ScrollView, SafeAreaView } from "react-native";
import { Tabs, useRouter } from "expo-router";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { useSelector } from "react-redux";

import Variation from "@components/Variation";
import TimeFilter from "@components/TimeFilter";
import Stats from "@components/Stats";
import TabsRow from "@components/Tabs";

import TradeSolar from "@assets/trade-solar";
import TradeWind from "@assets/trade-wind";
import TradeNature from "@assets/trade-nature";
import ImageCard from "@components/ImageCard";

const Images = {
  Windy: <TradeWind />,
  Sunny: <TradeSolar />,
  Nature: <TradeNature />,
};

const Trade: {} = () => {
  const router = useRouter();
  const asset = useSelector((state) => state.fund.selectedAsset);
  const company = useSelector((state) => state.company);

  if (asset == null) {
    return null;
  }

  return (
    <>
      <Tabs.Screen
        options={{
          headerTitle: () => (
            <View className="flex-1 items-center justify-center">
              <Text className="font-semi-bold text-sm">{asset.title}</Text>
              <Text className="text-md font-regular">{asset.acronym}</Text>
            </View>
          ),
          title: "",
          headerLeft: () => (
            <Pressable
              className="ml-4 active:bg-gray-100"
              onPress={router.back}
            >
              <MaterialCommunityIcons name={"arrow-left"} size={24} />
            </Pressable>
          ),
        }}
      />

      <SafeAreaView className="flex-1 bg-white">
        <ScrollView className="flex-1 px-5">
          <View className="mt-6 mb-1 flex-row items-center justify-between">
            <Text className="font-semi-bold text-2xl">{asset.dailyPrice}</Text>
            <Text className="font-semi-bold text-2xl">{asset.year}</Text>
          </View>

          <Variation
            up={asset.signal === "positive"}
            variation={asset.dailyVariation}
          />

          <View className="-mx-3 mt-11 mb-4">{Images[asset.svg]}</View>

          <View className="-mx-2">
            <TimeFilter />
          </View>

          <Text className="mt-10 mb-3 font-semi-bold text-lg">
            Info & Stats
          </Text>

          <View className="flex-column">
            <View className="flex-row justify-between">
              <Stats label="AUM" description={asset.aum} />
              <Stats label="Issue Date" description={asset.issueDate} />
            </View>

            <View className="flex-row justify-between">
              <Stats label="Vintage Range" description={asset.vintageRange} />
              <Stats label="TER" description={asset.ter} />
            </View>

            <View className="flex-row justify-between">
              <Stats label="Price at Close" description={asset.closePrice} />
              <Stats label="Price at Open" description={asset.openPrice} />
            </View>
          </View>

          <Text className="mt-10 mb-3 font-semi-bold text-lg">
            Fund Breakdown
          </Text>

          <TabsRow />

          <View>
            <View className="-mx-9 mt-4">
              <ScrollView
                showsHorizontalScrollIndicator={false}
                className="px-5"
                horizontal
              >
                {company.map((c) => (
                  <ImageCard key={c.id} {...c} />
                ))}
                <View className="w-20" />
              </ScrollView>
            </View>
          </View>

          <View className="mt-16 flex-row">
            <Feather name="pie-chart" color={"#000"} size={20} />
            <Text className="ml-1 font-semi-bold">Your Portfolio</Text>
          </View>

          <View className="mt-5 flex-row justify-between">
            <Text className="font-semi-bold text-2xl">18 credits</Text>
            <Text className="font-semi-bold text-2xl">$328.14</Text>
          </View>
          <View className="mt-1 flex-row justify-between">
            <Variation up={true} variation="8.41%" />
            <Text className="font-regular text-base text-neutral-400">
              Last purchase 28d ago
            </Text>
          </View>

          <View className="mt-5 flex-row justify-between">
            <Pressable className="flex-1 rounded border border-neutral-400 p-3">
              <Text className="text-center text-sm font-medium text-purple-700">
                Sell
              </Text>
            </Pressable>
            <Pressable className="ml-2 flex-1 rounded bg-emerald-400 p-3">
              <Text className="text-center text-sm font-medium text-white">
                Retire credits
              </Text>
            </Pressable>
          </View>

          <Text className="mt-4 font-regular text-xs text-neutral-400">
            You’ve previously retired 28 credits of this asset
          </Text>

          <View className="mt-4 rounded bg-zinc-100 p-3">
            <Text className="font-regular text-xs text-neutral-400">
              Please note that prices are for reference only and may vary at the
              time of excecuting a buy or sell order.
            </Text>
            <Text className="mt-4 font-regular text-xs text-neutral-400">
              The information provided is not investment advice, and should not
              be used as a recommendation to buy or sell assets.
            </Text>
          </View>

          <Pressable className="my-6 h-14 w-full rounded-md bg-purple-700 active:bg-purple-900">
            <Text className="my-auto text-center text-base font-medium text-white">
              Buy
            </Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Trade;
