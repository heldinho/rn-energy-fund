import { View, Text } from "react-native";
import { Tabs } from "expo-router";
import {
  MaterialCommunityIcons,
  Foundation,
  Feather,
} from "@expo/vector-icons";

export const unstable_settings = {
  initialRouteName: "home",
};

export default function AppLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        options={{
          tabBarActiveTintColor: "#770fdf",
          tabBarInactiveTintColor: "#000",
          tabBarLabel: ({ focused, color }) => {
            return (
              <View>
                <Text
                  className={`text-[${color}] ${
                    focused && "font-regular text-xs"
                  } ${!focused && " text-xs font-bold"}`}
                >
                  Home
                </Text>
              </View>
            );
          },
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Foundation name="home" color={color} size={24} />
          ),
        }}
        name="home"
      />
      <Tabs.Screen
        options={{
          tabBarActiveTintColor: "#770fdf",
          tabBarInactiveTintColor: "#000",
          tabBarLabel: ({ focused, color }) => {
            return (
              <View>
                <Text
                  className={`text-[${color}] ${
                    !focused && " text-xs font-bold"
                  }`}
                >
                  Trade
                </Text>
              </View>
            );
          },
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="swap-horizontal"
              color={color}
              size={24}
            />
          ),
        }}
        name="trade"
      />
      <Tabs.Screen
        options={{
          tabBarActiveTintColor: "#770fdf",
          tabBarInactiveTintColor: "#000",
          tabBarLabel: ({ focused, color }) => {
            return (
              <View>
                <Text
                  className={`text-[${color}] ${
                    !focused && " text-xs font-bold"
                  }`}
                >
                  Trade
                </Text>
              </View>
            );
          },
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Feather name="pie-chart" color={color} size={20} />
          ),
        }}
        name="portfolio"
      />
    </Tabs>
  );
}
