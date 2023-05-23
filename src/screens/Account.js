import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, StatusBar} from "react-native";
import LoginForm from '../components/auth/LoginForm';
import UserData from '../components/auth/UserData';

export default function Account(props) {
    const auth = null;
    return (
       <View >
        {auth ? <UserData/>: <LoginForm />}
       </View>
    );
}
