// src/navigation/RootNavigator.js
import React, { useEffect } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { StatusBar, Platform } from 'react-native';
import { AppColors } from '../constants/colors';
import { setStatusBarColor } from '../redux/features/user/userSlice';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';
import { navigationRef } from './NavigationService';

const RootNavigator = () => {
  const dispatch = useDispatch();
  const statusBarColor = useSelector((state) => state.user.statusBarColor);
  const isLoggedIn = useSelector((state) => !!state.user.token);

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: AppColors.white,
    },
  };

  useEffect(() => {
    dispatch(setStatusBarColor(AppColors.white));
  }, [dispatch]);

  return (
    <NavigationContainer ref={navigationRef} theme={MyTheme}>
      <StatusBar
        translucent={false}
        backgroundColor={Platform.OS === 'android' ? (statusBarColor || AppColors.white) : undefined}
        barStyle={statusBarColor === AppColors.white ? 'dark-content' : 'light-content'}
      />
      {!isLoggedIn ? <AuthNavigator /> : <MainNavigator />}
    </NavigationContainer>
  );
};

export default RootNavigator;
