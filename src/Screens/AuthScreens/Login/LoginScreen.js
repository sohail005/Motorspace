import React, { useState } from 'react';
import {
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  ScrollView,
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
import Animated, { ZoomIn } from 'react-native-reanimated';
import { useDispatch } from 'react-redux';
import { setStatusBarColor, setToken, setUser } from '../../../redux/features/user/userSlice';
import { AppColors } from '../../../constants/colors';

const LoginScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
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
      const fakeToken = 'abc123';
      const fakeUser = { name: 'John Doe', email };
      Keyboard.dismiss()
      // Save to Redux
      setTimeout(() => {
        dispatch(setStatusBarColor(AppColors.primary))
        dispatch(setToken(fakeToken));
        dispatch(setUser(fakeUser));
      }, 50);

    }
  };
  const handleJoinNow = () => {
    // navigation.navigate('GettingStarted')
    //navigation.navigate('LetsRegister')
    // navigation.navigate('ReportMinorDamages')
    navigation.navigate('WelcomeScreen')

  }
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 20 : 0}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Animated.View
            entering={ZoomIn.duration(300)}
            style={{ width: '100%' }}
          >
            <AppImage source={IMAGES.logo} style={styles.logo} />
            <AppText style={styles.loginHeading}>Log in.</AppText>

            <AppInput
              label="Email Address"
              placeholder="Enter your email"
              icon={IMAGES.User}
              value={email}
              inputStyle={styles.input}
              onChangeText={(text) => {
                setEmail(text);
                if (emailError) setEmailError('');
              }}
              errorMessage={emailError}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <AppInput
              label="Password"
              icon={IMAGES.Lock}
              placeholder="Enter your password"
              secureTextEntry
              inputStyle={styles.input}
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                if (passwordError) setPasswordError('');
              }}
              errorMessage={passwordError}
            />

            <View style={{ marginTop: 16, width: DimensionsUtil.SCREEN_WIDTH / 2.5 }}>
              <AppTouchable onPress={handleLogin} style={styles.signInButton}>
                <AppText style={styles.signInText}>Sign in</AppText>
              </AppTouchable>
            </View>

            <View style={styles.footer}>
              <AppText style={styles.newText}>New to</AppText>
              <AppText style={styles.brandText}>Motorspace?</AppText>
              <View style={{ width: DimensionsUtil.SCREEN_WIDTH / 2.5 }}>
                <AppTouchable
                  onPress={() => handleJoinNow()}
                  style={styles.joinButton}
                >
                  <AppText style={styles.joinText}>Join Now</AppText>
                </AppTouchable>
              </View>
            </View>
          </Animated.View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
);

};

export default LoginScreen;
