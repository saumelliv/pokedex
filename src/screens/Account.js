import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, StatusBar} from "react-native";
import LoginForm from '../components/auth/LoginForm';
import UserData from '../components/auth/UserData';
import useAuth from '../hooks/useAuth';

export default function Account(props) {
    const {auth} = useAuth();
    return (
       <View >
        {auth ? <UserData/>: <LoginForm />}
       </View>
    );
}
