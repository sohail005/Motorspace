// src/navigation/RootNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

const RootNavigator = () => {
  const isLoggedIn = useSelector((state) => !!state.user.token);
console.log("isLoggedIn:",isLoggedIn);

  return (
    <NavigationContainer>
      {/* {!isLoggedIn ? <MainNavigator /> : <AuthNavigator />} */}
      <MainNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
