import React, { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './redux/store';
import { StyleSheet } from 'react-native';
import RootNavigator from './navigation/RootNavigator';
import { AppColors } from './constants/colors';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import storageItem from './utils/storageItem';
import { setToken } from './redux/features/user/userSlice';
import { PaperProvider } from 'react-native-paper';

const AppWrapper = () => {
  const statusBarColor = useSelector((state) => state.user.statusBarColor);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadToken = async () => {
      const token = await storageItem.getItem('token');
      console.log("token::::::::::::::",token);
      if (token) dispatch(setToken(token));
    };
    loadToken();
  }, []);
  return (
    <SafeAreaView
      edges={['top', 'left', 'right']}
      style={[styles.container, { backgroundColor: statusBarColor || AppColors.white }]}
    >
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
