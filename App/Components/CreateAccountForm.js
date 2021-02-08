import React from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, TextInput,View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, styles } from '../Config/Styles';
import {Formik} from 'formik';
import * as yup from 'yup';
import MeetAcutiee from '../screens/MeetAcutiee';


export default function CreateAccountForm() 
{
    return (
        <SafeAreaView styles={styles.basicContainer}>
 <Formik
 initialValues={{username:'',email:'',password:'',}}
 onSubmit={(values)=> {
     console.log(values);
     <MeetAcutiee/>
 }}
 >
  {(props)=>(
 <View style={styles.basicContainer}> 
     <TextInput 
     style={{width: "170%",
        backgroundColor: colors.secondary,
        borderRadius: 18,
        color: colors.medium,
        height: 50,
        fontSize: 20,
        paddingLeft: '2.5%',
        marginTop: 20,}} 
     placeholder={"username"} 
     onChangeText={props.handleChange('username')}
     value={props.values.username}
     />  
     <TextInput style={{width: "170%",
        backgroundColor: colors.secondary,
        borderRadius: 18,
        color: colors.medium,
        height: 50,
        fontSize: 20,
        paddingLeft: '2.5%',
        marginTop: 20,}}
     placeholder={"email"} 
     onChangeText={props.handleChange('email')}
     value={props.values.email}
     keyboardType={'email-address'}
     />
     <TextInput 
     style={{width: "170%",
        backgroundColor: colors.secondary,
        borderRadius: 18,
        color: colors.medium,
        height: 50,
        fontSize: 20,
        paddingLeft: '2.5%',
        marginTop: 20,}} 
     placeholder={"password"} 
     onChangeText={props.handleChange('password')}
     value={props.values.password}
     />
     <TouchableOpacity style={{width: "170%",
        height: 60,
        backgroundColor: colors.primary,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
        marginBottom: 20,
        marginTop: 40,}} onPress={props.handleSubmit}>
     <Text style={styles.whiteText}>Create Account</Text>
     </TouchableOpacity> 
     <TouchableOpacity style={styles.redText} onPress={() => navigation.navigate("Login")}>
                <Text style={styles.copyright}>Login</Text>
    </TouchableOpacity>   
 </View>
  )}   
 </Formik>
 </SafeAreaView>
)}
