import React from 'react';
import { ImageBackground, View, Image, Alert, SafeAreaView, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';
import { colors, styles } from '../Config/Styles';
import { Ionicons } from "@expo/vector-icons";



function EditAvatar({ navigation }) {
    return (
        <SafeAreaView style={styles.basicContainer}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} style={{ color: colors.primary }} />
            </TouchableOpacity>

            <Text>edit avatar here</Text>





        </SafeAreaView>
    );

}
export default EditAvatar;