import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, ScrollView, FlatList } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import Filmes_Series from "../components/Filmes_Series";
import icone_cineversal from "../assets/icone_cineversal.png"
import venon from "../assets/venon_exemplo.png"

export default function Home() {
    const [Filme_Serie, SetFilme_Serie] = useState([]);
    const [query, setQuery] = useState("");
    const navigation = useNavigation();

    useEffect(() => {
        fetch(`http://10.0.2.2:3000/Filme_Serie`).then((response) => response.json())
            .then((data => SetFilme_Serie(data)))
    }, [])

    const filteredFilm = query ?
        Filme_Serie.filter((item) => item.nome.toLowerCase().includes(query.toLowerCase()) ||
            item.genero.toLowerCase().includes(query.toLowerCase()) ||
            item.classificacao.toLowerCase().includes(query.toLowerCase())

        ) : Filme_Serie;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={icone_cineversal} style={{ width: 100, height: 90 }} />
                <View style={{ flexDirection: "row" }}>
                    <View style={{ marginLeft: 30, flexDirection: "row", alignItems: "center", backgroundColor: "#D6DBE2", borderRadius: 6 }}>
                        <AntDesign name="search1" size={20} color="black" style={{ marginLeft: 10 }} />
                        <TextInput style={styles.input}
                            value={query}
                            onChangeText={(text) => setQuery(text)}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.principal}>
                <Image source={venon} style={{ width: "100%", height: 250, }} />
                <Text style={{ marginTop: 35, marginBottom: 15, marginLeft: 15, color: "white", fontSize: 18, fontWeight: "bold" }}>
                    Filmes e Séries:</Text>
                <ScrollView>
                    <View style={styles.capas_imagens}>
                        {filteredFilm.map((filme_serie, index) => (
                            <Filmes_Series key={index} imagem_url={filme_serie.imagem_url} onPress={() => navigation.navigate('Filme_Serie', {filmeSerie: filme_serie})} />
                        ))}
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        marginHorizontal: 10,
        height: 80,
        flexDirection: "row",
        alignItems: "center",

    },
    input: {
        height: 35,
        width: 230,
        backgroundColor: "#D6DBE2",
        borderRadius: 6,
        padding: 10,
        color: "#000000",
        fontSize: 16,
    },
    principal: {
        backgroundColor: "#131E2E",
        height: 710
    },
    capas_imagens: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginLeft: 10
    }
})