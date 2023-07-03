import React from "react";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { BigButton, Header, StyledTextInput } from "../../ui";

interface LoginPageProps {
  navigation: any;
}

export function Login({ navigation }: LoginPageProps) {
  const [Email, setEmail] = useState("Click me!");
  const [Senha, setPassword] = useState("Click me!");

  const goToMainShopperPage = () => {
    navigation.navigate("main");
  };

  const goToRegisterPage = () => {
    navigation.navigate("Register");
  };

  return (
    <ScrollView style={{ flex: 0.5 }}>
      <Header>LOGIN DE USUÁRIO</Header>
      <StyledTextInput
        title="E-mail"
        placeholder="Digite o e-mail"
      />
      <StyledTextInput
        title="Senha"
        placeholder="Digite a senha"
      />
      <View style={{ flexDirection: "row" }}>
        <BigButton
          style={{ flex: 1 }}
          text="ENTRAR"
          onPress={goToMainShopperPage}
        />
        <BigButton
          style={{ flex: 1 }}
          text="CADASTRAR"
          onPress={goToRegisterPage}
        />
      </View>
    </ScrollView>
  );
}
