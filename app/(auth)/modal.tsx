import { useRef, useEffect } from "react";
import { Pressable, View, Text } from "react-native";
import { Link, useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";
import Lottie from "lottie-react-native";

export default function Modal() {
  const navigation = useNavigation();
  const animationRef = useRef<Lottie>(null);
  const isPresented = navigation.canGoBack();

  useEffect(() => {
    animationRef.current?.play();
  }, []);

  const login = () => {
    navigation.getParent().goBack();
  };

  return (
    <View className="flex-1 justify-center px-9">
      <View className="h-40 w-full">
        <Lottie
          loop={false}
          progress={animationRef.current}
          source={{
            uri: "https://assets3.lottiefiles.com/packages/lf20_xwmj0hsk.json",
          }}
        />
      </View>

      {!isPresented && <Link href="../">Dismiss</Link>}

      <Text className="mt-5 mb-2 text-center font-semi-bold text-lg">
        Success!
      </Text>
      <Text className="text-md mb-9 text-center font-regular">
        Thank you for creating your account!
      </Text>
      <Pressable
        onPress={login}
        className="mt-6 h-14 w-full rounded-md bg-purple-700 active:bg-purple-900"
      >
        <Text className="my-auto text-center text-base text-white">
          Go to login
        </Text>
      </Pressable>

      <StatusBar style="light" />
    </View>
  );
}
