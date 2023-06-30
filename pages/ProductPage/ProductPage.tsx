import React from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { test } from "../../infra/endpoints/addProduct";
import { Header, Price } from "../../ui";

interface ProductPageProps {
  route: any;
  navigation: any;
}

export function ProductPage({ route, navigation }: ProductPageProps) {
  const productId = route.params.productId;
  // Todo: get values below using one or multiple requisitions with productID as a
  // parameter.
  const imageSrc = "https://picsum.photos/id/2/300/";
  const name = "Test";
  const price = "99,99";
  const details =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum alias pariatur sunt ex nihil veritatis, consequuntur at esse provident laborum. Sapiente ea ipsum velit obcaecati ad? Velit earum magnam quas?";
  const sellerName = "Eduardo Silva";
  const stars = "5/5";
  const telephone = "61 9999-9999";
  const address = "UNB";
  const distance = "80 m";

  return (
    <View>
      <ScrollView>
        <View style={styles.productView}>
          {/* Imagem e preço */}
          <View style={styles.imageAndPrice}>
            <Image source={{ uri: imageSrc }} style={styles.image} />
            <Header>{name}</Header>
            <Price>R$ {price}</Price>
          </View>
          {/* Detalhes */}
        <View>
          <Button title="teste" onPress={test}></Button>
        </View>
          <View style={styles.details}>
            <View>
              <Text style={styles.h2}>Detalhes da marmita</Text>
              <Text>{details}</Text>
            </View>
            <View>
              <Text style={styles.h2}>Vendedor</Text>
              <Text>qtd Estrelas: {stars}</Text>
              <Text>nome: {sellerName}</Text>
              <Text>telefone: {telephone}</Text>
            </View>
            <View>
              <Text style={styles.h2}>Localização</Text>
              <Text>endereco: {address}</Text>
              <Text>distancia: {distance}</Text>
            </View>
          </View>
          {/* TODO:(Level 2) Botão de pedir*/}
        </View>
        <View style={styles.moreItems}>
          <View style={styles.hr} />
          <Text style={{ textAlign: "right" }}>Mais items do vendedor</Text>
          {/* TODO: Inserir CardsScroll aqui. */}
        </View>


      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  productView: {
    alignItems: "stretch",
    gap: 35,
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 25,
    marginBottom: 5,
  },

  imageAndPrice: {
    alignItems: "center",
    gap: 10,
  },

  image: {
    width: 156,
    height: 156,
    borderRadius: 78,
  },

  details: {
    left: 0,
    right: 0,
    gap: 25,
  },

  h2: {
    fontWeight: "bold",
  },

  buttonWrapper: {
    alignItems: "center",
  },

  hr: {
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  moreItems: {
    paddingHorizontal: 20,
  },
});
