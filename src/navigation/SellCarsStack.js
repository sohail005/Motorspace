// src/navigation/SellCarsStack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SellCarsList from '../Screens/Sellcars/SellCars/SellCarsList';
import CompleteSale from '../Screens/Sellcars/CompleteSale/CompleteSale';
import SaleSuccess from '../Screens/Sellcars/SaleSuccess/SaleSuccess';
import ListMotorScreen from '../Screens/Sellcars/ListMotorforSale/ListedMotors.js/ListMotorScreen';
import MotorUpForSale from '../Screens/Sellcars/ListMotorforSale/MotorUpForSale';
import VehicleDetailsScreen from '../Screens/VehicleDetails/VehicleDetailsScreen';
import LetsRegister from '../Screens/RegisterVehicle/LetsRegister';
import RegisterYourFirstMotor from '../Screens/RegisterVehicle/RegisterYourFirstMotor/RegisterYourFirstMotor';
import InputVehicleRegistration from '../Screens/RegisterVehicle/InputVehicleRegistration/InputVehicleRegistration';
import ConfirmVehicleInfo from '../Screens/RegisterVehicle/ConfirmVehicleInfo/ConfirmVehicleInfo';
import AdditionalVehicleInfo from '../Screens/RegisterVehicle/AdditionalVehicleInfo/AdditionalVehicleInfo';
import AnyNotableDamage from '../Screens/RegisterVehicle/AnyNotableDamage/AnyNotableDamage';
import ReportMinorDamages from '../Screens/RegisterVehicle/ReportMinorDamages/ReportMinorDamages';
import DamageReport from '../Screens/RegisterVehicle/DamageReport/DamageReport';
import DamageDiagramScreen from '../Screens/RegisterVehicle/DamageReport/DamageDiagramScreen';
import AdditionalFeatures from '../Screens/RegisterVehicle/AdditionalFeatures/AdditionalFeatures';
import AdditionalCarSpecs from '../Screens/RegisterVehicle/AdditionalCarSpecs/AdditionalCarSpecs';
import MotorRegistered from '../Screens/RegisterVehicle/MotorRegistered/MotorRegistered';
import WelcomeScreen from '../Screens/WelcomeTNC/Welcome/WelcomeScreen';
import TermsScreen from '../Screens/WelcomeTNC/TNC/TermsScreen';
import TermsFullView from '../Screens/WelcomeTNC/TNC/TermsFullView';

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
            <Stack.Screen
                name="ListMotorScreen"
                component={ListMotorScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="MotorUpForSale"
                component={MotorUpForSale}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="VehicleDetailsScreen"
                component={VehicleDetailsScreen}
                options={{ headerShown: false }}
            />

           
        </Stack.Navigator>
    );
};

export default SellCarsStack;
