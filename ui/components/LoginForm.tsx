import React, {useState} from "react";
import {
  StyleSheet,
  View,
} from "react-native";
import { ColorPalette } from "../../constants";
import {StyledTextInput} from "../forms";
import {BigButton} from "../buttons";

interface LoginFormProps {
  navigation: any;
}

export function LoginForm({ navigation }: LoginFormProps) {
  const [Email, setEmail] = useState("Click me!");
  const [Senha, setPassword] = useState("Click me!");

  const goToMainShopperPage = () => {
    navigation.navigate("main");
  };

  return (
    <View>
        <StyledTextInput textStyle={styles.labelText}
        title="Endereço"
        placeholder="Digite o endereço de e-mail"
      />
      <StyledTextInput textStyle={styles.labelText}
        title="Senha"
        placeholder="Digite a senha"
        inputProps={{secureTextEntry:true}}
      />
      <View style={{ flexDirection: "row" }}>
        <BigButton
          style={{ flex: 1 }}
          text="ENTRAR"
          onPress={goToMainShopperPage}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    width: "40%", textAlign: "center",
    color: "black", fontSize: 18, fontStyle: "normal",
    fontWeight: "400", borderBottomWidth: 1, borderColor: ColorPalette.Primary
  },
  labelText: {
    color: "black", fontSize: 15, fontStyle: "normal",
    fontWeight: "400"
  },
});
