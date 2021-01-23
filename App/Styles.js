import React from 'react';
import { ImageBackground, View, Image, Alert, SafeAreaView, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({

    basicContainer: {
        flex: 1,
        backgroundColor: "#a8dbdcff",
        alignItems: "center",
        padding:10,

    },
    basicContainerRed:{
        flex:1,
        backgroundColor:"#e63a46",
        alignItems: "center",
        padding:25,
    },
    logo: {
        width: 200,
        height: 200,
        marginTop: 50,
        justifyContent: "flex-start",
    },
    slogan: {
        fontSize: 27,
        color: "#e63a46",
        marginBottom: 300,
        fontWeight: "bold",
        textAlign:"center",
    },
    redButton: {
        width: "90%",
        height: 60,
        backgroundColor: "#e63a46",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
        marginBottom: 20,
        marginTop: 40,
    },
    whiteText: {
        fontSize: 25,
        color: "white",
        textAlign:"center",

    },
    redText: {
        fontSize: 25,
        color: "#e63a46",
        textAlign:"center",
    },
    grayText: {
        fontSize: 18,
        color: "gray",
        textAlign:"center",
    },
    grayButton: {
        width: "90%",
        height: 60,
        backgroundColor: "#eeeeeeff",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,


    },
    copyright: {
        fontSize: 12,
        color: "#eeeeeeff",
        margin: 5,
        bottom: 0,
        textAlign:"center",
    },
    backButton: {
        width: 50,
        height: 50,
        backgroundColor: "#C70039",
        position: "absolute",
        top: 40,
        justifyContent: "flex-start",
        left: 5,
        margin: 20,
    },
    textInputArea: {
        width: "95%",
        backgroundColor: "#eeeeeeff",
        borderRadius: 18,
        height: 50,
        fontSize: 20,
        paddingLeft: 12,
        marginTop: 10,
    },
    sendMessage:{
        width: "85%",
        backgroundColor: "#eeeeeeff",
        borderRadius: 20,
        height: 45,
        fontSize: 18,
        paddingLeft: 12,
        marginTop: 10,
        left:-15,
    },
    chatContainer:{
        backgroundColor:"#1d3557",
        alignItems:"center",
        flex: -1,
    },

})

export { styles }

