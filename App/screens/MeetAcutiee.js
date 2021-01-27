import React, { useRef, useEffect, } from 'react';
import { ImageBackground, View, Image, Alert, SafeAreaView, StyleSheet, Text, Button, TouchableOpacity, ScrollView, Animated } from 'react-native';
import { styles } from '../Config/Styles';


const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 2000,
      }
    ).start();
  }, [fadeAnim])

  return (
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim,         // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
}


function AcutieeIntro1(props) {
  return (

    <SafeAreaView style={styles.basicContainerRed}>
      <Text style={styles.whiteText}>Meet Acutiee...</Text>
    </SafeAreaView>
  );

}
function AcutieeIntro2(props) {
  return (

    <SafeAreaView style={styles.basicContainerRed}>
      <Text style={styles.whiteText}>Your motivator, guide, support system but most importantly a friend</Text>
    </SafeAreaView>
  );

}
function AcutieeIntro3({ navigation }) {
  return (

    <SafeAreaView style={styles.basicContainerRed}>
      <Text style={styles.whiteText}>Acutiee works with you to help you ACHIEVE and MAINTAIN your goals</Text>
      <TouchableOpacity style={styles.grayButton} onPress={() => navigation.navigate('Chat')}>
        <Text style={styles.redText}>Get Started!</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );

}
function MeetAcutiee1({ navigation }) {
  return (
    <SafeAreaView style={styles.basicContainerRed}>
      <Image source={require("../assets/avataaars.png")} style={{ width: 300, height: 300, marginTop: 60, marginBottom: 100, }} />
      <ScrollView
        horizontal={true}
        contentContainerStyle={{ width: `${100 * 3}%` }}
        showsHorizontalScrollIndicator={true}
        scrollEventThrottle={200}
        decelerationRate="fast"
        pagingEnabled>
        <View style={styles.basicContainerRed}>
          <Text style={styles.whiteText}>Meet Acutiee...</Text>
        </View>
        <View style={styles.basicContainerRed}>
          <Text style={styles.whiteText}>Your motivator, guide, support system but most importantly a friend</Text>
        </View>
        <View style={styles.basicContainerRed}>
          <Text style={styles.whiteText}>Acutiee works with you to help you ACHIEVE and MAINTAIN your goals</Text>
          <TouchableOpacity style={styles.grayButton} onPress={() => navigation.navigate('Chat')}>
            <Text style={styles.redText}>Get Started!</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>

  );







}
export default MeetAcutiee1;