import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { store } from './redux/store';
import { StyleSheet } from 'react-native';
import RootNavigator from './navigation/RootNavigator';
import { AppColors } from './constants/colors';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import storageItem from './utils/storageItem';
import { setToken } from './redux/features/user/userSlice';
import { PaperProvider } from 'react-native-paper';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const AppWrapper = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadToken = async () => {
      const token = await storageItem.getItem('token');
      console.log("token::::::::::::::", token);
      if (token) dispatch(setToken(token));
    };
    loadToken();
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <PaperProvider>
        <RootNavigator />
      </PaperProvider>
    </SafeAreaView>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <AppWrapper />
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.white,
  },
});

export default App;
