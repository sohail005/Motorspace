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
import ApprovalPending from '../Screens/ApprovalScreens/ApprovalPending/ApprovalPending';
import RecentlyListed from '../Screens/RecentlyListed/RecentlyListed';
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
      <Stack.Screen name="ApprovalPending" component={ApprovalPending} />
      <Stack.Screen name="RecentlyListed" component={RecentlyListed} />

      {/* Register Vehicle */}
      <Stack.Screen name="LetsRegister" component={LetsRegister} />
      <Stack.Screen name="RegisterYourFirstMotor" component={RegisterYourFirstMotor} />
      <Stack.Screen name="InputVehicleRegistration" component={InputVehicleRegistration} />
      <Stack.Screen name="ConfirmVehicleInfo" component={ConfirmVehicleInfo} />
      <Stack.Screen name="AdditionalVehicleInfo" component={AdditionalVehicleInfo} />
      <Stack.Screen name="AnyNotableDamage" component={AnyNotableDamage} />
      <Stack.Screen name="ReportMinorDamages" component={ReportMinorDamages} />
      <Stack.Screen name="DamageReport" component={DamageReport} />
      <Stack.Screen name="DamageDiagramScreen" component={DamageDiagramScreen} />
      <Stack.Screen name="AdditionalFeatures" component={AdditionalFeatures} />
      <Stack.Screen name="AdditionalCarSpecs" component={AdditionalCarSpecs} />
      <Stack.Screen name="MotorRegistered" component={MotorRegistered} />
      

    </Stack.Navigator>
  );
};

export default AuthNavigator;
