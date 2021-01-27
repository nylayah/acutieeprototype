import React from 'react';
import { ImageBackground, View, Image, Alert, SafeAreaView, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';
import { styles } from '../Config/Styles';



function WelcomeScreen({ navigation }) {
    console.log("App executed");
    return (
        <SafeAreaView style={styles.basicContainer}>
            <Image source={require("../assets/FitAll.png")} style={styles.logo} />
            <Text style={styles.slogan}>PRIORITIZE YOU!</Text>
            <TouchableOpacity style={styles.redButton} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.whiteText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.grayButton} onPress={() => navigation.navigate('Create Account')}>
                <Text style={styles.redText}>Create an Account</Text>
            </TouchableOpacity>
            <View style={{ justifyContent: "flex-end", marginTop: 20, }}>
                <Text style={styles.copyright}>Powered by FitAll180 Technologies</Text>
            </View>


        </SafeAreaView>);

}


export default WelcomeScreen;