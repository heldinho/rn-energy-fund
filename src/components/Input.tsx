import { useState } from "react";

import {
  View,
  TextInput,
  Text,
  TextInputProps as RNTextInputProps,
  Pressable,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import {
  useController,
  useFormContext,
  UseControllerProps,
} from "react-hook-form";

interface TextInputProps extends RNTextInputProps, UseControllerProps {
  label: string;
  defaultValue?: string;
}

const Input: React.FC<TextInputProps> = (props) => {
  const formContext = useFormContext();
  const { name, label, rules, defaultValue, secureTextEntry, ...inputProps } =
    props;

  const [icon, setIcon] = useState<boolean>(secureTextEntry);

  if (!formContext || !name) {
    const msg = !formContext
      ? "TextInput must be wrapped by the FormProvider"
      : "Name must be defined";
    console.error(msg);
    return null;
  }

  const {
    field,
    fieldState: { invalid, isTouched, isDirty, error },
    formState: { isSubmitted },
  } = useController({ name, rules, defaultValue });

  const handlePasswordVisibility = () => {
    setIcon(!icon);
  };

  return (
    <View className="mb-2 w-full">
      <Text
        className={`sintony-regular mb-2 text-left text-xs text-neutral-400`}
      >
        {label}
      </Text>
      <View>
        <TextInput
          className={`h-10 rounded-md bg-zinc-100 pl-4 font-regular text-sm ${
            invalid && "border border-red-400 bg-red-100"
          }`}
          onChangeText={field.onChange}
          onBlur={field.onBlur}
          value={field.value}
          secureTextEntry={icon}
          {...inputProps}
        />
        {secureTextEntry && (
          <Pressable
            className="absolute right-4 h-10"
            onPress={handlePasswordVisibility}
          >
            <View className="flex-1 justify-center">
              <MaterialCommunityIcons
                color={`#a0a0a0`}
                size={24}
                name={icon ? "eye-outline" : "eye-off-outline"}
              />
            </View>
          </Pressable>
        )}
      </View>
      {isSubmitted && (
        <Text className="mt-2 text-red-400">{error?.message}</Text>
      )}
    </View>
  );
};

export default Input;
