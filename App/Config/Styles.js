import React from 'react';
import { StyleSheet, } from 'react-native';
import { endAsyncEvent } from 'react-native/Libraries/Performance/Systrace';
import colors from "./colors";


export default {
    colors,
}
const styles = StyleSheet.create({
    backButton: {
        height: 50,
        width: 50,
        position: "absolute",
        top: 40,
        justifyContent: "flex-start",
        left: 5,
        margin: 20,
    },
    basicContainer: {
        flex: 1,
        backgroundColor: colors.light,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,

    },
    basicContainerRed: {
        flex: 1,
        backgroundColor: colors.primary,
        alignItems: "center",
        padding: 25,
    },
    chatContainer: {
        backgroundColor: colors.dark,
        alignItems: "center",
    },
    chatmessageuser:{
        borderRadius: 20,
        borderBottomRightRadius:0,
        backgroundColor: colors.primary,
        alignSelf:"flex-start",
        padding:10,
        left:310, 
        marginBottom:5,
    },
    chatmessageacutiee:{
        borderRadius: 20,
        borderBottomLeftRadius:0,
        backgroundColor: "white",
        alignSelf:"flex-start",
        padding:10,
        right:5,
        marginBottom:5,
    },
    chattextacutiee:{
        fontSize:15,
        color:colors.dark,
    },
    chattextuser:{
        fontSize:15,
        color:"white",
    },
    copyright: {
        fontSize: 14,
        color: colors.primary,
        margin: 5,
        bottom: 0,
        textAlign: "center",
    },
    darkText: {
        fontSize: 20,
        color: colors.dark,
        textAlign: "center",

    },
    grayText: {
        fontSize: 18,
        color: colors.secondary,
        textAlign: "center",
    },
    grayButton: {
        width: "90%",
        height: 60,
        backgroundColor: colors.secondary,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
        marginTop: '5%'
    },
    homeTab: {
        flex: .33,
        backgroundColor: colors.primary,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        borderRadius: 30,
        margin: 5,
        //width: '33%'
    },
    homeTabC: {
        flexDirection: "row",
        backgroundColor: colors.medium,
        alignItems: "center",
        padding: 10,
        borderRadius: 30,
        margin: 1,
    },
    homeTabText: {
        fontSize: 12,
        color: colors.secondary,
        bottom: 0,
        padding: 10,

    },
    logoMain: {
        width: 250,
        height: 250,
        marginTop: 50,
        alignItems: 'center',
        justifyContent: "flex-start",
        marginLeft: "auto",
        marginRight: "auto",
    },
    iconStyleS: {
        justifyContent: "center",
        color: colors.secondary,
        // marginTop: '10%',
        // marginBottom: '10%',
        paddingBottom: 10,
        paddingTop: 10,
    },
    iconStyleR: {
        justifyContent: "center",
        color: colors.primary,
        // marginTop: '10%',
        // marginBottom: '10%',
        paddingBottom: 5,
        //paddingTop: 10,
    },
    slogan: {
        fontSize: 27,
        color: colors.primary,
        marginTop: 50,
        marginBottom: 150,
        fontWeight: "bold",
        textAlign: "center",
    },
    redButton: {
        width: "90%",
        height: 60,
        backgroundColor: colors.primary,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
        marginBottom: 20,
        marginTop: 40,
        marginRight: "auto",
        marginLeft: "auto",
    },
    redText: {
        fontSize: 25,
        color: colors.primary,
        textAlign: "center",
        marginTop: 10,
        marginBottom: 10,
    },
    sendMessage: {
        width: "85%",
        backgroundColor: colors.secondary,
        color: colors.primary,
        borderRadius: 20,
        height: 45,
        fontSize: 18,
        paddingLeft: 12,
        marginTop: 10,
        left: -15,
    },
    textInputArea: {
        width: "95%",
        backgroundColor: colors.secondary,
        borderRadius: 18,
        color: colors.medium,
        height: 50,
        fontSize: 20,
        paddingLeft: '2.5%',
        marginTop: 20,
        alignContent: "center",
        justifyContent: "center",
        marginRight: "auto",
        marginLeft: "auto",


    },
    whiteText: {
        fontSize: 25,
        color: colors.secondary,
        textAlign: "center",

    },
})

export { styles, colors }

