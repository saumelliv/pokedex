import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, StatusBar} from "react-native";

export default function Account(props) {
    return (
       <SafeAreaView style={styles.AndroidSafeArea}>
           <Text>Account</Text>
       </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
});
