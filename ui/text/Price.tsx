import { StyleSheet, Text, View, StyleProp, TextStyle } from "react-native";
import { ReactNode } from "react";
import { ColorPalette } from "../../constants";

interface PriceProps {
  style?: StyleProp<TextStyle>;
  children?: ReactNode;
}

export function Price({ style, children }: PriceProps) {
  return <Text style={[styles.header, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  header: {
    fontWeight: "bold",
    fontSize: 32,
    textAlign: "center",
    color: ColorPalette.Primary,
  },
});
