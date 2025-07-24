import React, { useEffect } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';
import { StatusBar, Platform } from 'react-native';
import { AppColors } from '../constants/colors';
import { setStatusBarColor } from '../redux/features/user/userSlice';

const RootNavigator = () => {
  const statusBarColor = useSelector((state) => state.user.statusBarColor);
  const isLoggedIn = useSelector((state) => !!state.user.token);

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: AppColors.white,
    },
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setStatusBarColor(AppColors.white));
  }, []);
  return (
    <NavigationContainer theme={MyTheme}>
      <StatusBar
        translucent={false}
        backgroundColor={statusBarColor || AppColors.white}
        barStyle={statusBarColor === AppColors.white ? 'dark-content' : 'light-content'}
      />
      {isLoggedIn ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default RootNavigator;
