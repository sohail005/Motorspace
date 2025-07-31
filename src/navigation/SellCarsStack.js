// src/navigation/SellCarsStack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BuyCarsList from '../Screens/Buycars/BuyCarsList/BuyCarsList';
import AdditionalInfo from '../Screens/Buycars/AdditionalInfo/AdditionalInfo';
import BuyCarsDamageReport from '../Screens/Buycars/BuyCarsDamageReport/BuyCarsDamageReport';
import SellCarsList from '../Screens/Sellcars/SellCars/SellCarsList';

const Stack = createNativeStackNavigator();

const SellCarsStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="SellCarsList"
                component={SellCarsList}
                options={{ headerShown: false }}
            />


        </Stack.Navigator>
    );
};

export default SellCarsStack;
