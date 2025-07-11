// src/components/AppTouchable.js

import React from 'react';
import { TouchableOpacity, Platform, TouchableNativeFeedback, View, StyleSheet } from 'react-native';

const AppTouchable = ({
  onPress = () => {},
  children,
  style,
  borderless = true,
  disabled = false,
  rippleColor = 'rgba(0,0,0,0.1)',
  activeOpacity = 0.7,
  hitSlop = { top: 8, bottom: 8, left: 8, right: 8 },
  ...rest
}) => {
  if (Platform.OS === 'android') {
    return (
      <TouchableNativeFeedback
        onPress={onPress}
        disabled={disabled}
        background={TouchableNativeFeedback.Ripple(rippleColor, borderless)}
        hitSlop={hitSlop}
        {...rest}
      >
        <View style={style}>{children}</View>
      </TouchableNativeFeedback>
    );
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={activeOpacity}
      hitSlop={hitSlop}
      disabled={disabled}
      style={style}
      {...rest}
    >
      {children}
    </TouchableOpacity>
  );
};

export default AppTouchable;
