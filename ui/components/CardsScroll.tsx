import React from "react";
import { FlatList, Text, StyleSheet, StyleProp, ViewStyle } from "react-native";
import { Card } from "./Card";
import { ListItemCard } from "./ListItemCard";
import { ColorPalette } from "../../constants";
import Product from "../../infra/models/product";

interface Props {
  navigation: any;
  productsIDlist?: Product[];
  style?: StyleProp<ViewStyle>;
  simpleRender?: boolean;
}

const renderer = (
  item: Product,
  index: number,
  navigation: any,
  simpleRender: boolean
) => {
  if (!simpleRender) {
    return (
      <Card
        product={item}
        navigation={navigation}
        style={{
          flex: 1 / 2,
          marginRight: index % 2 ? 10 : 15,
          marginLeft: index % 2 ? 15 : 10,
        }}
      />
    );
  } else {
    return (
      <ListItemCard
        product={item}
        navigation={navigation}
      />
    );
  }
};

export function CardsScroll({
  navigation,
  productsIDlist,
  style,
  simpleRender,
}: Props) {

  const qtdColumns = () => {
    if (simpleRender) {
      return simpleRender ? 1 : 2
    } else {
      return 2
    }
  }

  return (
    <FlatList
      data={productsIDlist}
      style={[styles.productView, style]}
      numColumns={ qtdColumns() }
      renderItem={({ item, index }) => {
        return renderer(item, index, navigation, simpleRender ?? false);
      }}
      ListEmptyComponent={
        <Text style={styles.emptyText}>Sem items para mostrar!</Text>
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
