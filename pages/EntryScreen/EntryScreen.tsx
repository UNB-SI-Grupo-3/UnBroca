import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { BigButton } from "../../ui";

interface EntryScreenProps {
  navigation: any;
}

export function EntryScreen({ navigation }: EntryScreenProps) {
  return (
    <View style={{ height: "100%", alignContent: "center" }}>
      <View style={styles.image1Container}>
        <Image
          source={require("../../assets/bigLogo.png")}
          style={styles.image1}
        />
      </View>
      <Image
        source={require("../../assets/entryScreenImage.png")}
        style={styles.image2}
      />
      <View style={styles.buttonsContainer}>
        <Pressable
          onPress={() => {
            navigation.navigate("Login", { selectedPage: "comprador" });
          }}
          style={styles.button1}
        >
          <Text style={{ textAlign: "center" }}>Entrar</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate("Login", { selectedPage: "vendedor" });
          }}
          style={{ width: "auto" }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              textDecorationLine: "underline",
            }}
          >
            Entrar como vendedor
          </Text>
        </Pressable>
      </View>
      <Text
        style={{
          textAlign: "center",
          color: "black",
        }}
      >
        UNB BRASIL | 2023
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image1Container: {
    position: "absolute",
    top: 50,
    left: 0,
    right: 0,
    alignItems: "center",
  },

  image1: {
    flex: 1,
  },

  image2: {
    position: "absolute",
    bottom: -50,
    width: "100%",
  },

  buttonsContainer: {
    position: "absolute",
    bottom: 70,
    width: "100%",
    alignContent: "center",
    gap: 30,
    paddingHorizontal: 50,
  },

  button1: {
    width: "auto",
    padding: 15,
    borderRadius: 25,
    backgroundColor: "white",
  },
});
