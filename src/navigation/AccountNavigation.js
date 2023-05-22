import React from "react";
import {View, Text, SafeAreaView, StyleSheet, StatusBar} from "react-native";
import {createStackNavigator} from "@react-navigation/stack"
import Account from "../screens/Account";

const Stack = createStackNavigator();

export default function AccountNavigation (props){
    return (
        <Stack.Navigator>
            <Stack.Screen name="Mi cuenta" component={Account} options={{
                titlle:"Mi cuenta",
                headerTitleAlign:'center',
            }} />
        </Stack.Navigator>
    );
}