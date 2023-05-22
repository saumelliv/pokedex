import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, StatusBar} from "react-native";
import {createStackNavigator} from "@react-navigation/stack"
import Favoritos from "../screens/Favoritos";

const Stack = createStackNavigator();

export default function FavotirosNavigation(props) {
    return (
       <Stack.Navigator>
           <Stack.Screen name='Favoritos' component={Favoritos} options={{
               title: "Favoritos",
               headerTitleAlign: "center",

           }}/>
       </Stack.Navigator>
    );
}
