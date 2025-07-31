import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppText from '../../../components/AppText';
import { AppColors } from '../../../constants/colors';
import { Fonts } from '../../../constants/Fonts';
import { FontSizes } from '../../../constants/fontsizes';

const InfoRow = ({ label, value }) => (
  <View style={styles.row}>
    <AppText style={styles.label}>{label}</AppText>
    <AppText style={styles.value}>{value}</AppText>
  </View>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: AppColors.borderColor,
  },
  label: {
    fontFamily: Fonts.regular,
    color: AppColors.textPrimary,
    fontSize: FontSizes.medium,
  },
  value: {
    fontFamily: Fonts.bold,
    color: AppColors.primary,
    fontSize: FontSizes.medium,
  },
});

export default React.memo(InfoRow);
