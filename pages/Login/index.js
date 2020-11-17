import React, { useState } from 'react';
import {View, Text, StyleSheet, TextInput,TouchableOpacity, Image} from 'react-native';
import Logo from '../../assets/logo.svg'
const Login = () => {
    // Hooks
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const Logar = () =>{
        const corpo = {
            email : email,
            senha : senha
        }
        fetch('http://192.168.0.2:5000/api/Account/login',{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            }
        })        
        
    }

    return(
        <View style={styles.container}>
            <Image
                style ={styles.image}
                source ={Logo}
            />
           
            <TextInput
                style={styles.input}
                onChangeText={text => setEmail(text)}
                value={email}
                placeholder='Digite seu Email'
            />
            <TextInput
                style={styles.input}
                onChangeText={text => setSenha(text)}
                value={senha}
                secureTextEntry={true}
                placeholder='Digite sua Senha'
            />
            <TouchableOpacity
                style={styles.button}
                onPress={Logar}
            >
                <Text style={styles.buttonText}>
                    Login
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    input : {
        marginTop: 10,

        textAlign:'center',
        width: '75%',
        height: 40, 
        borderColor:'gray',   
        borderWidth: 1,
        borderRadius: 6,
        padding: 10,
    },
    button : {
        width:'55%',
        textAlign:'center',
        borderRadius: 6,
        marginTop: 10,
        height: 40, 
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText : {
        color: 'white',     
    },
    image:{
        width: 80,
        height: 80,
    }
})

export default Login;