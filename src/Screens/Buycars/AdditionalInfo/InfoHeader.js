import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppText from '../../../components/AppText';
import { AppColors } from '../../../constants/colors';
import { Fonts } from '../../../constants/Fonts';
import { FontSizes } from '../../../constants/fontsizes';

const InfoHeader = ({ title, subtitle, specLine }) => {
  return (
    <View style={styles.conatiner}>
      <AppText style={styles.header}>{title}</AppText>
      <AppText style={styles.subHeader}>{subtitle}</AppText>
      <AppText style={styles.specLine}>{specLine}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: AppColors.white,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
    borderRadius: 10
  },
  header: {
    fontSize: FontSizes.ultra,
    fontFamily: Fonts.bold,
    color: AppColors.primary,
  },
  subHeader: {
    fontSize: FontSizes.xLarge,
    fontFamily: Fonts.semiBold,
    color: AppColors.primaryText,
  },
  specLine: {
    fontSize: 14,
    color: AppColors.Blue_Subtext,
    fontFamily: Fonts.regular,
    // marginTop: 2,
  },
});

export default React.memo(InfoHeader);
