import { Text, View, Pressable, ScrollView, SafeAreaView } from "react-native";
import { Tabs, useRouter } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

import Variation from "@components/Variation";
import TimeFilter from "@components/TimeFilter";
import Stats from "@components/Stats";
import TabsRow from "@components/Tabs";

import TradeSolar from "@assets/trade-solar";
import TradeWind from "@assets/trade-wind";
import TradeNature from "@assets/trade-nature";

const Images = {
  Windy: <TradeWind />,
  Sunny: <TradeSolar />,
  Nature: <TradeNature />,
};

const Trade: {} = () => {
  const router = useRouter();
  const asset = useSelector((state) => state.fund.selectedAsset);

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
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Trade;
