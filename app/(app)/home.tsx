import { Text, View, Button } from "react-native";

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-4xl mb-5">Home</Text>
      <Button title="Login" />
    </View>
  );
}
