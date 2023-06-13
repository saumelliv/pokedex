import { View, Text, StyleSheet, TextInput, Button, Keyboard, ToastAndroid, Alert} from 'react-native'
import React ,{useState, useEffect} from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import {user, userDetails} from "../../Utils/UserDB"
import useAuth from '../../hooks/useAuth'

export default function LoginForm() {

    const [error, setError]= useState("")
    
    const{login}=useAuth();
    
    const formik = useFormik({
        initialValues:initialValues(),
        validationSchema: Yup.object(validationSchema()),
        validateOnChange:false,
        onSubmit: (formValue)=>{
            setError('')
            const {username, password}= formValue;
            if(username != user.username || password != user.password){
                // setError('Usuario o Contraseña invalidos')
                // ToastAndroid.show('El usuario o contraseña son incorrectos', ToastAndroid.SHORT);
                Alert.alert(
                    "Datos incorrectos",
                    "El usuario o la contraseña no son correctos",
                    [{ text: "Aceptar" }],
                    { cancelable: true }
                );
            }else{

                login(userDetails);
            }
        }

    });


  return (
    <View>
      <Text style={styles.title}>Iniciar Sesion</Text>
        <TextInput
            placeholder="Nombre de usuario"
            style={styles.input} autoCapitalize="none"
            value={formik.values.username}
            onChangeText={(text) => formik.setFieldValue('username', text)}
        />
        <TextInput
            placeholder="Contraseña"
            style={styles.input} autoCapitalize="none"
            secureTextEntry={true}
            value={formik.values.password}
            onChangeText={(text) => formik.setFieldValue('password', text)}

        />


       <Button title='Ingresar' onPress={ formik.handleSubmit}/>
        <Text style={styles.error}>
            {formik.errors.username}
        </Text>
        <Text style={styles.error}>
            {formik.errors.password}
        </Text>

        {/*<Text style={styles.error}>*/}
        {/*    {error}*/}
        {/*</Text>*/}
    </View>
  )
}


function initialValues(){
    return({
        username:'',
        password:''
    })
}

function validationSchema(){
    return({
        username:Yup.string().required('El usuario es obligatorio'),
        password:Yup.string().required('Ingrese la contraseña'),
    })
}


const styles =StyleSheet.create({
    title:{
        textAlign: 'center',
        fontSize:28,
        fontWeight:'bold',
        marginTop:50,
        marginBottom:15
    },
    input:{
        height:50,
        margin:12,
        borderWidth:1,
        padding:10,
        borderRadius:10,
    },
    error:{
        textAlign: 'center',
        color: 'red',
        marginTop: 20,

    }
})