import { Text, View, StyleSheet } from "react-native";
import Home from "./src/screens/Home.js"
import Login from "./src/screens/Login.js"
import Perfil from "./src/screens/Perfil.js";
import Filme_Serie from "./src/screens/Filme_Serie.js";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes.js";


export default function App() {
  return (

    /*<View>
      <Filme_Serie />
    </View>*/

     <NavigationContainer>
       <Routes />
     </NavigationContainer>
  );
}

