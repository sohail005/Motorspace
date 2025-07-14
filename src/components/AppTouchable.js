import React, { useState } from 'react';
import {
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
  View,
  StyleSheet,
  Animated,
} from 'react-native';

const AppTouchable = ({
  onPress = () => { },
  children,
  style,
  borderless = true,
  disabled = false,
  rippleColor = 'rgba(0,0,0,0.1)',
  activeOpacity = 0.7,
  hitSlop = { top: 8, bottom: 8, left: 8, right: 8 },
  withFeedback = true,
  ...rest
}) => {
  const scaleAnim = useState(new Animated.Value(1))[0];

  const handlePressIn = () => {
    if (withFeedback) {
      Animated.spring(scaleAnim, {
        toValue: 0.97,
        useNativeDriver: true,
        speed: 100,
        bounciness: 100,
      }).start();
    }
  };

  const handlePressOut = () => {
    if (withFeedback) {
      Animated.spring(scaleAnim, {
        toValue: 1,
        useNativeDriver: true,
        speed: 50,
        bounciness: 20,
      }).start();
    }
  };

  const AnimatedView = (
    <Animated.View style={[{ transform: [{ scale: scaleAnim }] }, style]}>
      {children}
    </Animated.View>
  );

  if (Platform.OS === 'android') {
    return (
      <TouchableNativeFeedback
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        disabled={disabled}
        background={TouchableNativeFeedback.Ripple(rippleColor, borderless)}
        hitSlop={hitSlop}
        {...rest}
      >
        <View>{AnimatedView}</View>
      </TouchableNativeFeedback>
    );
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      activeOpacity={activeOpacity}
      disabled={disabled}
      hitSlop={hitSlop}
      {...rest}
    >
      {AnimatedView}
    </TouchableOpacity>
  );
};

export default AppTouchable;
