import React from 'react';
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { ColorPalette } from "./constants";
import { MainNavigationComponent } from "./pages";

export default function App() {
  return (
    <SafeAreaView style={{ backgroundColor: ColorPalette.Gray1, flex: 1 }}>
      <MainNavigationComponent/>
      <StatusBar style="light" backgroundColor={ColorPalette.Primary} />
    </SafeAreaView>
  );
}
