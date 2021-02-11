import React from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, styles } from '../Config/Styles';




function SignUpScreen({ navigation }) {

    return (
        <SafeAreaView style={styles.basicContainer}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Welcome')}>
                <Ionicons name="arrow-back" size={24} style={{ color: colors.primary }} />
            </TouchableOpacity>
            <Image source={require("../assets/FitAll.png")} style={styles.logoMain} />
            <Text style={styles.redText}>Let's get started...</Text>
            <Text style={styles.darkText}>Create an account to get started</Text>
            <TextInput style={styles.textInputArea} placeholder={"email"} />
            <TextInput style={styles.textInputArea} placeholder={"username"} />
            <TextInput style={styles.textInputArea} placeholder={"password"} />
            <TouchableOpacity style={styles.redButton} onPress={() => navigation.navigate("Create Account Form")}>
                <Text style={styles.whiteText}>Create Account</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.redText} onPress={() => navigation.navigate("Login")}>
                <Text style={styles.copyright}>Login</Text>
            </TouchableOpacity>

        </SafeAreaView>);

}


export default SignUpScreen;