import { FlatList, Text, StyleSheet, StyleProp, ViewStyle } from "react-native";
import { Card, CardProps } from "./Card";
import { ColorPalette } from "../../../assets/Globals";

interface Props {
  cards?: CardProps[];
  style?: StyleProp<ViewStyle>;
}

const renderer = (item: CardProps, index: number) => {
  // TODO: Enable navigation by using Card "onPress" Prop
  return (
      <Card
        name     = {item.name}
        distance = {item.distance}
        price    = {item.price}
        imageSrc = {item.imageSrc}
        style    = {{ 
          flex:1/2, 
          marginRight: index % 2 ? 10 : 15,
          marginLeft:  index % 2 ? 15 : 10
        }}
      />
  );
};

export function CardsScroll({ cards, style }: Props) {
  return (
    <FlatList
      data={cards}
      style={[styles.productView, style]}
      numColumns={2}
      renderItem={({ item, index }) => {
        return renderer(item, index);
      }}
      ListEmptyComponent={
        <Text style={styles.emptyText}>
          Sem items para mostrar!
        </Text>
      }
    />
  );
}

const styles = StyleSheet.create({
  productView: {
    alignContent: "space-around",
  },

  emptyText: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    color: ColorPalette.Gray2,
  },
});
