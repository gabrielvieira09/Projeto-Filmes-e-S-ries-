import Filmes_Series from "../components/Filmes_Series";
import {FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useEffect, useState } from "react";
import estrela from "../assets/estrela.png"

export default function Filme_Serie({route}){

    const {filmeSerie} = route.params 
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#131E2E" />
            
            <TouchableOpacity onPress={()=> navigation.goBack()}>
            <AntDesign name="close" size={35} color="white"
            style={{margin:10}}
            />
            </TouchableOpacity>

            <View style={{ alignItems:"center"}}>
                <Image source={{uri:`http://10.0.2.2:3000/assets/${filmeSerie.imagem_url}`}}
                style={{width:300, height:400, borderRadius:10}}/>
                <View style={{flexDirection:"row", marginTop:20}}>
                    <View style={{marginRight:120}}>
                        <Text style={{color:"white", fontSize:30, marginBottom:10}}>{filmeSerie.nome}</Text>
                            <View style={{flexDirection:"row", justifyContent:"center",alignItems:"center"}}>
                            <Image source={estrela} style={{width:55, height:10, marginRight:10}} /> 
                            <Text style={{color:"white",fontSize:20}}>{filmeSerie.avaliacao}</Text>
                        </View>
                    </View>
                    <View style={{alignItems:"center", flexDirection:"column"}}>
                        <Text style={{color:"white", fontSize:20, marginBottom:10}}>{filmeSerie.ano_lancamento}</Text>
                        <Text style={{color:"white", fontSize:20}}>{filmeSerie.classificacao}</Text>
                    </View>
                </View>
                <View style={{ marginTop:30, alignItems:"center"}}>
                    <TouchableOpacity>
                    <View style={{width:250, height:40, backgroundColor:"#D9D9D9",
                    alignItems:"center", justifyContent:"center", flexDirection:"row", borderRadius:10}}>
                        <Ionicons name="play-sharp" size={24} color="black" style={{marginRight:10}} />
                        <Text>Assistir</Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View style={{width:250, height:40, backgroundColor:"#D9D9D9",
                    alignItems:"center", justifyContent:"center", flexDirection:"row", marginTop:20, borderRadius:10}}>
                        <MaterialIcons name="file-download" size={24} color="black" style={{marginRight:15}} />
                        <Text>Baixar</Text>
                    </View>
                    </TouchableOpacity>
                    <View style={{marginTop:30, width:350}}>
                    <Text style={{color:"white"}}>{filmeSerie.sinopse}</Text>
                    </View>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#131e2e",
        height:"100%"
    }
})
