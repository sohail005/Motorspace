import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BuyCarsList from '../Screens/Buycars/BuyCarsList/BuyCarsList';
import AdditionalInfo from '../Screens/Buycars/AdditionalInfo/AdditionalInfo';
import BuyCarsDamageReport from '../Screens/Buycars/BuyCarsDamageReport/BuyCarsDamageReport';
import SaleSuccessBuyer from '../Screens/Buycars/SaleSuccessBuyer/SaleSuccessBuyer';

const Stack = createNativeStackNavigator();

const BuyCarsStack = () => (
  <Stack.Navigator initialRouteName="BuyCarsList" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="BuyCarsList" component={BuyCarsList} />
    <Stack.Screen name="AdditionalInfo" component={AdditionalInfo} />
    <Stack.Screen name="BuyCarsDamageReport" component={BuyCarsDamageReport} />
    <Stack.Screen name="SaleSuccessBuyer" component={SaleSuccessBuyer} />
  </Stack.Navigator>
);

export default BuyCarsStack;
