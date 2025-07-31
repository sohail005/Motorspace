import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppText from '../../../components/AppText';
import AppTouchable from '../../../components/AppTouchable';
import { AppColors } from '../../../constants/colors';
import { Fonts } from '../../../constants/Fonts';
import { FontSizes } from '../../../constants/fontsizes';
import DimensionsUtil from '../../../constants/Dimensions';
import FillterIcon from 'react-native-vector-icons/Octicons';

const WarningContainer = ({
  iconName = 'alert',
  iconSize = 38,
  title = 'Something not right?',
  messages = [],
  buttonText = 'Call Now',
  onPress,
}) => {
  return (
    <View style={styles.warningContainer}>
      <View style={styles.warningIcon}>
        <FillterIcon name={iconName} size={iconSize} color={AppColors.textPrimary} />
      </View>
      <AppText style={styles.warningHeading}>{title}</AppText>
      {messages.map((msg, idx) => (
        <AppText key={idx} style={styles.warningBodyText}>{msg}</AppText>
      ))}
      <AppTouchable onPress={onPress} style={styles.callButton}>
        <AppText style={styles.callButtonText}>{buttonText}</AppText>
      </AppTouchable>
    </View>
  );
};

export default WarningContainer;

const styles = StyleSheet.create({
  warningContainer: {
    backgroundColor: AppColors.white,
    borderRadius: 10,
    padding: 20,
    marginTop: 10,
    alignItems: 'center',
  },
  warningIcon: {
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  warningHeading: {
    fontSize: FontSizes.xxLarge,
    fontFamily: Fonts.bold,
    color: AppColors.black,
    textAlign: 'center',
    marginBottom: 15,
  },
  warningBodyText: {
    fontSize: FontSizes.medium,
    fontFamily: Fonts.regular,
    color: AppColors.textPrimary,
    textAlign: 'center',
    marginBottom: 10,
  },
  callButton: {
    backgroundColor: AppColors.primary,
    borderRadius: 10,
    paddingVertical: 15,
    marginVertical: 20,
    width: DimensionsUtil.SCREEN_WIDTH / 2.8,
  },
  callButtonText: {
    color: AppColors.white,
    fontSize: FontSizes.medium,
    fontFamily: Fonts.semiBold,
    textAlign: 'center',
  },
});
