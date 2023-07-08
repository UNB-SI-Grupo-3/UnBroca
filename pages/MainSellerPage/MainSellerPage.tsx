import { StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import React from "react";
import Product from "../../infra/models/product";
import { getAllProducts } from "../../infra/endpoints/getAllProducts";
import { BigButton, CardsScroll, Header } from "../../ui";

interface MainSellerPageProps {
  navigation: any;
}

export function MainSellerPage({ navigation }: MainSellerPageProps) {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    let cancel = false;
    getAllProducts().then((data) => {
      if (!cancel) {
        // TODO: Solve the "two children with same key" bug appearing below for some reason.
        setProducts(data);
        setLoading(false);
      }
    });
    return () => {
      cancel = true;
    };
  }, []);

  return (
    <View style={styles.container}>
      <Header>Meus produtos</Header>
      <BigButton
        text={"Adicionar Produto"}
        style={{width:"100%"}}
        onPress={() => {
          navigation.navigate("ProductFormPage");
        }}
      />
      {loading ? (
        <Text>Carregando seus produtos...</Text>
      ) : (
        <CardsScroll
          navigation={navigation}
          productsIDlist={products}
          simpleRender={true}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    paddingHorizontal: 10,
  },
});
