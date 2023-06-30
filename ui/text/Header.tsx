import React from 'react';
import { ReactNode } from "react";
import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";

interface Props {
  style?: StyleProp<TextStyle>;
  children?: ReactNode;
}

export function Header({ style, children }: Props) {
  return <Text style={[styles.header, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  header: {
    fontWeight: "bold",
    fontSize: 32,
    textAlign: "center",
  },
});
