import React from 'react';
import { StyleSheet, } from 'react-native';
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
        flex: -1,
    },
    copyright: {
        fontSize: 12,
        color: colors.primary,
        margin: 5,
        bottom: 0,
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
    },
    logo: {
        width: 200,
        height: 200,
        marginTop: 50,
        justifyContent: "flex-start",
    },
    slogan: {
        fontSize: 27,
        color: colors.primary,
        marginTop: 50,
        marginBottom: 200,
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
    },
    redText: {
        fontSize: 25,
        color: colors.primary,
        textAlign: "center",
    },
    sendMessage: {
        width: "85%",
        backgroundColor: colors.secondary,
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
        color: colors.dark,
        height: 50,
        fontSize: 20,
        paddingLeft: 12,
        marginTop: 10,
    },
    whiteText: {
        fontSize: 25,
        color: colors.secondary,
        textAlign: "center",

    },
})

export { styles, colors }
