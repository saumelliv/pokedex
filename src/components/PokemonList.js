import React from 'react';
import {View, ActivityIndicator, FlatList, StyleSheet, StatusBar , Platform} from "react-native";
import PokemonCard from "./PokemonCard";


export default function PokemonList(props) {
    const {pokemon, loadPokemon, isNext, isLoading} = props;
    const loadMore = ()=>{
        loadPokemon();
    }
    return (
       <FlatList
           data={pokemon}
           numColumns={2}
           showsVerticalScrollIndicator={false}
           keyExtractor={(pokemon)=>String(pokemon.id)}
           renderItem={({item})=> <PokemonCard pokemon ={item} />}
           contentContainerStyle={styles.FlatlistCOntainer}
           onEndReached={!isLoading &&  isNext && loadMore}
           onEndReachedThreshold={0.1}
           ListFooterComponent={isNext && isLoading && (<ActivityIndicator size="large" style={styles.spinner} color="#aeaeae"/>)}
       />
    );
}
const styles = StyleSheet.create({
    FlatlistCOntainer: {
        padding:5,
        marginTop: Platform.OS ==="android"?5:0,
    },
    spinner:{
      marginTop:20,
      marginBottom: Platform.OS ==="android"?60:50,
    },
});
