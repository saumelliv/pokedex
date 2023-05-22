import React from 'react';
import {View, Text, FlatList, StyleSheet, StatusBar, Image, TouchableWithoutFeedback} from "react-native";
import getColorByPokemon from "../Utils/getColorByPokemon";
import {capitalize} from "lodash"
import{useNavigation} from "@react-navigation/native"


export default function PokemonCard(props) {
    const { pokemon } = props;
    const pokemonColor = getColorByPokemon(pokemon.type);
    const navigation = useNavigation();

    const goToPokemon = ()=>{
        navigation.navigate("Pokemon", {id:pokemon.id})
    }

    const bgSTyle={backgroundColor: pokemonColor, ...styles.bgStayle}
    return (
        <TouchableWithoutFeedback onPress={goToPokemon}>

            <View style={styles.card}>
                <View style={styles.spacing}>
                    <View style={bgSTyle}>
                        <Text  style={styles.number}>#{`${pokemon.order}`.padStart(3,0)}</Text>
                        <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
                        <Image source={{uri:pokemon.imagen}} style={styles.image}/>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    card: {
        flex:1,
        height: 130,
    },

    spacing:{
        flex:1,
        padding:5,
    },
    bgStayle:{
        flex :1,
        borderRadius:15,
        padding: 10,
    },
    name:{
        color:"#fff",
        fontWeight:"bold",
        fontSize: 15,
        paddingTop:10,

    },
    number:{
        position: 'absolute',
        right: 10,
        top:10,
        color:'#fff',
        fontSize: 11,

    },
    image:{
        position:'absolute',
        bottom:2,
        right:2,
        width:100,
        height: 100
    }

});


