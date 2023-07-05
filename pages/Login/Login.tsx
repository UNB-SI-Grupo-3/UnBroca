import React from "react";
import { useState } from "react";
import { ScrollView, StyleSheet, View, Image, Pressable } from "react-native";
import { ColorPalette } from "../../constants/constants";
import { RegisterForm } from "../../ui/components/RegisterForm";
import { LoginForm } from "../../ui/components/LoginForm";
import { Tab } from "@rneui/themed";
import { clientTypes } from "../../infra/models/user";

interface LoginPageProps {
  navigation: any;
  route:any
}

export function Login({ navigation, route }: LoginPageProps) {
  const [Email,    setEmail   ] = useState("");
  const [Senha,    setPassword] = useState("");
  const [index,    setIndex   ] = useState(0);
  const [selected, setSelected] = useState<clientTypes>(route.params.selectedPage)

  const renderLogin = (typeSelected:clientTypes) => {
    setIndex(0);
    setSelected(typeSelected)
  };

  const goToProductFormPage = () => navigation.navigate("ProductFormPage");

  return (
    <ScrollView style={{ flex: 0.5 }}>
      <View style={styles.mainView}>
        <Pressable onPress={navigation.goBack}>
          <Image source={require("../../assets/logo.png")} />
        </Pressable>
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
      <View style={{ paddingHorizontal: 30 }}>
        {index === 0 ? (
          <LoginForm navigation={navigation} clientType={selected}/>
        ) : (
          <RegisterForm navigation={navigation} setRenderLogin={renderLogin} />
        )}
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
  mainView: {
    backgroundColor: "white",
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
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
