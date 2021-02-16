import React, { useEffect, useRef } from 'react';
import { ImageBackground,Platform,KeyboardAvoidingView, View, Image, Alert, SafeAreaView, StyleSheet, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { colors, styles } from '../Config/Styles';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';




function ChatScreen({ navigation }) {
    
    return(
      
      <SafeAreaView style={{ flexDirection: "column", backgroundColor: colors.medium, alignItems: "center", flex: 1, }}>
           <KeyboardAvoidingView  behavior={Platform.OS === "ios" ? "padding" : null} style={{flex:15}}>
            <View styles={{flex:3}}>
            <View style={styles.chatContainer} style={{flexDirection: 'row', width: "100%", alignItems: "center" }} contentContainerStyle={{ width: `${100 * 3}%` }}>
                <View style={{ backgroundColor: colors.medium, flex: 1, alignItems: "center", }} />
                <TouchableOpacity style={{ backgroundColor: colors.medium, flex: 1, alignItems: "center", }} onPress={() => navigation.navigate('Edit Avatar')}>
                    <Image source={require("../assets/avataaars.png")} style={{ width: 50, height: 50, }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Settings')} style={{ backgroundColor: colors.medium, flex: 1, alignItems: "center", paddingTop: 0 }}>
                    <Ionicons name="settings" size={35} style={styles.iconStyleS} />
                </TouchableOpacity>
                <View />    
            </View>
            <Text style={{color:"white", fontSize:12, alignSelf:"center"}}>Acutiee</Text>
            </View>
           
            
            <View style={{ backgroundColor: colors.light, alignItems: "flex-end", flex: 5, width: "100%", justifyContent: "flex-end", padding: 10 }}>
                <ScrollView contentContainerStyle={{backgroundColor: colors.light, width: "100%", padding: 10,justifyContent:"flex-end"}}>
                   <View style={styles.chatmessageuser}>
                    <Text style={styles.chattextuser}>heyy!</Text>
                   </View>
                   <View style={styles.chatmessageacutiee}>
                    <Text style={styles.chattextacutiee}>hey welcome to acutiee!</Text>
                   </View>
                   <View style={styles.chatmessageacutiee}>
                    <Text style={styles.chattextacutiee}>you can text me anything you want to know or need help with regarding ypur health</Text>
                   </View>
                   <View style={styles.chatmessageacutiee}>
                    <Text style={styles.chattextacutiee}>I'll set up a plan to help you efficently reach your goals, just let me know what they are.</Text>
                   </View>
                </ScrollView>
                
                
                <View style={{flexDirection:"row", alignItems:"center", alignContent:"center" }}>
                <TextInput style={styles.sendMessage} placeholder="Send Message..." />
                <TouchableOpacity>
                    <AntDesign name="upcircle" size={35} style={styles.iconStyleR} />
                </TouchableOpacity>
                </View>
            </View>
            </KeyboardAvoidingView>
           
            <View style={{ backgroundColor: colors.medium, bottom: 0, flexDirection: "row", alignItems: "center", flex:1}} contentContainerStyle={{ width: `${100 * 3}%` }}>
                <TouchableOpacity style={{ flex: 1, alignItems: "center", }} onPress={() => navigation.navigate('Home')}>
                    <Ionicons name="home" size={35} style={styles.iconStyleS} />
                </TouchableOpacity>
                <View style={{ flex: 1, alignItems: "center",}}>
                    <Image source={require("../assets/FitAll.png")} style={{ width: 50, height: 50, marginTop:"10%" }} />
                </View>
                <TouchableOpacity style={{ flex: 1, alignItems: "center"}} onPress={() => navigation.navigate('Chat')}>
                    <Ionicons name="chatbubble-ellipses" size={35} style={styles.iconStyleS} />
                </TouchableOpacity>
            </View>
        
        </SafeAreaView>
        
    );





}
export default ChatScreen;