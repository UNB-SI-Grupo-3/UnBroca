import React from "react";
import { useState } from "react";
import { ScrollView, View } from "react-native";
import { BigButton, Header, StyledTextInput } from "../../ui";

interface RegisterProps {
  navigation: any;
}

export function Register({ navigation }: RegisterProps) {
  const [Nome,     setNome    ] = useState<string>();
  const [Email,    setEmail   ] = useState<string>();
  const [Telefone, setTelefone] = useState<string>();
  const [Senha,    setSenha   ] = useState<string>();

  const goToMainShopperPage = () => {
    navigation.navigate("main");
  };

  return (
    <ScrollView style={{ flex: 0.5 }}>
      <Header>CADASTRO DE USUÁRIO</Header>

      <StyledTextInput 
        title="Nome" 
        placeholder="Informe seu nome completo" 
      />
      <StyledTextInput
        title="E-mail"
        placeholder="Informe seu endereço de e-mail"
      />
      <StyledTextInput
        title="Telefone"
        placeholder="Informe seu telefone com DDD"
      />
      <StyledTextInput
        title="Senha"
        placeholder="Escolha uma senha"
      />
      <View style={{ flexDirection: "row" }}>
        <BigButton
          style={{ flex: 1 }}
          text="Criar conta!"
          onPress={goToMainShopperPage}
        />
      </View>
    </ScrollView>
  );
}
