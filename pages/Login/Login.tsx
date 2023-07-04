import React from "react";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import { ColorPalette } from "../../constants/constants";
import { RegisterForm } from "../../ui/components/RegisterForm";
import { LoginForm } from "../../ui/components/LoginForm";
import { Tab } from "@rneui/themed";

interface LoginPageProps {
  navigation: any;
}

export function Login({ navigation }: LoginPageProps) {
  const [Email, setEmail] = useState("Click me!");
  const [Senha, setPassword] = useState("Click me!");
  const [index, setIndex] = React.useState(0);

  const renderLogin = () => {
    setIndex(0);
  };

  return (
    <ScrollView style={{ flex: 0.5 }}>
      <View style={styles.mainView}>
        <Image source={require("../../assets/logo.png")} />
        <Tab
          value={index}
          onChange={setIndex}
          dense
          indicatorStyle={styles.tabStyle}
          titleStyle={{ color: "black" }}
        >
          <Tab.Item>Login</Tab.Item>
          <Tab.Item>Cadastro</Tab.Item>
        </Tab>
      </View>
      {index === 0 ? (
        <LoginForm navigation={navigation} />
      ) : (
        <RegisterForm navigation={navigation} setRenderLogin={renderLogin} />
      )}
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
  mainView: {
    backgroundColor: "white",
    borderRadius: 30,
    alignItems: "center",
    width: "100%",
    gap: 132,
    paddingTop: 70,
  },
  tabStyle: {
    backgroundColor: ColorPalette.Primary,
    height: 3,
    borderRadius: 30,
  },
});
