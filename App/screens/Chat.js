import React from 'react';
import {ImageBackground, View, Image, Alert, SafeAreaView, StyleSheet, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import {styles} from '../Styles';



function ChatScreen (props)
{
    return(
        <SafeAreaView style={styles.chatContainer}>
        <Image source ={require("../assets/avataaars.png")} style={{width:50,height:50,marginTop:10, marginBottom:20,}}/>
        
        <View style={{backgroundColor: "#a8dbdcff", alignItems: "center", height:690, width:"100%", justifyContent:"flex-end", padding:10,}}>
            <TextInput style={styles.sendMessage} placeholder="Send Message..."/>
        </View>



            
        </SafeAreaView>
    );





}
export default ChatScreen;