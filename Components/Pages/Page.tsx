import React, { ReactNode } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

interface PageProps {
  title: string;
  chevronText?: string;
  children: ReactNode;
}

export function Page({ chevronText: helpString, title, children }: PageProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("../../assets/chevron.png")}
            style={styles.chevron}
          />
          <Text>{helpString ? helpString : "Voltar"}</Text>
        </View>
        <Text>{title}</Text>
      </View>
      <View style={styles.content}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    justifyContent: "space-around",
  },

  content: {
    flex: 1,
  },

  chevron: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
});
