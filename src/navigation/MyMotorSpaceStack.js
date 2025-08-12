// src/navigation/MyMotorSpaceStack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyMotorSpace from '../Screens/MyMotorSpace/MyMotorSpace';
import AccountSettings from '../Screens/MyMotorSpace/AccountSettings/AccountSettings';
import EditProfile from '../Screens/MyMotorSpace/EditProfile/EditProfile';

const Stack = createNativeStackNavigator();

const MyMotorSpaceStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyMotorSpace"
        component={MyMotorSpace}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AccountSettings"
        component={AccountSettings}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{ headerShown: false }}
      />
      
    </Stack.Navigator>
  );
};

export default MyMotorSpaceStack;
