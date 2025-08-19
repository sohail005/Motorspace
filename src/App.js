// App.js
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { PaperProvider } from 'react-native-paper';
import { store } from './redux/store';
import { setToken } from './redux/features/user/userSlice';
import RootNavigator from './navigation/RootNavigator';

const AppWrapper = () => {
  const dispatch = useDispatch();
  const statusBarColor = useSelector((state) => state.user.statusBarColor);

  useEffect(() => {
    const loadToken = async () => {
      const token = await storageItem.getItem('token');
      console.log("token::::::::::::::", token, statusBarColor);
      if (token) dispatch(setToken(token));
    };
    loadToken();
  }, [dispatch]);

  return (
    <PaperProvider>
      <RootNavigator />
    </PaperProvider>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <AppWrapper />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
