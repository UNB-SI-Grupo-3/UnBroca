import { StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import React from "react";
import Product from "../../infra/models/product";
import { getAllProducts } from "../../infra/endpoints/getAllProducts";
import { CardsScroll, Header } from "../../ui";

interface MainSellerPageProps {
  navigation: any;
}

export function MainSellerPage({ navigation }: MainSellerPageProps) {
  const [loading,  setLoading ] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    let cancel = false;
    getAllProducts().then((data) => {
      if (!cancel) {
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
