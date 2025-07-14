import React, { useRef, useState, forwardRef, useImperativeHandle, useEffect } from 'react';
import { View, TextInput, StyleSheet, Keyboard } from 'react-native';
import { AppColors } from '../constants/colors';
import { FontSizes } from '../constants/fontsizes';
import DimensionsUtil from '../constants/Dimensions';

const OtpInput = forwardRef(({ length = 6, onComplete }, ref) => {
    const [otp, setOtp] = useState(Array(length).fill(''));
    const inputs = useRef([]);
useEffect(() => {
  const timeout = setTimeout(() => {
    if (inputs.current[0]) {
      inputs.current[0].focus();
      Keyboard.isVisible(); // optional – on Android, Keyboard usually opens with focus
    }
  }, 300); // Delay ensures input is mounted and screen is ready

  return () => clearTimeout(timeout);
}, []);
    // Expose the clear method to parent via ref
    useImperativeHandle(ref, () => ({
        clear: () => {
            const clearedOtp = Array(length).fill('');
            setOtp(clearedOtp);
            inputs.current[0]?.focus();
        }
    }));

    const handleChange = (text, index) => {
        const newOtp = [...otp];

        if (text === '') {
            newOtp[index] = '';
        } else if (/^\d$/.test(text)) {
            newOtp[index] = text;
            if (index < length - 1) {
                inputs.current[index + 1]?.focus();
            } else {
                inputs.current[index]?.blur();
            }
        }

        setOtp(newOtp);
        onComplete?.(newOtp.join(''));
    };

    const handleKeyPress = (e, index) => {
        if (e.nativeEvent.key === 'Backspace' && otp[index] === '') {
            if (index > 0) {
                inputs.current[index - 1]?.focus();
                const newOtp = [...otp];
                newOtp[index - 1] = '';
                setOtp(newOtp);
            }
        }
    };

    return (
        <View style={styles.container}>
            {otp.map((value, index) => (
                <TextInput
                    allowFontScaling={false}
                    key={index}
                    ref={(ref) => (inputs.current[index] = ref)}
                    value={value}
                    keyboardType="numeric"
                    maxLength={1}
                    onChangeText={(text) => handleChange(text, index)}
                    onKeyPress={(e) => handleKeyPress(e, index)}
                    style={styles.input}
                    cursorColor={AppColors.primary}
                />
            ))}
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 12,
        justifyContent: 'center',
    },
    input: {
        width: (DimensionsUtil.SCREEN_WIDTH / 1.4) / 6,
        height: (DimensionsUtil.SCREEN_WIDTH / 1.4) / 5,
        borderWidth: 1,
        borderColor: AppColors.borderColor,
        borderRadius: 12,
        textAlign: 'center',
        fontWeight: '900',
        fontSize: FontSizes.xxxLarge,
    },
});

export default OtpInput;
