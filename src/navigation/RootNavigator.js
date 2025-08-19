import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { StatusBar, Platform, View } from 'react-native';
import { AppColors } from '../constants/colors';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';
import { navigationRef } from './NavigationService';
import { SafeAreaView } from 'react-native-safe-area-context';

const RootNavigator = () => {
  const statusBarColor = useSelector((state) => state.user.statusBarColor);
  const isLoggedIn = useSelector((state) => !!state.user.token);

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: statusBarColor || AppColors.white,
    },
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: statusBarColor || AppColors.white }}>
      {/* StatusBar */}
      <StatusBar
        translucent={false}
        backgroundColor={
          Platform.OS === 'android' ? statusBarColor || AppColors.white : undefined
        }
        barStyle={statusBarColor === AppColors.white ? 'dark-content' : 'light-content'}
      />

      {/* Navigation */}
      <NavigationContainer
        ref={navigationRef} theme={MyTheme}>
        {isLoggedIn ? <MainNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default RootNavigator;
