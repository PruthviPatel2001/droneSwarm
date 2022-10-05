import { AppRegistry, LogBox, StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/Tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"MainLayout"}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="MainLayout"
          component={Tabs}
          options={{ gestureEnabled: false }}
        />
      </Stack.Navigator>
  
    </NavigationContainer>
  );
}
