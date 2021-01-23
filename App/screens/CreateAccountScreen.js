import React from 'react';
import {ImageBackground, View, Image, Alert, SafeAreaView, StyleSheet, Text, Button, TouchableOpacity,TextInput} from 'react-native';
import {styles} from '../Styles';




function SignUpScreen({navigation})
{
    
    return(
        <SafeAreaView style={styles.basicContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Welcome')}>
            <Image source ={require("../assets/backarrow.png")} style={{width:50, height:50, justifyContent:"flex-start",}}/>
        </TouchableOpacity>
        <Image source ={require("../assets/FitAll.png")} style={{width:50, height:50, justifyContent:"flex-start", padding:40,margin:40,}}/>
        <Text style={styles.redText}>Let's get started...</Text>
        <Text style={styles.grayText}>Create an account to get started</Text>
        <TextInput style={styles.textInputArea} placeholder={"email"}/>
        <TextInput style={styles.textInputArea} placeholder={"username"}/>
        <TextInput style={styles.textInputArea} placeholder={"password"}/>
        <TouchableOpacity style={styles.redButton} onPress={() => navigation.navigate("Meet Acutiee")}>
            <Text style={styles.whiteText}>Create Account</Text>
        </TouchableOpacity>

    </SafeAreaView>);
    
}


export default SignUpScreen;