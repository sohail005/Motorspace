// components/AppInput.js
import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { AppColors } from '../constants/colors';
import { FontSizes } from '../constants/fontsizes';
import { Fonts } from '../constants/Fonts';

const AppInput = ({
  label,
  required = false,
  placeholder = '',
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
  containerStyle,
  labelStyle,
  inputStyle,
  errorMessage,
  touched,
  ...rest
}) => {
  const showError = Boolean(errorMessage && (touched || touched === undefined));

  return (
    <View style={[styles.container, containerStyle]}>
      {label && (
        <Text style={[styles.label, labelStyle]}>
          {label}
          {required && <Text style={styles.required}> *</Text>}
        </Text>
      )}

      <TextInput
        style={[
          styles.input,
          inputStyle,
          showError && styles.errorBorder
        ]}
        allowFontScaling={false}
        placeholder={placeholder}
        placeholderTextColor={AppColors.grayBackground}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        {...rest}
      />

      {showError && <Text style={styles.errorText}>{errorMessage}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  label: {
    fontSize: FontSizes.medium,
    fontFamily: Fonts.medium,
    color: AppColors.black,
    marginBottom: 4,
  },
  required: {
    color: AppColors.red,
  },
  input: {
    borderWidth: 1,
    minHeight: 50,
    borderColor: AppColors.lightGary,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: FontSizes.medium,
    fontFamily: Fonts.regular,
    color: AppColors.black,
    backgroundColor: AppColors.white,
  },
  errorBorder: {
    borderColor: AppColors.red,
  },
  errorText: {
    color: AppColors.redLabel,
    fontSize: FontSizes.smallMedium,
    marginTop: 4,
    fontFamily: Fonts.regular,
  },
});

export default AppInput;
