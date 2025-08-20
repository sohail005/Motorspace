// src/navigation/MyMotorSpaceStack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyMotorSpace from '../Screens/MyMotorSpace/MyMotorSpace';
import AccountSettings from '../Screens/MyMotorSpace/AccountSettings/AccountSettings';
import EditProfile from '../Screens/MyMotorSpace/EditProfile/EditProfile';
import TermsConditions from '../Screens/MyMotorSpace/TermsConditions/TermsConditions';
import MyMotors from '../Screens/MyMotorSpace/MyMotors/MyMotors';
import ListMotorScreen from '../Screens/Sellcars/ListMotorforSale/ListedMotors.js/ListMotorScreen';
import VehicleDetailsScreen from '../Screens/VehicleDetails/VehicleDetailsScreen';
import SoldMotors from '../Screens/MyMotorSpace/SoldMotors/SoldMotors';

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
      <Stack.Screen
        name="TermsConditions"
        component={TermsConditions}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MyMotors"
        component={MyMotors}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ListMotorScreen"
        component={ListMotorScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="VehicleDetailsScreen"
        component={VehicleDetailsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SoldMotors"
        component={SoldMotors}
        options={{ headerShown: false }}
      />
     

    </Stack.Navigator>
  );
};

export default MyMotorSpaceStack;
