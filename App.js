import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './App/screens/WelcomeScreen';
import LoginScreen from './App/screens/LoginScreen';
import CreateAccountScreen from './App/screens/CreateAccountScreen';
import MeetAcutiee from './App/screens/MeetAcutiee';
import HomeScreen from './App/screens/HomeScreen';
import ChatScreen from './App/screens/Chat';
import Settings from './App/screens/Settings';
import EditAvatar from './App/screens/EditAvatar';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" headerMode="false">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Create Account" component={CreateAccountScreen} />
        <Stack.Screen name="Meet Acutiee" component={MeetAcutiee} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Edit Avatar" component={EditAvatar} />
      </Stack.Navigator>
    </NavigationContainer>);
}