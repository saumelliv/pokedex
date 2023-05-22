import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, StatusBar} from "react-native";
import {createStackNavigator} from "@react-navigation/stack"
import PokedexScreen from "../screens/Pokedex";
import PokemonScreen from "../screens/Pokemon";

const Stack = createStackNavigator();

export default function PokedexNavigation(props) {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Pokedex' component={PokedexScreen} options={{title: "", headerTransparent: true}}/>
            <Stack.Screen name="Pokemon" component={PokemonScreen} options={{title: "", headerTransparent: true}}/>
        </Stack.Navigator>
    );
}
