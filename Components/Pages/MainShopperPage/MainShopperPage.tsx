import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { BigButton, CardsScroll, SearchBox } from "../../Elements/Interface";
import { Header } from "../../Elements/TextStyles";

const dummyCards = Array.from({ length: 30 }).map((_, i) => {
  return {
    name: `This is the title! ${i + 1}`,
    distance: `${(i + 1) * 100}m`,
    price: `${((i + 1) % 10) * 10}`,
    imageSrc: `https://picsum.photos/1440/2842?random=${i}`,
  };
});

interface MainShopperPageProps {
  navigation: any;
}

type product = {
  kind: "marmita" | "bebida";
};

export function MainShopperPage({ navigation }: MainShopperPageProps) {
  const [filter, setFilter] = useState("");
  const [productType, setProductType] = useState<product>({ kind: "marmita" });

  const swapProductType = () => {
    productType.kind === "marmita"
      ? setProductType({ kind: "bebida" })
      : setProductType({ kind: "marmita" });
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Pressable
          style={{ flexDirection: "row" }}
          onPress={() => navigation.navigate("demo")}
        >
          <Image
            source={require("../../../assets/sandwich.png")}
            style={styles.image}
          />
          <Text style={{ textAlignVertical: "center" }}>Voltar</Text>
        </Pressable>
      </View>

      <Header>Escolha sua próxima broca</Header>

      <SearchBox inputProps={{ onChangeText: setFilter }} />
      <View style={{ flexDirection: "row" }}>
        <BigButton
          style={{ flex: 1 }}
          text="marmitas"
          disabled={productType.kind === "marmita" ? true : false}
          onPress={swapProductType}
        />
        <BigButton
          style={{ flex: 1 }}
          text="bebidas"
          disabled={productType.kind === "bebida" ? true : false}
          onPress={swapProductType}
        />
      </View>
      <CardsScroll cards={dummyCards} />
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
