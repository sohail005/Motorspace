import React, { useEffect } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { StatusBar, Platform, View } from 'react-native';
import { AppColors } from '../constants/colors';
import { setStatusBarColor } from '../redux/features/user/userSlice';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';
import { navigationRef } from './NavigationService';

const RootNavigator = () => {
  const dispatch = useDispatch();
  const statusBarColor = useSelector((state) => state.user.statusBarColor);
  const isLoggedIn = useSelector((state) => !!state.user.token);

  useEffect(() => {
    dispatch(setStatusBarColor(AppColors.white));
  }, [dispatch]);

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: AppColors.white,
    },
  };

  return (
    <View style={{ flex: 1, backgroundColor: statusBarColor || AppColors.white }}>
      <StatusBar
        translucent={false}
        backgroundColor={Platform.OS === 'android' ? (statusBarColor || AppColors.white) : undefined}
        barStyle={statusBarColor === AppColors.white ? 'dark-content' : 'light-content'}
      />
      <NavigationContainer ref={navigationRef} theme={MyTheme}>
        {!isLoggedIn ? <AuthNavigator /> : <MainNavigator />}
      </NavigationContainer>
    </View>
  );
};

export default RootNavigator;
