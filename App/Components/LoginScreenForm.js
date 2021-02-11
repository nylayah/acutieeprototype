import React from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, styles } from '../Config/Styles';
import { Formik } from 'formik';
import * as yup from 'yup';




function LoginScreenForm({ navigation }) {

    return (
        <SafeAreaView styles={styles.basicContainer} style={{ backgroundColor: colors.light, flex: 1 }}>
            <Formik
                initialValues={{ username: '', password: '', }}
                onSubmit={(values) => {
                    console.log(values);
                    navigation.navigate("Chat")
                }}
            >
                {({ handleChange, handleSubmit, values }) => (
                    <>
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

                        <TextInput
                            style={styles.textInputArea}
                            placeholder={"password"}
                            onChangeText={handleChange('password')}
                            value={values.password}
                        />
                        <TouchableOpacity style={styles.redButton} onPress={handleSubmit} >
                            <Text style={styles.whiteText} >Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.redText} onPress={() => navigation.navigate("Create Account Form")}>
                            <Text style={styles.copyright}>Create Account</Text>
                        </TouchableOpacity>

                    </>
                )}
            </Formik>
        </SafeAreaView>
    )
}

export default LoginScreenForm;
