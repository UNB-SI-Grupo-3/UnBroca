import { getHeaderTitle } from "@react-navigation/elements";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { DemoPage, MainShopperPage, ProductPage } from "./pages";
import { CustomNavigationHeader } from "./ui/components";

import { ColorPalette } from "./constants";

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
          <Stack.Screen
            name="productPage"
            component={ProductPage}
            options={{ headerTitle: "Página da marmita" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" backgroundColor={ColorPalette.Primary} />
    </SafeAreaView>
  );
}
