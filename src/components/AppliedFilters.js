import React, { memo } from 'react';
import { View } from 'react-native';
import FillterIcon from 'react-native-vector-icons/Octicons';
import { styles } from '../Screens/Buycars/BuyCarsList/BuyCarsListStyles';
import AppText from './AppText';
import { AppColors } from '../constants/colors';
import AppTouchable from './AppTouchable';

const AppliedFilters = ({ count, onClear }) => {
    if (count === 0) return null;
    return (
        <View style={styles.showAppliedFillterContainer}>
            <AppTouchable onPress={onClear} style={styles.closeIconButton}>
                <FillterIcon name="x" size={26} color={AppColors.white} />
            </AppTouchable>
            <View style={styles.filterCountContainer}>
                <AppText style={styles.fillterCountText}>{count} Filters Active</AppText>
            </View>
        </View>
    );
};

export default memo(AppliedFilters);
