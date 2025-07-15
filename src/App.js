import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { store } from './redux/store';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import RootNavigator from './navigation/RootNavigator';
import { AppColors } from './constants/colors';
// import { SafeAreaView } from 'react-native-safe-area-context';

const AppWrapper = () => {
  const statusBarColor = useSelector((state) => state.user.statusBarColor);
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: statusBarColor || AppColors.white }]}>
      <RootNavigator />
    </SafeAreaView>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <AppWrapper />
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
