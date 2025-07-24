import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppText from './AppText';
import AppBadge from './AppBadge';
import { FontSizes } from '../constants/fontsizes';
import { AppColors } from '../constants/colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import DimensionsUtil from '../constants/Dimensions';
import AppTouchable from './AppTouchable';

const RecentlyListItem = ({ item,onPress  }) => {
  return (
    <AppTouchable onPress={() => onPress(item)} style={styles.card}>
      <View style={styles.headerRow}>
        <AppText numberOfLines={2} style={styles.title}>{item.title}</AppText>
        <AppText style={styles.time}>{item.timeListed}</AppText>
      </View>
      <AppText style={styles.subtitle}>{item.variant}</AppText>
      {item.numberPlate ? (
        <AppBadge text={item.numberPlate} badgeStyle={styles.plateBadge} />
      ) : null}
      <View style={styles.midRow}>
        <View style={styles.dealerRow}>
          <Icon
            name="user-alt"
            size={FontSizes.small}
            color={AppColors.plateText}
            style={styles.icon}
          />
          <AppText numberOfLines={2} style={styles.dealer}>{item.dealer?.name}</AppText>
        </View>
        <AppText style={styles.price}>{item.price}</AppText>
      </View>
    </AppTouchable>
  );
};

export default RecentlyListItem;

const styles = StyleSheet.create({
  card: {
    backgroundColor: AppColors.white,
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
    // elevation: 2,
    // shadowColor: AppColors.textPrimary,
    // shadowOpacity: 0.05,
    // shadowOffset: { width: 0, height: 1 },
    // shadowRadius: 3,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: FontSizes.medium,
    fontWeight: '900',
    color: AppColors.textPrimary,
    width:DimensionsUtil.SCREEN_WIDTH/1.45
  },
  time: {
    fontSize: 12,
    color: AppColors.textMuted,
  },
  subtitle: {
    fontSize: 13,
    color: AppColors.Blue_Subtext,
    marginTop: 2,
    fontWeight: '500',
    width:DimensionsUtil.SCREEN_WIDTH/1.45
  },
  midRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5
  },
  plateBadge: {
    backgroundColor: AppColors.plateYellow, // Yellow
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
    marginRight: 10,
  },
  dealerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dealer: {
    fontSize: FontSizes.small,
    color: AppColors.textPrimary,
    marginLeft: 6,
    fontWeight: '500',
    width:DimensionsUtil.SCREEN_WIDTH/1.55,
  },
  icon: {
    marginTop: 2,
  },
  price: {
    fontSize: FontSizes.medium,
    fontWeight: '900',
    color: '#000',
  },
});
