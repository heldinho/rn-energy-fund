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
  label: JSX.Element;
  defaultValue?: string;
}

const Input: React.FC<TextInputProps> = (props) => {
  const formContext = useFormContext();
  const { name, label, rules, defaultValue, ...inputProps } = props;

  if (!formContext || !name) {
    const msg = !formContext
      ? "Checkbox must be wrapped by the FormProvider"
      : "Name must be defined";
    console.error(msg);
    return null;
  }

  const {
    field,
    fieldState: { invalid, isTouched, isDirty, error },
    formState: { isSubmitted },
  } = useController({ name, rules, defaultValue });

  return (
    <View className="mb-5 w-full ">
      <Pressable onPress={() => field.onChange(!field.value)}>
        <View className="flex-row items-start justify-center gap-1">
          <MaterialCommunityIcons
            size={24}
            color={field.value ? "#e6e6e6" : "#F8719D"}
            name="checkbox-blank-outline"
          />
          {label}
        </View>

        {isSubmitted && (
          <Text className="mt-2 text-red-400">{error?.message}</Text>
        )}
      </Pressable>
    </View>
  );
};

export default Input;
