// src/navigation/AuthNavigator.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../Screens/AuthScreens/Login/LoginScreen';
import GettingStarted from '../Screens/AuthScreens/GettingStarted/GettingStarted';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="GettingStarted" component={GettingStarted} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
