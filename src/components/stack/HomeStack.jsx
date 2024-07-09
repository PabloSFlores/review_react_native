import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FormLogin from "../FormLogin";

const Stack = createStackNavigator();
export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerTitleAlign: "center"}}>
      <Stack.Screen
        name="homeStack"
        component={FormLogin}
        options={{ title: "Inicio de sesión" }}
      />
    </Stack.Navigator>
  );
}
