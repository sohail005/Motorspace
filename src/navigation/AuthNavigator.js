// src/navigation/AuthNavigator.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../Screens/AuthScreens/Login/LoginScreen';
import GettingStarted from '../Screens/AuthScreens/GettingStarted/GettingStarted';
import PrivateDetails from '../Screens/AuthScreens/SignUpDetailScreens/PrivateDetails';
import BusinessDetails from '../Screens/AuthScreens/SignUpDetailScreens/BusinessDetails';
import OtpScreen from '../Screens/AuthScreens/OtpScreens/OtpScreen';
import EmailVerifiedScreen from '../Screens/AuthScreens/EmailVerifiedScreens/EmailVerifiedScreen';
import ProfileApproval from '../Screens/AuthScreens/ProfileApproval/ProfileApproval';
import ConfirmYourInfo from '../Screens/AuthScreens/ConfirmYourInfo/ConfirmYourInfo';
import EditInfo from '../Screens/AuthScreens/EditInfo/EditInfo';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="GettingStarted" component={GettingStarted} />
      <Stack.Screen name="PrivateDetails" component={PrivateDetails} />
      <Stack.Screen name="BusinessDetails" component={BusinessDetails} />
      <Stack.Screen name="OtpScreen" component={OtpScreen} />
      <Stack.Screen name="EmailVerifiedScreen" component={EmailVerifiedScreen} />
      <Stack.Screen name="ProfileApproval" component={ProfileApproval} />
      <Stack.Screen name="ConfirmYourInfo" component={ConfirmYourInfo} />
      <Stack.Screen name="EditInfo" component={EditInfo} />
      
      
    </Stack.Navigator>
  );
};

export default AuthNavigator;
