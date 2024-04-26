import React, { useState } from "react";
import { Text, TextInput, View, Image, StyleSheet, TouchableOpacity, StatusBar } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../components/CustomButton";
import fundo_branco from "../assets/retangulo.png"
import cineversal from "../assets/cineversal.png"

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigation = useNavigation();

  // Credenciais
  const credentialsEmail = "senai@gmail.com";
  const credentialsPassword = "123456";

  function handleSubmit() {
    setError("");
    if (!email.trim()) {
      setError("Por favor, preencha o campo email");
      return;
    }
    if (!password.trim()) {
      setError("Por favor, preencha o campo senha");
      return;
    }
    if (email !== credentialsEmail || password !== credentialsPassword) {
      setError("Credenciais invalidas");
      setEmail("");
      setPassword("");
      return
    }
    navigation.navigate("TabRoutes")
  }

  return (
    <View style={styles.container} >
      <StatusBar barStyle="light-content" backgroundColor="#131E2E" />

      <Image source={fundo_branco} style={{ width: "100%", top: -20, borderBottomWidth: 30 }} />

      <Image source={cineversal} style={{ width: "100%", bottom: 350 }} />

      <Text style={{ color: "white", fontSize: 24, top: -18, marginTop: -380 }}>ENTRAR</Text>

      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder="Email ou Número de Telefone"
        placeholderTextColor="#959ba3"
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder="Digite sua senha"
        placeholderTextColor="#959ba3"
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.hover}>
        <Text style=
          {{
            color: "grey",
            fontSize: 15,
            top: 1,
            left: 110
          }}>
          Esqueceu sua Senha ?
        </Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <MaterialCommunityIcons style={styles.icone} name="checkbox-blank" size={26} color="grey" />
      </TouchableOpacity>

      <Text style=
        {{
          color: "white",
          fontSize: 15,
          top: -46,
          right: 95
        }}>
        Lembrar-me da Senha
      </Text>

      
      <CustomButton title="Acessar" onPress={() => { handleSubmit() }} />
      {error && <Text style={styles.errorText}>{error}</Text>}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#131e2e",
    margin: 0,
    height: "100%"
  },
  errorText:{
    color: 'white',
    marginTop: 16
  },
  input: {
    width: 385,
    marginBottom: 16,
    borderWidth: 1,
    padding: 10,
    fontSize: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#eee",
    backgroundColor: "#fff",
    color: "#1f2124",
  },
  icone: {
    right: 184,
    bottom: 23,
  }
});