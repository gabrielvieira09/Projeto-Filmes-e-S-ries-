import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function Filmes_Series({
    imagem_url,
    onPress
}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Image style={style.images} source={{ uri: `http://10.0.2.2:3000/assets/${imagem_url}` }} />
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({

    images: {
        marginRight: 13,
        marginTop: 10,
        width: 120,
        height: 180,
        borderRadius: 5
    }
})