import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { MainShopperPage } from "./Components/Pages";
import { DemoPage } from "./Components/Pages/DemoPage/DemoPage";

import { ColorPalette } from "./assets/Globals";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ backgroundColor: ColorPalette.Gray1, flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="main">
          <Stack.Screen name="main" component={MainShopperPage} />
          <Stack.Screen name="demo" component={DemoPage} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" backgroundColor={ColorPalette.Primary} />
    </SafeAreaView>
  );
}
