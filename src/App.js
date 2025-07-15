import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { store } from './redux/store';
import { StyleSheet } from 'react-native';
import RootNavigator from './navigation/RootNavigator';
import { AppColors } from './constants/colors';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const AppWrapper = () => {
  const statusBarColor = useSelector((state) => state.user.statusBarColor);
  return (
    <SafeAreaView
      edges={['top', 'left', 'right']}
      style={[styles.container, { backgroundColor: statusBarColor || AppColors.white }]}
    >
      <RootNavigator />
    </SafeAreaView>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <AppWrapper />
      </SafeAreaProvider>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
