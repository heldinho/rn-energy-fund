import {
  Text,
  View,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { Stack, useRouter, useSearchParams } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Svg, { Rect } from "react-native-svg";

import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import Input from "@components/Input";
import Checkbox from "@components/Checkbox";

const schema = z.object({
  firstname: z.string().min(3, { message: "Too short" }),
  lastname: z.string().min(5, { message: "Too short" }),
  email: z.string().nonempty("E-mail is required").email(),
  password: z
    .string()
    .nonempty("Password is required")
    .min(8, { message: "Too short" }),
  terms: z.literal(true, {
    errorMap: () => ({ message: "You must accept Terms and Conditions" }),
  }),
});

export type Schema = z.infer<typeof schema>;

export default function SignUp() {
  const router = useRouter();
  const params = useSearchParams();

  const { ...methods } = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: Schema) => {
    console.log(data);
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: () => (
            <>
              <Svg className="mr-1" width={50} height={5} fill="none">
                <Rect
                  width={50}
                  height={5}
                  rx={2.5}
                  fill={`${params?.color || "#F4F4F4"}`}
                />
              </Svg>
              <Svg className="mr-1" width={50} height={5} fill="none">
                <Rect width={50} height={5} rx={2.5} fill="#F4F4F4" />
              </Svg>
              <Svg className="mr-1" width={50} height={5} fill="none">
                <Rect width={50} height={5} rx={2.5} fill="#F4F4F4" />
              </Svg>
            </>
          ),
          title: "",
          headerLeft: () => (
            <Pressable className="active:bg-gray-100" onPress={router.back}>
              <MaterialCommunityIcons name={"arrow-left"} size={24} />
            </Pressable>
          ),
        }}
      />

      <KeyboardAvoidingView
        className="flex-1 justify-between"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView className="bg-white">
          <View className="flex-1 items-center px-9">
            <Text className="mt-5 mb-9 font-semi-bold text-lg">
              Create your account
            </Text>

            <FormProvider {...methods}>
              <Input
                label="First Name"
                placeholder="Joe"
                name="firstname"
                rules={{ required: "First name is required!" }}
              />

              <Input
                label="Last Name"
                placeholder="Doe"
                name="lastname"
                rules={{ required: "E-mail is required!" }}
              />

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

              <Checkbox
                label={
                  <Text
                    className={`sintony-regular mb-2 text-left text-xs text-neutral-400`}
                  >
                    I am over 18 years of age and I have read and agree to the
                    Terms of Service and Privacy policy.
                  </Text>
                }
                name="terms"
                secureTextEntry
                placeholder="Minimum 8 characters"
                rules={{ required: "Password is required!" }}
              />

              <Pressable
                className="mt-6 h-14 w-full rounded-md bg-purple-700 active:bg-purple-900"
                onPress={methods.handleSubmit(onSubmit)}
              >
                <Text className="my-auto text-center text-base text-white">
                  Create account
                </Text>
              </Pressable>
            </FormProvider>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}

/*
<Pressable onPress={() => router.setParams({ color: "#770FDF" })}>
  <Text>Ola</Text>
</Pressable>
*/
