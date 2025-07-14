import React, { useState } from 'react';
import {
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import AppImage from '../../../components/AppImage';
import AppText from '../../../components/AppText';
import AppInput from '../../../components/AppInput';
import AppTouchable from '../../../components/AppTouchable';
import { IMAGES } from '../../../assets/Images/ImagePath';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './LoginScreenStyles';
import DimensionsUtil from '../../../constants/Dimensions';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = () => {
    let valid = true;

    // Reset previous errors
    setEmailError('');
    setPasswordError('');

    if (!email.trim()) {
      setEmailError('Email is required');
      valid = false;
    } else if (!validateEmail(email)) {
      setEmailError('Enter a valid email');
      valid = false;
    }

    if (!password.trim()) {
      setPasswordError('Password is required');
      valid = false;
    }

    if (valid) {
      // Proceed to next screen or API login
      navigation.navigate('GettingStarted');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 20 : 0}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <AppImage source={IMAGES.logo} style={styles.logo} />
            <AppText style={styles.loginHeading}>Log in.</AppText>

            <AppInput
              label="Email"
              placeholder="Enter your email"
              icon={IMAGES.User}
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                if (emailError) setEmailError('');
              }}
              errorMessage={emailError}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <View style={{ marginTop: 10 }}>
              <AppInput
                label="Password"
                icon={IMAGES.Lock}
                placeholder="Enter your password"
                secureTextEntry
                value={password}
                onChangeText={(text) => {
                  setPassword(text);
                  if (passwordError) setPasswordError('');
                }}
                errorMessage={passwordError}
              />
            </View>

            <View style={{ marginTop: 16, width: DimensionsUtil.SCREEN_WIDTH / 2.5 }}>
              <AppTouchable onPress={handleLogin} style={styles.signInButton}>
                <AppText style={styles.signInText}>Sign in</AppText>
              </AppTouchable>
            </View>

            <View style={styles.footer}>
              <AppText style={styles.newText}>New to</AppText>
              <AppText style={styles.brandText}>Motorspace?</AppText>
              <View style={{ width: DimensionsUtil.SCREEN_WIDTH / 2.5 }}>
                <AppTouchable onPress={() => console.log('Join Now')} style={styles.joinButton}>
                  <AppText style={styles.joinText}>Join Now</AppText>
                </AppTouchable>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;
