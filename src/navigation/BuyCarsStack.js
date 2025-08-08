// src/navigation/BuyCarsStack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BuyCarsList from '../Screens/Buycars/BuyCarsList/BuyCarsList';
import AdditionalInfo from '../Screens/Buycars/AdditionalInfo/AdditionalInfo';
import BuyCarsDamageReport from '../Screens/Buycars/BuyCarsDamageReport/BuyCarsDamageReport';
import SaleSuccessBuyer from '../Screens/Buycars/SaleSuccessBuyer/SaleSuccessBuyer';

const Stack = createNativeStackNavigator();

const BuyCarsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BuyCarsList"
        component={BuyCarsList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AdditionalInfo"
        component={AdditionalInfo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BuyCarsDamageReport"
        component={BuyCarsDamageReport}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SaleSuccessBuyer"
        component={SaleSuccessBuyer}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
};

export default BuyCarsStack;
