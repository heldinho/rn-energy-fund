import { Text, View, Button } from "react-native";
import { useRouter } from "expo-router";

export default function SignIn() {
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-4xl mb-5">Sign in</Text>
      <Button title="Sign up" onPress={() => router.push("/sign-up")} />
    </View>
  );
}
