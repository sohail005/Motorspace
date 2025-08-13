import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AppTouchable from './AppTouchable';
import { AppColors } from '../constants/colors';

const AppCircleCheckbox = ({
  checked = false,
  onPress = () => {},
  size = 30,
  borderColor = AppColors.black,
  checkedColor = AppColors.quickbuy,
  uncheckedColor = 'transparent',
  borderWidth = 2,
  iconName = 'check',
  iconColor = AppColors.white,
  iconSize, // if not passed, calculated from size
  paddingWhenChecked = 2,
  paddingWhenUnchecked = 0,
  style,
}) => {
  const calcIconSize = iconSize || size * 0.6;

  return (
    <AppTouchable onPress={onPress} style={[{ borderRadius: size / 2 }, style]}>
      <View
        style={[
          styles.checkboxBase,
          {
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor: checked ? checkedColor : uncheckedColor,
            borderColor: borderColor,
            borderWidth: borderWidth,
            padding: checked ? paddingWhenChecked : paddingWhenUnchecked,
          },
        ]}
      >
        {checked && (
          <Icon
            name={iconName}
            size={calcIconSize}
            color={iconColor}
          />
        )}
      </View>
    </AppTouchable>
  );
};

const styles = StyleSheet.create({
  checkboxBase: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AppCircleCheckbox;
