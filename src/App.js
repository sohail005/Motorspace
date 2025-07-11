/**
 * Entry point of the app
 */
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { StyleSheet, StatusBar, Platform, View } from 'react-native';
import RootNavigator from './navigation/RootNavigator';
import { AppColors } from './constants/colors';
import { SafeAreaView } from 'react-native-safe-area-context'
const App = () => {
  return (
    <Provider store={store}>
      {/* Optional: Safe area container for iOS */}
      <SafeAreaView style={styles.container}>
       

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
    backgroundColor: AppColors.primary, // fallback background
  },
});

export default App;
