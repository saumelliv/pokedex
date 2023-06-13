// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from "@react-navigation/native"
import Navigation from "./src/navigation/Navigation";
import {AuthProvider} from './src/contexto/AuthContext'


export default function App() {
  return (
      <NavigationContainer>
        <AuthProvider>
        <Navigation /> 
        </AuthProvider>
      </NavigationContainer>

  );
}

