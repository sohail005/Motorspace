import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppText from '../../../components/AppText';
import AppTouchable from '../../../components/AppTouchable';
import { FontSizes } from '../../../constants/fontsizes';
import { Fonts } from '../../../constants/Fonts';
import { AppColors } from '../../../constants/colors';

const STATUS_COLORS = {
  'PURCHASE REQUEST': AppColors.successGreen,
  'INCOMING OFFER': AppColors.primary,
  'SALE PENDING': AppColors.successGreen,
  'FOR SALE': AppColors.orange,
};

const SellCarCardItem = ({ item, onPress }) => {
  const {
    title,
    subtitle,
    reg,
    cap,
    capStrike,
    price,
    status,
    cardColor,
  } = item;

  return (
    <AppTouchable style={[styles.card, { backgroundColor: cardColor || AppColors.white }]} onPress={onPress}>
      <AppText style={styles.title}>{title}</AppText>
      <AppText style={styles.subtitle}>{subtitle}</AppText>

      <View style={styles.row}>
        <View style={styles.regBox}>
          <AppText style={styles.regText}>{reg}</AppText>
        </View>
        <AppText style={styles.status}>
          Status: <AppText style={{ color: STATUS_COLORS[status] || AppColors.black }}>{status}</AppText>
        </AppText>
      </View>

      <View style={styles.rowBetween}>
        <AppText style={styles.capText}>
          CAP: {capStrike ? <AppText style={styles.capStrike}>£{capStrike}</AppText> : null} £{cap}
        </AppText>
        <AppText style={styles.price}>£{price}</AppText>
      </View>
    </AppTouchable>
  );
};

export default SellCarCardItem;

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  title: {
    fontFamily: Fonts.bold,
    fontSize: FontSizes.large,
    color: AppColors.black,
  },
  subtitle: {
    fontFamily: Fonts.regular,
    fontSize: FontSizes.medium,
    color: AppColors.grey,
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  regBox: {
    backgroundColor: AppColors.yellow,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginRight: 10,
  },
  regText: {
    fontFamily: Fonts.bold,
    fontSize: FontSizes.small,
    color: AppColors.black,
  },
  status: {
    fontFamily: Fonts.medium,
    fontSize: FontSizes.medium,
  },
  capText: {
    fontFamily: Fonts.medium,
    fontSize: FontSizes.small,
    color: AppColors.grey,
  },
  capStrike: {
    textDecorationLine: 'line-through',
    marginRight: 6,
    color: AppColors.grey,
  },
  price: {
    fontFamily: Fonts.bold,
    fontSize: FontSizes.xLarge,
    color: AppColors.black,
  },
});
