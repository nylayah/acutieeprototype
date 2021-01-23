import React from 'react';
import {ImageBackground, View, Image, Alert, SafeAreaView, StyleSheet, Text, Button, TouchableOpacity, TextInput} from 'react-native';
import {styles} from '../Styles';




function LoginScreen({navigation})
{
    
    return(
        <SafeAreaView style={styles.basicContainer}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Welcome')}>
                <Image source ={require("../assets/backarrow.png")} style={{width:50, height:50, justifyContent:"flex-start",}}/>
            </TouchableOpacity>
            <Image source ={require("../assets/FitAll.png")} style={{width:50, height:50, justifyContent:"flex-start", padding:40,margin:40,}}/>
            <Text style={styles.redText}>Welcome back,</Text>
            <Text style={styles.redText}>Let's pick up where you left off...</Text>
            <TextInput style={styles.textInputArea} placeholder={"username or email"}/>
            <TextInput style={styles.textInputArea} placeholder={"password"}/>
            <TouchableOpacity style={styles.redButton}>
            <Text style={styles.whiteText}>Login</Text>
        </TouchableOpacity>

        </SafeAreaView>);
    
}


export default LoginScreen;