import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppTouchable from './AppTouchable';
import AppText from './AppText'; // Custom wrapper over Text with default styles
import { AppColors } from '../constants/colors';
import { Fonts } from '../constants/Fonts';
import { FontSizes } from '../constants/fontsizes';
import AppImage from './AppImage';
import { IMAGES } from '../assets/Images/ImagePath';

const CarListItem = ({
    title,
    subtitle,
    price,
    location,
    badge,
    time,
    seller,
    showLocation = false,
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <View style={styles.titleContainer}>
                    <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                    <AppText style={styles.time}>{time}</AppText>
                </View>


                <AppText style={styles.subtitle}>{subtitle}</AppText>

                {!!badge && (
                    <View style={styles.badge}>
                        <AppText style={styles.badgeText}>{badge}</AppText>
                    </View>
                )}


                <View style={styles.PriceConatiner}>
                    <View style={styles.meta}>
                        <AppImage
                            source={IMAGES.private}
                            fallbackSource={IMAGES.private}
                            placeholder={true}
                            resizeMode="contain"
                            style={{
                                width: 18,
                                height: 18,
                            }}
                        />
                        <AppText style={styles.seller}>{seller}</AppText>
                    </View>
                    <AppText style={styles.price}>{price}</AppText>
                </View>

                {showLocation && (
                    <View style={styles.locationRow}>
                        <Icon name="map-marker" size={14} color={AppColors.primary} />
                        <AppText style={styles.locationText}>{location}</AppText>
                    </View>
                )}
            </View>

            <AppTouchable style={styles.right}>
                <View style={styles.quickBuyContainer}>
                    <AppText style={styles.quickBuyText}>QUICK</AppText>
                    <AppText style={[styles.quickBuyText, styles.quickBuyTextBuy]}>BUY</AppText>
                </View>
            </AppTouchable>

        </View>
    );
};

export default CarListItem;
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: AppColors.white,
        borderRadius: 10,
        margin: 6,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    titleContainer: {
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
    },
    PriceConatiner: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    left: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    title: {
        fontFamily: Fonts.bold,
        fontSize: FontSizes.large,
        color: AppColors.darkText,
        width: '80%'
    },
    subtitle: {
        color: AppColors.Blue_Subtext,
        fontSize: FontSizes.smallMedium,
    },
    badge: {
        backgroundColor: AppColors.plateYellow,
        paddingHorizontal: 6,
        borderRadius: 5,
        alignSelf: 'flex-start',
        marginVertical: 10
    },
    badgeText: {
        fontSize: FontSizes.mediumLarge,
        color: AppColors.textPrimary,
        fontFamily: Fonts.UKNumberPlate,
        paddingHorizontal: 4,
        paddingVertical: 8,
    },
    meta: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
    seller: {
        marginLeft: 6,
        fontSize: FontSizes.smallMedium,
        color: AppColors.textPrimary,
    },
    price: {
        fontFamily: Fonts.bold,
        fontSize: FontSizes.xLarge,
        color: AppColors.textPrimary,
        marginTop: 6,
    },
    right: {
        backgroundColor: AppColors.quickbuy,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent: 'center',
        flex: 1
    },
    time: {
        fontSize: 12,
        color: AppColors.borderColor,
    },
    quickBuy: {
        backgroundColor: AppColors.quickbuy,
        borderRadius: 10,
        paddingHorizontal: 5,
        justifyContent: 'center'
    },

    locationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
    locationText: {
        marginLeft: 4,
        fontSize: 12,
        color: AppColors.primary,
    },
    quickBuyContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        lineHeight: undefined, // ensure spacing is not inflated
        paddingVertical: 2,    // optional if outer spacing needs reducing
        paddingHorizontal: 8
    },

    quickBuyText: {
        color: AppColors.white,
        fontFamily: Fonts.bold,
        fontSize: FontSizes.medium,
        lineHeight: 24, // tightly packed lines
    },

    quickBuyTextBuy: {
        fontSize: FontSizes.xLarge, // larger font for "BUY"
        lineHeight: FontSizes.xLarge + 2, // adjust line height proportionally
        fontStyle: 'italic',
        fontWeight: '900'
    },

});
