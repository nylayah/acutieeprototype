import React from 'react';
import { ImageBackground, View, Image, Alert, SafeAreaView, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';
import { colors, styles } from '../Config/Styles';



function HomeScreen({ navigation }) {
    return (
        <SafeAreaView style={{ flexDirection: "column", backgroundColor: colors.dark, alignItems: "center", flex: 1, }}>
            <View style={styles.chatContainer} style={{ flex: 3, flexDirection: 'row', width: "100%", alignItems: "center" }} contentContainerStyle={{ width: `${100 * 3}%` }}>
                <View style={{ backgroundColor: colors.dark, flex: 1, alignItems: "center", }} />
                <TouchableOpacity style={{ backgroundColor: colors.dark, flex: 1, alignItems: "center", }} onPress={() => navigation.navigate('Edit Avatar')}>
                    <Image source={require("../assets/avataaars.png")} style={{ width: 50, height: 50, }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Settings')} style={{ backgroundColor: colors.dark, flex: 1, alignItems: "center", }}>
                    <Image source={require("../assets/threedots.png")} style={{ width: 50, height: 50, }} />
                </TouchableOpacity>

                <View />
            </View>
            <View style={{ backgroundColor: colors.light, alignItems: "center", height: 690, width: "100%", justifyContent: "flex-end", padding: 10, }}>
                <Text>Homepage Stuff</Text>
            </View>

            <View style={{ backgroundColor: colors.dark, bottom: 0, flexDirection: "row", flex: 2, alignItems: "center", }} contentContainerStyle={{ width: `${100 * 3}%` }}>
                <TouchableOpacity style={{ flex: 1, alignItems: "center", }} onPress={() => navigation.navigate('Home')}>
                    <Image source={require("../assets/home.png")} style={{ width: 40, height: 40, }} />
                </TouchableOpacity>
                <View style={{ flex: 1, alignItems: "center" }}>
                    <Image source={require("../assets/FitAll.png")} style={{ width: 50, height: 50, }} />
                </View>
                <TouchableOpacity style={{ flex: 1, alignItems: "center" }} onPress={() => navigation.navigate('Chat')}>
                    <Image source={require("../assets/chat.png")} style={{ width: 50, height: 50, }} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>









    );





}
export default HomeScreen;