import { Slot } from "expo-router";
import { useSelector } from "react-redux";
import { Provider } from "react-redux";

import {
  useFonts,
  Sora_100Thin,
  Sora_200ExtraLight,
  Sora_300Light,
  Sora_400Regular,
  Sora_500Medium,
  Sora_600SemiBold,
  Sora_700Bold,
  Sora_800ExtraBold,
} from "@expo-google-fonts/sora";

import { Sintony_400Regular } from "@expo-google-fonts/sintony";

import { useProtectedRoute } from "@hooks/auth";
import { store } from "@redux/store";

const Child = () => {
  const user = useSelector((state) => state.user);
  useProtectedRoute(user);

  return <Slot />;
};

export default function RootLayout() {
  let [loaded, error] = useFonts({
    Sora_100Thin,
    Sora_200ExtraLight,
    Sora_300Light,
    Sora_400Regular,
    Sora_500Medium,
    Sora_600SemiBold,
    Sora_700Bold,
    Sora_800ExtraBold,

    Sintony_400Regular,
  });

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <Child />
    </Provider>
  );
}
