// src/navigation/SellCarsStack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SellCarsList from '../Screens/Sellcars/SellCars/SellCarsList';
import CompleteSale from '../Screens/Sellcars/CompleteSale/CompleteSale';
import SaleSuccess from '../Screens/Sellcars/SaleSuccess/SaleSuccess';

const Stack = createNativeStackNavigator();

const SellCarsStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="SellCarsList"
                component={SellCarsList}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="CompleteSale"
                component={CompleteSale}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SaleSuccess"
                component={SaleSuccess}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    );
};

export default SellCarsStack;
