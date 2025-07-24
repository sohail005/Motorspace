import React, { useEffect } from 'react';
import { TextInput } from 'react-native';
import { styles } from './AppVehicleRegistrationInputStyles';
import { AppColors } from '../../constants/colors';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';

const formatRegistration = (text) => {
  const cleaned = text.replace(/\s/g, '').toUpperCase();
  return cleaned.length > 4 ? `${cleaned.slice(0, 4)} ${cleaned.slice(4)}` : cleaned;
};

const AppVehicleRegistrationInput = ({
  value,
  onChangeText,
  placeholder = 'INPUT REG',
  maxLength = 9, // 8 chars + 1 space
  style,
  inputStyle,
  ...rest
}) => {
  const scale = useSharedValue(1);

  const handleChange = (text) => {
    const formatted = formatRegistration(text);
    onChangeText(formatted);

    // Trigger animation on change
    scale.value = withTiming(1.05, { duration: 100, easing: Easing.out(Easing.ease) }, () => {
      scale.value = withTiming(1, { duration: 100 });
    });
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Animated.View style={[styles.plateContainer, animatedStyle, style]}>
      <TextInput
        value={value}
        onChangeText={handleChange}
        placeholder={placeholder}
        placeholderTextColor={AppColors.grayOverlay}
        maxLength={maxLength}
        autoCapitalize="characters"
        cursorColor={AppColors.transparent}
        autoCorrect={false}
        style={[styles.input, { textAlign: 'center' }, inputStyle]}
        {...rest}
      />
    </Animated.View>
  );
};

export default AppVehicleRegistrationInput;
