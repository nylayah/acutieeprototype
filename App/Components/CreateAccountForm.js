import React from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Styles, { colors, styles } from '../Config/Styles';
import { Formik } from 'formik';
import * as yup from 'yup';
//import MeetAcutiee from '../screens/MeetAcutiee';


function CreateAccountForm({ navigation }) {

   return (
      <SafeAreaView styles={styles.basicContainer}>
         <Formik
            initialValues={{ username: '', email: '', password: '', }}
            onSubmit={(values) => {
               console.log(values);
               navigation.navigate("Meet Acutiee")
            }}
         >
            {({ handleChange, handleSubmit, values }) => (
               <>
                  <TextInput
                     style={{
                        width: "100%",
                        backgroundColor: colors.secondary,
                        borderRadius: 18,
                        color: colors.medium,
                        height: 50,
                        fontSize: 20,
                        paddingLeft: '2.5%',
                        marginTop: 20,
                     }}
                     placeholder={"username"}
                     onChangeText={handleChange("username")}
                     value={values.username}
                  />
                  <TextInput style={{
                     width: "100%",
                     backgroundColor: colors.secondary,
                     borderRadius: 18,
                     color: colors.medium,
                     height: 50,
                     fontSize: 20,
                     paddingLeft: '2.5%',
                     marginTop: 20,
                  }}
                     placeholder={"email"}
                     onChangeText={handleChange("email")}
                     value={values.email}
                     keyboardType={'email-address'}
                  />
                  <TextInput
                     style={{
                        width: "100%",
                        backgroundColor: colors.secondary,
                        borderRadius: 18,
                        color: colors.medium,
                        height: 50,
                        fontSize: 20,
                        paddingLeft: '2.5%',
                        marginTop: 20,
                     }}
                     placeholder={"password"}
                     onChangeText={handleChange("password")}
                     value={values.password}
                  />
                  <TouchableOpacity style={styles.redButton} onPress={handleSubmit} >
                     <Text style={styles.whiteText} >Create Account</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.redText} onPress={() => navigation.navigate("Login")}>
                     <Text style={styles.copyright}>Login</Text>
                  </TouchableOpacity>
               </>
            )}
         </Formik>
      </SafeAreaView >
   );

}
export default CreateAccountForm;
