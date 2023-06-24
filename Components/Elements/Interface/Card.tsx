import {
  Image,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import { ColorPalette } from "../../../assets/Globals";

export interface CardProps {
  productID: string;
  navigation: any;
  style?: StyleProp<ViewStyle>;
}

export function Card({ productID, navigation, style }: CardProps) {
  // TODO: get the values below using a request with productID as a parameter.
  const imageSrc = "https://picsum.photos/300/";
  const name = "Test";
  const price = "99,99";
  const distance = "80 m";

  return (
    <Pressable
      style={[styles.card, style]}
      onPress={() => {
        navigation.navigate("productPage", { productId: { productID } });
      }}
    >
      <View style={styles.whiteBoard}></View>

      <Image source={{ uri: imageSrc }} style={styles.cardImage} />

      <Text style={[{ flex: 1.5, overflow: "hidden" }, styles.text]}>
        {name}
      </Text>
      <Text style={[{ color: ColorPalette.Gray2, flex: 1 }, styles.text]}>
        {"A " + distance}
      </Text>
      <Text style={[{ color: ColorPalette.Primary, flex: 1 }, styles.text]}>
        {"R$ " + price}
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
