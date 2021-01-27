import React from 'react';
import { ImageBackground, View, Image, Alert, SafeAreaView, StyleSheet, Text, Button, TouchableOpacity, TextInput } from 'react-native';
import { styles } from '../Components/Styles';
import { Ionicons } from "@expo/vector-icons";




function LoginScreen({ navigation }) {

    return (
        <SafeAreaView style={styles.basicContainer}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Welcome')}>
                <Ionicons name="arrow-back" size={24} color="red" />
            </TouchableOpacity>
            <Image source={require("../assets/FitAll.png")} style={{ width: 50, height: 50, justifyContent: "flex-start", padding: 40, margin: 40, }} />
            <Text style={styles.redText}>Welcome back,</Text>
            <Text style={styles.redText}>Let's pick up where you left off...</Text>
            <TextInput style={styles.textInputArea} placeholder={"username or email"} />
            <TextInput style={styles.textInputArea} placeholder={"password"} />
            <TouchableOpacity style={styles.redButton} onPress={() => navigation.navigate('Chat')}>
                <Text style={styles.whiteText}>Login</Text>
            </TouchableOpacity>

        </SafeAreaView>);

}


export default LoginScreen;