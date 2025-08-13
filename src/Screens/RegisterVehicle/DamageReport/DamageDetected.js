import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { AppColors } from '../../../constants/colors';
import Icon from 'react-native-vector-icons/Ionicons'; // or any vector icon library
import AppText from '../../../components/AppText';
import { FontSizes } from '../../../constants/fontsizes';
import { Fonts } from '../../../constants/Fonts';
import DimensionsUtil from '../../../constants/Dimensions';

const DamageDetected = ({ damageLocated }) => {
  return (
    <View style={[styles.badge, damageLocated && styles.badgeActive]}>
      <View style={styles.iconContainer}>
        <Icon
          name="close-circle" // cross icon
          size={32}
          color={AppColors.white}
        />
      </View>
      <AppText style={styles.text}>
        {damageLocated ? 'Damage Located!' : 'No Damage Located'}
      </AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: AppColors.grayOverlay, // default inactive color
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 100,
    alignSelf: 'center',
    marginVertical: 10,
    width:DimensionsUtil.SCREEN_WIDTH/2
  },
  badgeActive: {
    backgroundColor: AppColors.buttonOrange, // active orange color
  },
  iconContainer: {
    marginRight: 8,
  },
  text: {
    color: AppColors.white,
    fontFamily:Fonts.medium,
    fontSize: FontSizes.medium,
  },
});

export default DamageDetected;
