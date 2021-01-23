import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './App/screens/WelcomeScreen';
import LoginScreen from './App/screens/LoginScreen';
import CreateAccountScreen from './App/screens/CreateAccountScreen';
import MeetAcutiee from './App/screens/MeetAcutiee';

const Stack = createStackNavigator();


export default function App() {
  return(
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Welcome" headerMode="false">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Create Account" component={CreateAccountScreen} />
        <Stack.Screen name="Meet Acutiee" component={MeetAcutiee} />
    </Stack.Navigator>
  </NavigationContainer>);
}