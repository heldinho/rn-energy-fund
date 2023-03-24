import { Stack } from "expo-router";

export const unstable_settings = {
  initialRouteName: "sign-up",
};

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen options={{ title: "" }} name="sign-in" />
      <Stack.Screen name="sign-up" />
      <Stack.Screen
        name="modal"
        options={{
          title: "Account created!",
          presentation: "modal",
        }}
      />
    </Stack>
  );
}
