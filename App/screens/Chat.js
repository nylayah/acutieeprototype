import React, { useEffect, useRef } from 'react';
import { ImageBackground, Platform, KeyboardAvoidingView, View, Image, Alert, SafeAreaView, StyleSheet, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { colors, styles } from '../Config/Styles';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { useState } from 'react';
import { API_URL } from "@env"






//POST https://dialogflow.googleapis.com/v2/projects/acutiee-hk9x/agent/sessions/laykilla:detectIntent





function Message({ message, isUser }) {
    // console.log(message)
    if (isUser) {
        return (
            <View style={styles.chatmessageuser}>
                <Text style={styles.chattextuser}>{message}</Text>
            </View>
        )
    } else {
        return (
            <View style={styles.chatmessageacutiee}>
                <Text style={styles.chattextacutiee}>{message}</Text>
            </View>
        )
    }
}


function ChatScreen({ navigation }) {
    const [messages, setMessages] = useState([
        /*{ message: "heyy!", isUser: true },
        { message: "hey welcome to acutiee!", isUser: false },
        { message: "you can text me anything you want to know or need help with regarding ypur health", isUser: false },
        { message: "I'll set up a plan to help you efficently reach your goals, just let me know what they are.", isUser: false },
        //{ message: "hey welcome to acutiee!", isUser: false },*/
    ])


    const [input, setInput] = useState("")
    // console.log(input)
    const sendMessage = () => {
        setMessages((old) => [...old, { message: input, isUser: true }])
        console.log(input)
        {
            console.log(API_URL)

            fetch(
                API_URL + '/chatbot?text=' + input,
                {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        queryInput: {
                            text: {
                                text: input,
                                languageCode: "en-US",
                            },
                        },
                    }),
                }
            )
                //.then((response) => response.text())
                //.then((text) => (text.length ? JSON.parse(text) : {}))
                .then(async (responseJson) => {
                    let message = await responseJson.text();
                    setMessages((old) => [...old, { message: message, isUser: false }])

                })
                .catch((error) => {
                });
            setInput("")
        }
    }
    return (

        <SafeAreaView style={{ flexDirection: "column", backgroundColor: colors.medium, alignItems: "center", flex: 1, }}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null} style={{ flex: 15 }}>
                <View styles={{ flex: 2.5 }}>
                    <View style={styles.chatContainer} style={{ flexDirection: 'row', width: "100%", alignItems: "center" }} contentContainerStyle={{ width: `${100 * 3}%` }}>
                        <View style={{ backgroundColor: colors.medium, flex: 1, alignItems: "center", }} />
                        <TouchableOpacity style={{ backgroundColor: colors.medium, flex: 1, alignItems: "center", }} onPress={() => navigation.navigate('Edit Avatar')}>
                            <Image source={require("../assets/avataaars.png")} style={{ width: 50, height: 50, }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Settings')} style={{ backgroundColor: colors.medium, flex: 1, alignItems: "center", paddingTop: 0 }}>
                            <Ionicons name="settings" size={35} style={styles.iconStyleS} />
                        </TouchableOpacity>
                        <View />
                    </View>
                    <Text style={{ color: "white", fontSize: 12, alignSelf: "center" }}>Acutiee</Text>
                </View>


                <View style={{ backgroundColor: colors.light, flex: 5, width: "100%" }}>

                    <FlatList id="messages" contentContainerStyle={{ backgroundColor: colors.light, padding: 20, width: "100%" }}
                        data={messages}
                        renderItem={({ item }) => <Message isUser={item.isUser} message={item.message} />}
                    />

                    <View style={{ flexDirection: "row", alignItems: "center", paddingBottom: 5, width: "100%" }}>
                        <TextInput style={styles.sendMessage} placeholder="Send Message..." onChangeText={text => setInput(text)} value={input} />
                        <TouchableOpacity onPress={sendMessage}>
                            <AntDesign name="upcircle" size={35} style={styles.iconStyleR} />
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>

            <View style={{ backgroundColor: colors.medium, alignItems: "center", flex: .75, paddingTop: 5, alignItems: "center", }}>
                <Image source={require("../assets/FitAll.png")} style={{ width: 50, height: 50, }} />
            </View>

        </SafeAreaView>

    );





}
export default ChatScreen;