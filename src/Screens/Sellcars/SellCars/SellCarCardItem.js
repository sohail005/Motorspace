import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppText from '../../../components/AppText';
import AppTouchable from '../../../components/AppTouchable';
import { FontSizes } from '../../../constants/fontsizes';
import { Fonts } from '../../../constants/Fonts';
import { AppColors } from '../../../constants/colors';

const getCardColor = (status) => {
    switch (status) {
        case 'PURCHASE REQUEST': return '#DDF7E9';
        case 'INCOMING OFFER': return '#E9E9FF';
        case 'SALE PENDING':
        case 'FOR SALE': return '#F8F8F8';
        default: return '#FFFFFF';
    }
};

const getStatusColor = (status) => {
    switch (status) {
        case 'PURCHASE REQUEST': return AppColors.quickbuy;
        case 'INCOMING OFFER': return AppColors.link;
        case 'SALE PENDING': return AppColors.quickbuy;
        case 'FOR SALE': return AppColors.buttonOrange;
        default: return AppColors.textPrimary;
    }
};

const SellCarCardItem = ({ item, onPress }) => {
    const {
        title,
        variant,
        numberPlate,
        cap,
        capStrike,
        price,
        status,
    } = item;

    return (
        <AppTouchable onPress={onPress} style={[styles.cardContainer, { backgroundColor: getCardColor(status) }]}>
            <AppText style={[styles.title, { color: getStatusColor(status) }]}>{title}</AppText>
            <AppText style={styles.subtitle}>{variant}</AppText>

            <View style={styles.rowBetween}>
                <View style={styles.badge}>
                    <AppText style={styles.badgeText}>{numberPlate}</AppText>
                </View>

                <View>
                    <View style={styles.row}>
                        <AppText style={styles.capLabel}>CAP: </AppText>
                        <AppText style={styles.capStrike}>£{cap.toLocaleString()}</AppText>
                    </View>
                    <View style={styles.row}>
                        {/* <AppText style={styles.capLabel}></AppText> */}
                        <AppText style={styles.capStrike1}>£{capStrike.toLocaleString()}</AppText>
                    </View>
                </View>


            </View>

            <View style={styles.rowBetween}>
                <AppText style={[styles.statusText]}>
                    Status: <AppText style={[styles.statusText, { fontFamily: Fonts.bold, color: getStatusColor(status) }]}>{status}</AppText>
                </AppText>
                <AppText style={[styles.price, { color: getStatusColor(status) }]}>£{price}</AppText>
            </View>
        </AppTouchable>
    );
};

export default SellCarCardItem;

const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 1,
    },
    title: {
        fontFamily: Fonts.bold,
        fontSize: FontSizes.large,
        color: AppColors.black,
    },
    subtitle: {
        fontFamily: Fonts.regular,
        fontSize: FontSizes.medium,
        color: AppColors.Blue_Subtext,
        marginBottom: 10,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rowBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 4,
    },
    regText: {
        fontFamily: Fonts.bold,
        fontSize: FontSizes.small,
        color: AppColors.black,
    },
    statusText: {
        fontFamily: Fonts.semiBold,
        fontSize: FontSizes.medium,
        color: AppColors.textPrimary
    },
    capLabel: {
        fontFamily: Fonts.regular,
        fontSize: FontSizes.small,
        color: AppColors.gobackButton,
    },
    capStrike: {
        fontFamily: Fonts.regular,
        fontSize: FontSizes.small,
        color: AppColors.gobackButton,
        textDecorationLine: 'line-through',
        // marginLeft: 4,
    },
    capStrike1: {
        fontFamily: Fonts.bold,
        fontSize: FontSizes.smallMedium,
        color: AppColors.textPrimary,
        textDecorationLine: 'line-through',
        textDecorationColor: AppColors.redLabel,
    },
    price: {
        fontFamily: Fonts.bold,
        fontSize: FontSizes.xLarge,
        color: AppColors.textPrimary,
    },
    badge: {
        backgroundColor: AppColors.plateYellow,
        paddingHorizontal: 6,
        borderRadius: 5,
        alignSelf: 'flex-start',
        // marginTop: 12
    },
    badgeText: {
        fontSize: FontSizes.mediumLarge,
        color: AppColors.textPrimary,
        fontFamily: Fonts.UKNumberPlate,
        paddingHorizontal: 4,
        paddingVertical: 8,
    },
});
