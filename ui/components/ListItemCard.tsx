import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
  Image,
} from "react-native";
import React from "react";
import Product from "../../infra/models/product";
import { ColorPalette } from "../../constants";
import { BigButton } from "../buttons";

interface ListItemCardProps {
  product: Product;
  navigation: any;
  style?: StyleProp<ViewStyle>;
}

export function ListItemCard({
  product,
  navigation,
  style,
}: ListItemCardProps) {
  return (
    <View style={[styles.card, style]}>
      <View style={styles.container}>
        <View style={styles.photoAndName}>
          <Image
            source={{
              uri:
                product.imageSrc === ""
                  ? "https://picsum.photos/200"
                  : product.imageSrc,
            }}
            style={styles.image}
          />
          <Text>{product.name}</Text>
        </View>
        <View style={styles.qtdAndButton}>
          <Text style={{ color: ColorPalette.Gray2 }}>
            qtd: {product.quantity}
          </Text>
          <BigButton
            text="ver"
            style={{ paddingVertical: 5, paddingHorizontal: 5, width: 100 }}
            onPress={() => {
              navigation.navigate("productPage", { productDetails: product });
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    margin: 2,
    backgroundColor: "white",
    borderRadius: 20,
  },
  container: {
    flexDirection: "row",
    gap: 10,
    alignContent: "center",
    justifyContent: "space-between",
  },
  photoAndName: {
    flexDirection: "row",
    gap: 10,
    alignContent: "center",
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  qtdAndButton: {
    flexDirection: "row",
    gap: 10,
    alignContent: "center",
    justifyContent: "flex-end",
  },
});
