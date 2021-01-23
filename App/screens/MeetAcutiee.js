import React from 'react';
import {ImageBackground, View, Image, Alert, SafeAreaView, StyleSheet, Text, Button, TouchableOpacity, ScrollView} from 'react-native';
import {styles} from '../Styles';


function AcutieeIntro1 (props)
{
    return(

    <SafeAreaView style={styles.basicContainerRed}>
        <Text style={styles.whiteText}>Meet Acutiee...</Text>
    </SafeAreaView>
    );
    
}
function AcutieeIntro2 (props)
{
    return(

    <SafeAreaView style={styles.basicContainerRed}>
        <Text style={styles.whiteText}>Your motivator, guide, support system but most importantly a friend</Text>
    </SafeAreaView>
    );
    
}
function AcutieeIntro3 (props)
{
    return(

    <SafeAreaView style={styles.basicContainerRed}>
        <Text style={styles.whiteText}>Acutiee works with you to help you ACHIEVE and MAINTAIN your goals</Text>
    </SafeAreaView>
    );
    
}
function MeetAcutiee1 ({navigation})
{
    return(
        <SafeAreaView style={styles.basicContainerRed}>
                <Image source ={require("../assets/avataaars.png")} style={styles.logo}/>
                <ScrollView 
                horizontal={true}
                contentContainerStyle={{ width: `${100 * 3}%` }}
                showsHorizontalScrollIndicator={true}
                scrollEventThrottle={200}
                decelerationRate="fast"
                pagingEnabled>
                <AcutieeIntro1></AcutieeIntro1>
                <AcutieeIntro2></AcutieeIntro2>
                <AcutieeIntro3></AcutieeIntro3>
                </ScrollView>

            





        </SafeAreaView>








    );







}
export default MeetAcutiee1;