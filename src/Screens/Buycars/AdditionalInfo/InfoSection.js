import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppText from '../../../components/AppText';
import { AppColors } from '../../../constants/colors';
import { Fonts } from '../../../constants/Fonts';
import { FontSizes } from '../../../constants/fontsizes';

const InfoSection = ({ title, children }) => (
  <View style={styles.section}>
    <AppText style={styles.sectionTitle}>{title}</AppText>
    {children}
  </View>
);

const styles = StyleSheet.create({
  section: {
    paddingHorizontal:20,
    paddingVertical:10,
    backgroundColor:AppColors.white,
    borderRadius:10
  },
  sectionTitle: {
    fontFamily: Fonts.semiBold,
    fontSize: FontSizes.large,
    color: AppColors.Blue_Subtext,
    marginBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: AppColors.Blue_Subtext,
    // paddingBottom: 5,
  },
});

export default React.memo(InfoSection);
