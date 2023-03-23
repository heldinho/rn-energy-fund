import { Tabs, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";

export const unstable_settings = {
  initialRouteName: "home",
};

export default function AppLayout() {
  return <Tabs />;
}
