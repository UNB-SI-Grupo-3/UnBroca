import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { ColorPalette } from "../../constants";
import { StyledTextInput } from "../forms";
import { BigButton } from "../buttons";

interface LoginFormProps {
  navigation: any;
}

export function LoginForm({ navigation }: LoginFormProps) {
  const [Email, setEmail] = useState<string>();
  const [Senha, setPassword] = useState<string>();

  const goToMainShopperPage = () => {
    navigation.navigate("main");
  };

  return (
    <ScrollView style={{gap: 10}}>
      <StyledTextInput
        textStyle={styles.labelText}
        title="Endereço"
        placeholder="Digite o endereço de e-mail"
      />
      <StyledTextInput
        textStyle={styles.labelText}
        title="Senha"
        placeholder="Digite a senha"
        inputProps={{ secureTextEntry: true }}
      />
      <View style={{ flexDirection: "row" }}>
        <BigButton
          style={{ flex: 1 }}
          text="ENTRAR"
          onPress={goToMainShopperPage}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  text: {
    width: "40%",
    textAlign: "center",
    color: "black",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "400",
    borderBottomWidth: 1,
    borderColor: ColorPalette.Primary,
  },
  labelText: {
    color: "black",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "400",
  },
});
