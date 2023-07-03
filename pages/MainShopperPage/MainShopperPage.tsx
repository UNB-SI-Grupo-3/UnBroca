import React from 'react';
import { useState, useEffect } from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { getAllProducts } from '../../infra/endpoints/getAllProducts';
import Product from '../../infra/models/product';
import { CardsScroll, Header, SearchBox } from "../../ui/";

interface MainShopperPageProps {
  navigation: any;
}

export function MainShopperPage({ navigation }: MainShopperPageProps) {
  const [filter,   setFilter]   = useState("");
  const [loading,  setLoading]  = useState(true)
  const [products, setProducts] = useState<{ productID: string }[]>([])

  useEffect(() => {
    let cancel = false;
    getAllProducts().then((data) => {
      if (!cancel) {
        const temp:{ productID: string }[]= [];
        data.forEach((product) => {
          temp.push({productID: product._id})
        })
        setProducts(temp);
        setLoading(false)
      }
    })
    return () => {
      cancel = true;
    };
  }, [])

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate("demo")}>
        <Header>Escolha sua próxima broca</Header>
      </Pressable>
      <SearchBox inputProps={{ onChangeText: setFilter }} />
      {loading 
        ? <Text>Carregando...</Text> 
        : <CardsScroll navigation={navigation} productsIDlist={products} />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    paddingHorizontal: 10,
  },

  topBar: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
  },

  image: {
    height: 50,
    width: 50,
    resizeMode: "contain",
  },
});
