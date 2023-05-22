import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, StatusBar, SafeAreaView} from "react-native";
import {getPokemonApi, getPokemoDetailsApi} from "../api/Pokemon"
import PokemonList from "../components/PokemonList";


export default function Pokedex(props) {
    const [pokemon, setPokemon] = useState([])
    const [nextUrl,setNextUrl] =useState(null)
    const [loading, setLoading] = useState(false);


    useEffect(()=>{
        (async ()=>{
            await loadPokemon();
        })()
    },[]);


    const loadPokemon = async ()=>{
        try {
            // inicializamos la "carga" del request
            setLoading(true);

            const response = await getPokemonApi(nextUrl)
            setNextUrl(response.next)

            const pokemonsArray = [];

            for await (const pokemon of response.results){
                const pokemonDetail = await getPokemoDetailsApi(pokemon.url)

                pokemonsArray.push({
                    id:pokemonDetail.id,
                    name:pokemonDetail.name,
                    type:pokemonDetail.types[0].type.name,
                    order:pokemonDetail.order,
                    imagen:pokemonDetail.sprites.front_default,

                })

            }

            setPokemon([...pokemon, ...pokemonsArray ]);

        }catch (e) {
            console.log(e);

        } finally {
            // regresamos loading a false
            setLoading(false);
        }
    }


    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
                <PokemonList pokemon={pokemon} loadPokemon={loadPokemon} isNext={nextUrl} isLoading={loading}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
});
