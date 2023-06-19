import { getHeaderTitle } from "@react-navigation/elements";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  CustomNavigationHeader,
  DemoPage,
  MainShopperPage,
} from "./Components/Pages";

import { ColorPalette } from "./assets/Globals";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ backgroundColor: ColorPalette.Gray1, flex: 1 }}>
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
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" backgroundColor={ColorPalette.Primary} />
    </SafeAreaView>
  );
}
