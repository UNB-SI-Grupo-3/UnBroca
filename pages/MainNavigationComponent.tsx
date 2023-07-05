import React from "react";
import { getHeaderTitle } from "@react-navigation/elements";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CustomNavigationHeader } from "../ui/components";
import { Register } from "./Register/Register";
import { Login } from "./Login/Login";
import { DemoPage } from "./DemoPage/DemoPage";
import { MainShopperPage } from "./MainShopperPage/MainShopperPage";
import { ProductPage } from "./ProductPage/ProductPage";
import { ProductFormPage } from "./ProductFormPage/ProductFormPage";

const Stack = createNativeStackNavigator();

export function MainNavigationComponent() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          header: ({ navigation, route, options, back }) => {
            const title = getHeaderTitle(options, route.name);

            return (
              <CustomNavigationHeader
                title={title}
                onPress={navigation.goBack}
                back={back}
              />
            );
          },
        }}
      >
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerTitle: "Tela de registro" }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerTitle: "Login" }}
        />
        <Stack.Screen
          name="main"
          component={MainShopperPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="demo"
          component={DemoPage}
          options={{ headerTitle: "DEMO PAGE!" }}
        />
        <Stack.Screen
          name="productPage"
          component={ProductPage}
          options={{ headerTitle: "Página da marmita" }}
        />
        <Stack.Screen
          name="ProductFormPage"
          component={ProductFormPage}
          options={{ headerTitle: "Cadastro de Marmita" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
