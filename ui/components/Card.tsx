import React from "react";
import {
  Image,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import { ColorPalette } from "../../constants";
import Product from "../../infra/models/product";

export interface CardProps {
  product: Product;
  navigation: any;
  style?: StyleProp<ViewStyle>;
}

export function Card({ product, navigation, style }: CardProps) {
  return (
    <Pressable
      style={[styles.card, style]}
      onPress={() => {
        navigation.navigate("productPage", { productDetails: product });
      }}
    >
      <View style={styles.whiteBoard}></View>

      <Image
        source={{
          uri:
            product.imageSrc === ""
              ? "https://picsum.photos/200"
              : product.imageSrc,
        }}
        style={styles.cardImage}
      />

      <Text style={[{ flex: 1.5, overflow: "hidden" }, styles.text]}>
        {product.name}
      </Text>
      <Text style={[{ color: ColorPalette.Gray2, flex: 1 }, styles.text]}>
        {"A " + product.address}
      </Text>
      <Text style={[{ color: ColorPalette.Primary, flex: 1 }, styles.text]}>
        {"R$ " + product.price}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "normal",
    textAlign: "center",
  },

  card: {
    width: 170,
    height: 290,
    padding: 10,

    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    rowGap: 7,
  },

  cardImage: {
    width: 128,
    height: 128,
    borderRadius: 64,
  },

  whiteBoard: {
    borderRadius: 20,
    backgroundColor: "#ffffff",

    position: "absolute",
    top: 50,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
