// src/navigation/RootNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';
import { StatusBar } from 'react-native';
import { AppColors } from '../constants/colors';

const RootNavigator = () => {
  const statusBarColor = useSelector((state) => state.user.statusBarColor);
  const isLoggedIn = useSelector((state) => !!state.user.token);
  console.log("isLoggedIn:", isLoggedIn);

  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={statusBarColor || AppColors.white} // fallback if null
        barStyle={statusBarColor === AppColors.white ? 'dark-content' : 'light-content'}
      />
      {/* {!isLoggedIn ? <MainNavigator /> : <AuthNavigator />} */}
      <MainNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
