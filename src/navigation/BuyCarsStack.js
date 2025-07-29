// src/navigation/BuyCarsStack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BuyCarsList from '../Screens/Buycars/BuyCarsList/BuyCarsList';

const Stack = createNativeStackNavigator();

const BuyCarsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BuyCarsList"
        component={BuyCarsList}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default BuyCarsStack;
