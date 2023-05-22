import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image} from "react-native";
import {capitalize} from "lodash"
import getColorByPokemon from "../../Utils/getColorByPokemon";


export default function PokemonHeader(props) {
    const {name, type, order, imagen}= props;
    const color = getColorByPokemon(type);

    const bgStyle= [{backgroundColor: color, ...styles.bg}];

    return (
        <>
            <View style={bgStyle}>
                <SafeAreaView style={styles.content}>

                    <View style={styles.header}>
                        <Text style={styles.name}>{capitalize(name)}</Text>
                        <Text style={styles.order}>#{`${order}`.padStart(4,0)}</Text>
                    </View>
                    <View style={styles.img}>
                        <Image source={{uri:imagen}} style={styles.image}/>
                    </View>
                </SafeAreaView>
            </View>
        </>
    );
}

const styles = StyleSheet.create({

    bg:{
        width: "100%",
        height: 400,
        // position:"absolute",
        borderBottomEndRadius: 180,
        borderBottomLeftRadius: 180,
        transform:[{scale: 1}],
    },
    content:{
        marginHorizontal:20,
        marginTop:40,

    },
    img:{
        flex:1,
        justifyContent:"center",
        alignItems: "center",
        top:120,
    },
    image:{
        width: 250,
        height: 250,
        // resize:"contain",
    },

    header:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 40,

    },

    name:{
        color:"white",
        fontWeight:"bold",
        fontSize:20,
    },
    order:{
        color:"white",
        fontWeight:"bold",
        fontSize:20,
    },

})

