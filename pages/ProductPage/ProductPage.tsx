import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Product from "../../infra/models/product";
import { BigButton, Header, Price } from "../../ui";

interface ProductPageProps {
  route: any;
  navigation: any;
}

export function ProductPage({ route, navigation }: ProductPageProps) {
  const product:Product = route.params.productDetails;

  return (
    <View>
      <ScrollView>
        <View style={styles.productView}>
          {/* Imagem e preço */}
          <View style={styles.imageAndPrice}>
            <Image
              source={{
                uri:
                  product.imageSrc === ""
                    ? "https://picsum.photos/200"
                    : product.imageSrc,
              }}
              style={styles.image}
            />
            <Header>{product.name}</Header>
            <Price>R$ {product.price}</Price>
          </View>
          {/* Detalhes */}
          <View style={styles.details}>
            <View>
              <Text style={styles.h2}>Detalhes da marmita</Text>
              <Text>{product.details}</Text>
            </View>
            <View>
              <Text style={styles.h2}>Vendedor</Text>
              <Text>qtd Estrelas: {product.stars}</Text>
              <Text>nome: {product.creator}</Text>
              <Text>telefone: {product.telephone}</Text>
            </View>
            <View>
              <Text style={styles.h2}>Localização</Text>
              <Text>endereco: {product.address}</Text>
              <Text>distancia: {product.distance}</Text>
            </View>
          </View>
          {/* TODO:(Level 2) Botão de pedir*/}
        </View>
        <View style={styles.moreItems}>
          <View style={styles.hr} />
          <Text style={{ textAlign: "right" }}>Mais items do vendedor</Text>
          {/* TODO: Inserir CardsScroll aqui. */}
          <BigButton text="Voltar" style={{flex:1}} onPress={() => navigation.goBack()}/>
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
