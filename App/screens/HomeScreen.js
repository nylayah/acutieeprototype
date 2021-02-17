import React from 'react';
import { ImageBackground, View, Image, Alert, SafeAreaView, StyleSheet, Text, TextInput, Button, TouchableOpacity, ScrollView, } from 'react-native';
import { colors, styles } from '../Config/Styles';
import { Ionicons, MaterialCommunityIcons, FontAwesome5, Foundation } from '@expo/vector-icons';


function HomeScreen({ navigation }) {
    return (
        <SafeAreaView style={{ flexDirection: "column", backgroundColor: colors.medium, alignItems: "center", flex: 1, }}>
            <View style={{ flex: 15 }}>
                <View style={styles.chatContainer} style={{ flex: 1.25, flexDirection: 'row', width: "100%", alignItems: "center" }} contentContainerStyle={{ width: `${100 * 3}%` }}>
                    <View style={{ backgroundColor: colors.medium, flex: 1, alignItems: "center", }} />
                    <TouchableOpacity style={{ backgroundColor: colors.medium, flex: 1, alignItems: "center", }} onPress={() => navigation.navigate('Edit Avatar')}>
                        <Image source={require("../assets/User.jpg")} style={{ width: 50, height: 50, borderRadius: 25 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Settings')} style={{ backgroundColor: colors.medium, flex: 1, alignItems: "center", paddingTop: 0 }}>
                        <Ionicons name="settings" size={35} style={styles.iconStyleS} />
                    </TouchableOpacity>
                </View>


                <View style={{ backgroundColor: colors.light, alignItems: "center", flex: 15, width: "100%", padding: 10, }}>
                    <Text style={styles.darkText}>To Do List</Text>
                    <ScrollView
                        horizontal={true}
                        contentContainerStyle={{ width: `${66 * 3}%` }}
                        showsHorizontalScrollIndicator={true}
                        scrollEventThrottle={200}
                        decelerationRate="fast"
                        pagingEnabled
                        style={{
                            flex: 1,
                            borderRadius: 25,
                            margin: 10,
                        }}
                    >
                        <TouchableOpacity style={styles.homeTab} >

                            <Text style={styles.homeTabText} onPress={() =>
                                Alert.alert("To Do", "Walk for 10 mins", [
                                    { text: "Done", onPress: () => console.log("Done") },
                                    { text: "Not yet", onPress: () => console.log("Not yet") },

                                ]
                                )}>Walk for 10 mins</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.homeTab}>
                            <Text style={styles.homeTabText} onPress={() =>
                                Alert.alert("To Do", "Make salad for dinner", [
                                    { text: "Done", onPress: () => console.log("Done") },
                                    { text: "Not yet", onPress: () => console.log("Not yet") },

                                ]
                                )}>Make salad for dinner</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.homeTab}>
                            <Text style={styles.homeTabText} onPress={() =>
                                Alert.alert("To Do", "Drink 64 oz of water", [
                                    { text: "Done", onPress: () => console.log("Done") },
                                    { text: "Not yet", onPress: () => console.log("Not yet") },

                                ]
                                )}>Drink 64 oz of water</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.homeTab}>
                            <Text style={styles.homeTabText} onPress={() =>
                                Alert.alert("To Do", "10 squats per hour", [
                                    { text: "Done", onPress: () => console.log("Done") },
                                    { text: "Not yet", onPress: () => console.log("Not yet") },

                                ]
                                )}>10 squats per hour</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.homeTab} >

                            <Text style={styles.homeTabText} onPress={() =>
                                Alert.alert("To Do", "Check fiber intake", [
                                    { text: "Done", onPress: () => console.log("Done") },
                                    { text: "Not yet", onPress: () => console.log("Not yet") },

                                ]
                                )}>Check fiber intake</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.homeTab} onPress={() =>
                            Alert.alert("To Do", "Log lunch", [
                                { text: "Done", onPress: () => console.log("Done") },
                                { text: "Not yet", onPress: () => console.log("Not yet") },

                            ]
                            )}>
                            <Text style={styles.homeTabText}>Log lunch</Text>
                        </TouchableOpacity>

                    </ScrollView>

                    <Text style={styles.darkText}>Track Progress</Text>
                    <View style={{ width: 400 }}>
                        <TouchableOpacity style={styles.homeTabC}>
                            <MaterialCommunityIcons name="silverware-fork-knife" size={30} style={styles.iconStyleS} />
                            <Text style={styles.homeTabText}>Current Eating habits</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.homeTabC}>
                            <FontAwesome5 name="running" size={30} style={styles.iconStyleS} />
                            <Text style={styles.homeTabText}>Activities</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.homeTabC}>
                            <Foundation name="target" size={30} style={styles.iconStyleS} />
                            <Text style={styles.homeTabText}>Goals</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.darkText}>Reccomended</Text>


                    <ScrollView
                        horizontal={true}
                        contentContainerStyle={{ width: `${33 * 3}%` }}
                        showsHorizontalScrollIndicator={true}
                        scrollEventThrottle={200}
                        decelerationRate="fast"
                        pagingEnabled
                        style={{
                            flex: 1,
                            borderRadius: 25,
                            margin: 10,
                        }}
                    >

                        <TouchableOpacity style={styles.homeTab}>
                            <Text style={styles.homeTabText}>Read</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.homeTab} >

                            <Text style={styles.homeTabText}>Watch</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.homeTab}>
                            <Text style={styles.homeTabText}>Listen</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>
            <View style={{ backgroundColor: colors.medium, bottom: 0, flexDirection: "row", flex: 1, alignItems: "center", }} contentContainerStyle={{ width: `${100 * 3}%` }}>
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

        </SafeAreaView >
    );





}
export default HomeScreen;