import { Text, View, StyleSheet, Image, StatusBar, TouchableOpacity } from "react-native";
import Foto from "../assets/foto.png";
import Filme_1 from "../assets/breaking_bad.jpg";
import Filme_2 from "../assets/friends.jpg";
import Filme_3 from "../assets/black_mirror.jpg";
import Filme_4 from "../assets/stranger_things.jpg";
import Filme_5 from "../assets/matrix.jpg";
import Filme_6 from "../assets/narcos.jpg";
import logo from "../assets/logo.jpg";



export default function Perfil() {
    return (
        <View style={{backgroundColor:"#131E2E", height:"100%"}}>
            <StatusBar barStyle="light-content" backgroundColor="#131E2E" />
            <View style={styles.containerPerfil}>
                <Image style={styles.fotoPerfil} source={Foto} />
                <View style={styles.topo}>
                    <Text style={styles.nome}>Afonso Silva Pereira</Text>
                        <TouchableOpacity>
                    <View style={styles.botao}>
                        <Text style={styles.botaoperfil}>EDITAR PERFIL</Text>
                    </View>
                        </TouchableOpacity>
                </View>
            </View>
            <View style={styles.linha}><Image style={styles.logo} source={logo} /></View>
            <View >
                <Text style={styles.Titulo}>Já vistos:</Text>
                <View style={styles.container}>
                <TouchableOpacity><Image style={styles.filmes} source={Filme_1} /></TouchableOpacity>
                <TouchableOpacity><Image style={styles.filmes} source={Filme_2} /></TouchableOpacity>
                <TouchableOpacity><Image style={styles.filmes} source={Filme_3} /></TouchableOpacity>
                </View>
                <View style={styles.container}>
                <TouchableOpacity><Image style={styles.filmes} source={Filme_4} /></TouchableOpacity>
                <TouchableOpacity><Image style={styles.filmes} source={Filme_5} /></TouchableOpacity>
                <TouchableOpacity><Image style={styles.filmes} source={Filme_6} /></TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container1: {
        backgroundColor: '#131E2E',
        width: '100%',
        height: '100%',
    },
    containerPerfil: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 30,
        padding: 30,
        marginLeft: 0,
        backgroundColor: '#131E2E'

    },

    topo: {
        flexDirection: 'column',
        alignItems: 'center',

    },
    logo: {
        width: 130,
        height: 100,
    },

    fotoPerfil: {
        width: 120,
        height: 120,
        borderRadius: 120,
        borderWidth: 1,
        borderColor: '#000',
    },

    nome: {
        fontSize: 19,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 20,
        color: 'white',
    },

    Titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        padding: 20,
        marginTop: -20,
        color: 'white'
    },

    filmes: {
        width: 125,
        height: 210,
        borderWidth: 1,
        borderColor: '#000',
    },

    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        marginTop: -5,
        padding: 10,
        backgroundColor: '#131E2E'
    },

    linha: {
        width: '100%',
        height: 25,
        backgroundColor: 'white',
        marginBottom: 28,
        marginTop: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },

    botao: {
        display: 'flex'
        , marginTop: 21,
        marginBottom: 20,
        float: 'left',
        justifyContent: 'center',
        backgroundColor: '#000080',
        width: 100,
        height: 30,
        borderRadius: 9,





    },
    botaoperfil: {
        fontSize: 12,
        color: 'white',
        textAlign: 'center',
        borderRadius: 10,

    }
})