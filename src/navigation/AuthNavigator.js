// src/navigation/AuthNavigator.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../Screens/AuthScreens/Login/LoginScreen';
import GettingStarted from '../Screens/AuthScreens/GettingStarted/GettingStarted';
import PrivateDetails from '../Screens/AuthScreens/SignUpDetailScreens/PrivateDetails';
import BusinessDetails from '../Screens/AuthScreens/SignUpDetailScreens/BusinessDetails';
import OtpScreen from '../Screens/AuthScreens/OtpScreens/OtpScreen';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="GettingStarted" component={GettingStarted} />
      <Stack.Screen name="PrivateDetails" component={PrivateDetails} />
      <Stack.Screen name="BusinessDetails" component={BusinessDetails} />
      <Stack.Screen name="OtpScreen" component={OtpScreen} />
      
    </Stack.Navigator>
  );
};

export default AuthNavigator;
