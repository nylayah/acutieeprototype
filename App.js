import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './App/screens/WelcomeScreen';
import MeetAcutiee from './App/screens/MeetAcutiee';
import HomeScreen from './App/screens/HomeScreen';
import ChatScreen from './App/screens/Chat';
import Settings from './App/screens/Settings';
import EditAvatar from './App/screens/EditAvatar';
import CreateAccountForm from './App/Components/CreateAccountForm';
import LoginScreenForm from './App/Components/LoginScreenForm';
import { API_URL } from "@env"



const Stack = createStackNavigator();


export default function App() {
  console.log(API_URL)
  return (

    < NavigationContainer >
      <Stack.Navigator initialRouteName="Meet Acutiee" headerMode="false">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login Form" component={LoginScreenForm} />
        <Stack.Screen name="Create Account Form" component={CreateAccountForm} />
        <Stack.Screen name="Meet Acutiee" component={MeetAcutiee} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Edit Avatar" component={EditAvatar} />
      </Stack.Navigator>
    </NavigationContainer >);



}
