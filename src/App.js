/**
 * Entry point of the app
 */
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { StyleSheet, SafeAreaView, StatusBar, Platform } from 'react-native';
import RootNavigator from './navigation/RootNavigator';

const App = () => {
  return (
    <Provider store={store}>
      {/* Optional: Safe area container for iOS */}
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
          backgroundColor="#1E3A8A"
        />

        {/* App Version Checker */}
        {/* <AppUpdateChecker /> */}

        {/* Navigation Stack */}
        <RootNavigator />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E3A8A', // fallback background
  },
});

export default App;
