import React from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Styles, { colors, styles } from '../Config/Styles';
import { Formik } from 'formik';
import * as yup from 'yup';
//import MeetAcutiee from '../screens/MeetAcutiee';


function CreateAccountForm({ navigation }) {

   return (
      <SafeAreaView styles={styles.basicContainer} style={{ backgroundColor: colors.light, flex: 1 }}>
         <Formik
            initialValues={{ username: '', email: '', password: '', }}
            onSubmit={(values) => {
               console.log(values);
               navigation.navigate("Meet Acutiee")
            }}
         >
            {({ handleChange, handleSubmit, values }) => (
               <>
                  <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Welcome')}>
                     <Ionicons name="arrow-back" size={24} style={{ color: colors.primary }} />
                  </TouchableOpacity>
                  <Image source={require("../assets/FitAll.png")} style={styles.logoMain} />
                  <Text style={styles.redText}>Let's get started...</Text>
                  <Text style={styles.darkText}>Create an account to get started</Text>
                  <TextInput
                     style={styles.textInputArea}
                     placeholder={"username"}
                     onChangeText={handleChange("username")}
                     value={values.username}
                  />
                  <TextInput style={styles.textInputArea}
                     placeholder={"email"}
                     onChangeText={handleChange("email")}
                     value={values.email}
                     keyboardType={'email-address'}
                  />
                  <TextInput
                     style={styles.textInputArea}
                     placeholder={"password"}
                     onChangeText={handleChange("password")}
                     value={values.password}
                  />
                  <TouchableOpacity style={styles.redButton} onPress={handleSubmit} >
                     <Text style={styles.whiteText} >Create Account</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.redText} onPress={() => navigation.navigate("Login Form")}>
                     <Text style={styles.copyright}>Login</Text>
                  </TouchableOpacity>
               </>
            )}
         </Formik>
      </SafeAreaView >
   );

}
export default CreateAccountForm;
