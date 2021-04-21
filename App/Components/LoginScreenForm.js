import React from 'react';
import { Image, SafeAreaView, KeyboardAvoidingView, ScrollView, Text, TouchableOpacity, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, styles } from '../Config/Styles';
import { ErrorMessage, Formik } from 'formik';
import axios from 'axios';
import { API_URL } from "@env"
import * as Yup from 'yup';


const validationSchema = Yup.object().shape({
    username: Yup.string().required().label("Username"),
    password: Yup.string().required().min(8).label("Password"),
})
console.log(API_URL)

function LoginScreenForm({ navigation }) {

    function requestLogin(username, password) {
        console.log(API_URL)
        const urlEndpoint = API_URL + '/login';
        const request = {
            username: username,
            password: password,
        };
        console.log('Hello')
        console.log(urlEndpoint)
        return new Promise((resolve, reject) => {
            axios
                .post(urlEndpoint, request, {
                })
                .then(function (response) {
                    resolve(response.data);
                })
                .catch(function (error) {
                    console.error(error);
                });
        });
    }

    return (
        <SafeAreaView styles={styles.basicContainer} style={{ backgroundColor: colors.light, flex: 1 }}>
            <Formik
                initialValues={{ username: '', password: '', }}
                onSubmit={(values) => {
                    const response = requestLogin(values.username, values.password)
                        .then(function (response) {
                            if (response) {
                                navigation.navigate("Q1")
                            }
                        })
                }}
                validationSchema={validationSchema}
            >
                {({ handleChange, handleSubmit, values, errors }) => (
                    <>
                        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null}>
                            <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled' >
                                <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Welcome')}>
                                    <Ionicons name="arrow-back" size={24} style={{ color: colors.primary }} />
                                </TouchableOpacity>
                                <Image source={require("../assets/FitAll.png")} style={styles.logoMain}
                                //style={{ width: 50, height: 50, justifyContent: "flex-start", padding: 40, margin: 40, }} 
                                />
                                <Text style={styles.redText}>Welcome back,</Text>
                                <Text style={styles.redText}>Let's pick up where you left off...</Text>
                                <TextInput
                                    style={styles.textInputArea}
                                    placeholder={"username"}
                                    onChangeText={handleChange('username')}
                                    value={values.username}
                                />
                                <Text style={styles.errorMessage} >{errors.username}</Text>
                                <TextInput
                                    style={styles.textInputArea}
                                    placeholder={"password"}
                                    onChangeText={handleChange('password')}
                                    value={values.password}
                                />
                                <Text style={styles.errorMessage} >{errors.password}</Text>

                                <TouchableOpacity style={styles.redButton} onPress={handleSubmit} >
                                    <Text style={styles.whiteText} >Login</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.redText} onPress={() => navigation.navigate("Create Account Form")}>
                                    <Text style={styles.copyright}>Create Account</Text>
                                </TouchableOpacity>
                            </ScrollView>
                        </KeyboardAvoidingView>
                    </>
                )}
            </Formik>
        </SafeAreaView>
    )
}

export default LoginScreenForm;
