import React from 'react';
import { ImageBackground, View, Image, Alert, SafeAreaView, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';
import { styles } from '../Config/Styles';
import { Ionicons } from "@expo/vector-icons";



function Settings({ navigation }) {
    return (
        <SafeAreaView style={styles.basicContainer}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Welcome')}>
                <Ionicons name="arrow-back" size={24} color="red" />
            </TouchableOpacity>

            <Text>this is settings page</Text>








        </SafeAreaView>
    );

}
export default Settings;