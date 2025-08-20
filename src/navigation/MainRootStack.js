// src/navigation/MainRootStack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainNavigator from './MainNavigator'; // your bottom tabs
import VehicleDetailsScreen from '../Screens/VehicleDetails/VehicleDetailsScreen';
import CompleteSale from '../Screens/Sellcars/CompleteSale/CompleteSale';
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
import MyMotors from '../Screens/MyMotorSpace/MyMotors/MyMotors';
// Add other global screens here

const RootStack = createNativeStackNavigator();

const MainRootStack = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      {/* Bottom Tabs */}
      <RootStack.Screen name="MainTabs" component={MainNavigator} />

      {/* Register Vehicle */}
      <RootStack.Screen name="LetsRegister" component={LetsRegister} />
      <RootStack.Screen name="RegisterYourFirstMotor" component={RegisterYourFirstMotor} />
      <RootStack.Screen name="InputVehicleRegistration" component={InputVehicleRegistration} />
      <RootStack.Screen name="ConfirmVehicleInfo" component={ConfirmVehicleInfo} />
      <RootStack.Screen name="AdditionalVehicleInfo" component={AdditionalVehicleInfo} />
      <RootStack.Screen name="AnyNotableDamage" component={AnyNotableDamage} />
      <RootStack.Screen name="ReportMinorDamages" component={ReportMinorDamages} />
      <RootStack.Screen name="DamageReport" component={DamageReport} />
      <RootStack.Screen name="DamageDiagramScreen" component={DamageDiagramScreen} />
      <RootStack.Screen name="AdditionalFeatures" component={AdditionalFeatures} />
      <RootStack.Screen name="AdditionalCarSpecs" component={AdditionalCarSpecs} />
      <RootStack.Screen name="MotorRegistered" component={MotorRegistered} />
      <RootStack.Screen name="MyMotors" component={MyMotors} />

      {/* Welcome and Terms and Conditions */}
      <RootStack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <RootStack.Screen name="TermsScreen" component={TermsScreen} />
      <RootStack.Screen name="TermsFullView" component={TermsFullView} />
      {/* Add more screens here */}
    </RootStack.Navigator>
  );
};

export default MainRootStack;
