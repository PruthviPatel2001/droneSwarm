import { AppRegistry, LogBox, StyleSheet, Text, View } from "react-native";

import Login from "./screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import ProfileModal from "./screens/ProfileModal";
import Tabs from "./navigation/Tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    RobotoBold: require("./assets/fonts/Roboto-Bold.ttf"),
    RobotoBlack: require("./assets/fonts/Roboto-Black.ttf"),
    RobotoRegular: require("./assets/fonts/Roboto-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <NavigationContainer>
      {LogBox.ignoreAllLogs()}

      <Stack.Navigator
        initialRouteName={"login"}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="login"
          component={Login}
          options={{ headerShown:false}}
        />

        <Stack.Screen
          name="home"
          component={Tabs}
          options={{  }}
        />

        <Stack.Screen
          name="profilemodel"
          component={ProfileModal}
          options={{
            presentation: "modal",
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
