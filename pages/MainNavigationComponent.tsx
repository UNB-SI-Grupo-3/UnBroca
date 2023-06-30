import React from 'react';
import { getHeaderTitle } from "@react-navigation/elements";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CustomNavigationHeader } from "../ui/components";
import { DemoPage } from "./DemoPage/DemoPage";
import { MainShopperPage } from "./MainShopperPage/MainShopperPage";
import { ProductPage } from "./ProductPage/ProductPage";

const Stack = createNativeStackNavigator();

export function MainNavigationComponent() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="main"
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
