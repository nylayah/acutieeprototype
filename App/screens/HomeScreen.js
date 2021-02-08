import React from 'react';
import { ImageBackground, View, Image, Alert, SafeAreaView, StyleSheet, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { colors, styles } from '../Config/Styles';
import { Ionicons } from '@expo/vector-icons';


function HomeScreen({ navigation }) {
    return (
        <SafeAreaView style={{ flexDirection: "column", backgroundColor: colors.dark, alignItems: "center", flex: 1, }}>
            <View style={styles.chatContainer} style={{ flex: 1.25, flexDirection: 'row', width: "100%", alignItems: "center" }} contentContainerStyle={{ width: `${100 * 3}%` }}>
                <View style={{ backgroundColor: colors.dark, flex: 1, alignItems: "center", }} />
                <TouchableOpacity style={{ backgroundColor: colors.dark, flex: 1, alignItems: "center", }} onPress={() => navigation.navigate('Edit Avatar')}>
                    <Image source={require("../assets/avataaars.png")} style={{ width: 50, height: 50, }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Settings')} style={{ backgroundColor: colors.dark, flex: 1, alignItems: "center", paddingTop: 0 }}>
                    <Ionicons name="settings" size={35} style={styles.iconStyleS} />
                </TouchableOpacity>

                <View />
            </View>
            <View style={{ backgroundColor: colors.light, alignItems: "center", flex: 15, width: "100%", justifyContent: "flex-end", padding: 10, }}>
                <Text style={{ color: colors.primary, fontSize: 50, }}>HomePage</Text>
            </View>

            <View style={{ backgroundColor: colors.dark, bottom: 0, flexDirection: "row", flex: 1.25, alignItems: "center", }} contentContainerStyle={{ width: `${100 * 3}%` }}>
                <TouchableOpacity style={{ flex: 1, alignItems: "center", }} onPress={() => navigation.navigate('Home')}>
                    <Ionicons name="home" size={35} style={styles.iconStyleS} />
                </TouchableOpacity>
                <View style={{ flex: 1, alignItems: "center" }}>
                    <Image source={require("../assets/FitAll.png")} style={{ width: 50, height: 50, marginTop: '10%' }} />
                </View>
                <TouchableOpacity style={{ flex: 1, alignItems: "center", justifyContent: "flex-end" }} onPress={() => navigation.navigate('Chat')}>
                    <Ionicons name="chatbubble-ellipses" size={35} style={styles.iconStyleS} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );





}
export default HomeScreen;