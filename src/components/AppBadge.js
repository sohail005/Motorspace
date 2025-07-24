import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { AppColors } from '../constants/colors';
import { FontSizes } from '../constants/fontsizes';

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
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginTop: 6,
  },
  badgeText: {
    fontWeight: '900',
    fontSize: FontSizes.medium,
    color: '#000',
  },
});
