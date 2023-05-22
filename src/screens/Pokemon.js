import React, {useEffect, useState} from 'react';
import { ScrollView, StyleSheet, StatusBar} from "react-native";
import {onePokemonApi} from "../api/Pokemon"
import Icon from "react-native-vector-icons/FontAwesome5"
import PokemonHeader from "../components/pokemon/PokemonHeader"
import PokemoType from "../components/pokemon/Type";
import PokemoStats from "../components/pokemon/Stats";


export default function Pokemon(props) {
    const [pokemon, setPokemon] = useState(null);
    const {route: {params}, navigation} =  props ;

    useEffect(()=>{
        navigation.setOptions({
            // headerRigh: ()=>null,
            headerLeft: ()=> (
                <Icon
                    name="arrow-left"
                    color="#fff"
                    size={20}
                    style={{ marginLeft: 20 }}
                    onPress={navigation.goBack}
                />
                ),
        })
    },[navigation, params])


    useEffect(()=>{
        (async () =>{
            try {
                const response = await onePokemonApi(params.id)
                setPokemon(response)
            }catch (err){
               navigation.goBack();
            }
        })()

    }, [params]);

   if(!pokemon) return null;

    return (
        <ScrollView >
            <PokemonHeader name={pokemon.name} order={pokemon.order} imagen={pokemon.sprites.front_default} type={pokemon.types[0].type.name}/>
            <PokemoType type={pokemon.types} />
            <PokemoStats stats={pokemon.stats} />
        </ScrollView>
    );

}

const styles = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
});
