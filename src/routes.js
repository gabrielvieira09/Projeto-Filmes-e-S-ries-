import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import Home from "./screens/Home";
import Perfil from "./screens/Perfil";
import Filme_Serie from "./screens/Filme_Serie";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarActiveTintColor: "#FFF",
      tabBarInactiveTintColor: "lightgray",
      tabBarStyle: { backgroundColor: "#212121" },
    }}>
      <Tab.Screen name="Home" component={Home}
        options={{ title: Home, tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="home-variant" size={36} color={color} />) }} />
      <Tab.Screen name="Perfil" component={Perfil}
        options={{ title: "Pesquisar", tabBarIcon: ({ color }) => (<MaterialIcons name="tag-faces" size={36} color={color} />) }} />
    </Tab.Navigator>
  )
}

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Login"
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="TabRoutes" component={TabRoutes} />
      <Stack.Screen name="Filme_Serie" component={Filme_Serie} />
    </Stack.Navigator>
  );
}
