import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AppTouchable from './AppTouchable';
import { AppColors } from '../constants/colors';

const AppCircleCheckbox = ({ checked, onPress, size = 30 }) => {
  return (
    <AppTouchable onPress={onPress} style={{ borderRadius: size / 2 }}>
      <View
        style={[
          styles.checkboxBase,
          {
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor: checked ? AppColors.quickbuy : 'transparent',
            borderColor: AppColors.black,
            padding: checked ? 2 : 0,
          },
        ]}
      >
        {checked && (
          <Icon
            name="check"
            size={size * 0.6}
            color={AppColors.white}
          />
        )}
      </View>
    </AppTouchable>
  );
};

const styles = StyleSheet.create({
  checkboxBase: {
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AppCircleCheckbox;
