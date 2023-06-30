import React from "react";
import { StyleSheet, Text, Pressable, StyleProp, ViewStyle } from "react-native";
import { GestureResponderEvent } from "react-native/types";
import { ColorPalette } from "../../constants";

export interface BigButtonProps {
  text: string;
  onPress?: null | ((event: GestureResponderEvent) => void) | undefined;
  disabled?: true | boolean;
  style?: StyleProp<ViewStyle>
}

export function BigButton({ text, onPress, style, disabled }: BigButtonProps) {
  const buttonColorDecider = (disabled: boolean | undefined, pressed: boolean) => {
    if(disabled) return ColorPalette.Gray2
    else return pressed ?  ColorPalette.PrimaryFaded : ColorPalette.Primary
  }

  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        { backgroundColor: buttonColorDecider(disabled, pressed) },
        styles.button,
        style,
      ]}
      hitSlop={{
        bottom: 5,
        left: 5,
        right: 5,
        top: 5,
      }}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
    elevation: 3,
    width: 280,
    margin: 5,
  },

  text: {
    userSelect: "none",
    color: "#fff",
  },
});
