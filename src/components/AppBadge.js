import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { AppColors } from '../constants/colors';
import { FontSizes } from '../constants/fontsizes';
import { Fonts } from '../constants/Fonts';

const AppBadge = ({ text }) => {
  return (
    <View style={styles.badge}>
      <Text style={styles.badgeText}>{text}</Text>
    </View>
  );
};

export default AppBadge;

const styles = StyleSheet.create({
  badge: {
    backgroundColor: AppColors.plateYellow,
    borderRadius: 4,
    marginTop: 6,
  },
  badgeText: {
    fontSize: FontSizes.xLarge,
    color: AppColors.textPrimary,
    fontFamily: Fonts.UKNumberPlate,
    paddingHorizontal: 16,
    paddingVertical: 10
  },
});
