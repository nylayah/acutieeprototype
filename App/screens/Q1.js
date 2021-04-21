import React from 'react';
import { ImageBackground, View, Image, Alert, SafeAreaView, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';
import { colors, styles } from '../Config/Styles';





function Q1({ navigation }) {
    return (
        <SafeAreaView style={styles.basicContainer}>
            <Text></Text>

            <TouchableOpacity style={styles.surveyButton} onPress={() => navigation.navigate('Q2')}>
                <Text style={styles.surveyButtonText}>Do you get hungry first thing in the morning?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.surveyButton} onPress={() => navigation.navigate('Q2')}>
                <Text style={styles.surveyButtonText}></Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.surveyButton} onPress={() => navigation.navigate('Q2')}>
                <Text style={styles.surveyButtonText}></Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.surveyButton} onPress={() => navigation.navigate('Q2')}>
                <Text style={styles.surveyButtonText}></Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.surveyButton} onPress={() => navigation.navigate('Q2')}>
                <Text style={styles.surveyButtonText}></Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
}
export default Q1;

