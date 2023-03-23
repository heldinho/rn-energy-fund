import {
  View,
  Text,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import * as z from "zod";

import Input from "@components/Input";

const schema = z.object({
  email: z.string().nonempty("E-mail is required").email(),
  password: z
    .string()
    .nonempty("Password is required")
    .min(8, { message: "Too short" }),
});

export type Schema = z.infer<typeof schema>;

export default function SignIn() {
  const router = useRouter();

  const { ...methods } = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  const createAccount = () => {
    router.push("/sign-up");
  };

  const onSubmit = (data: Schema) => {
    console.log(data);
  };

  return (
    <KeyboardAvoidingView
      className="flex-1 justify-between"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View className="flex-1 items-center bg-white px-9">
        <Text className="mt-5 mb-9 font-semi-bold text-lg">Login</Text>
        <FormProvider {...methods}>
          <Input
            label="E-mail"
            placeholder="E-mail"
            inputMode="email"
            name="email"
            rules={{ required: "E-mail is required!" }}
          />
          <Input
            label="Password"
            name="password"
            secureTextEntry
            placeholder="Minimum 8 characters"
            rules={{ required: "Password is required!" }}
          />
          <Pressable
            className="mt-6 h-14 w-full rounded-md bg-purple-700 active:bg-purple-900"
            onPress={methods.handleSubmit(onSubmit)}
          >
            <Text className="my-auto text-center text-base text-white">
              Login
            </Text>
          </Pressable>
        </FormProvider>

        <Pressable>
          <Text className="font-xs mt-3 text-neutral-400">
            Don’t have an account?{" "}
            <Text
              onPress={createAccount}
              className="font-xs text-neutral-400 underline"
            >
              Sign up
            </Text>{" "}
            here
          </Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}
