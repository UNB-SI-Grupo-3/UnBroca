import React from "react";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { BigButton, Header, StyledTextInput } from "../../ui";

interface RegisterProps {
  navigation: any;
}

export function Register({ navigation }: RegisterProps) {
  const [Nome, setNome] = useState("Click me!");
  const [Email, setEmail] = useState("Click me!");
  const [Telefone, setTelefone] = useState("Click me!");

  const goToMainShopperPage = () => {
    navigation.navigate("main");
  };

  return (
    <ScrollView style={{ flex: 0.5 }}>
      <Header>CADASTRO DE USUÁRIO</Header>

      <StyledTextInput title="Nome" placeholder="Informe seu nome completo" />
      <StyledTextInput
        title="E-mail"
        placeholder="Informe seu endereço de e-mail"
      />
      <StyledTextInput
        title="Telefone"
        placeholder="Informe seu telefone com DDD"
      />
      <View style={{ flexDirection: "row" }}>
        <BigButton
          style={{ flex: 1 }}
          text="SEREI CLIENTE"
          onPress={goToMainShopperPage}
        />
        <BigButton
          style={{ flex: 1 }}
          text="SOU VENDEDOR"
          onPress={goToMainShopperPage}
        />
      </View>
    </ScrollView>
  );
}
