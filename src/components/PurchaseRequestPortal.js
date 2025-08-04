// components/PurchaseRequestPortal.js
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, } from 'react-native';
import { Portal, Modal, Text, Button, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import AppText from './AppText'; // assumes this exists
import { AppColors } from '../constants/colors';
import AppTouchable from './AppTouchable';
import { FontSizes } from '../constants/fontsizes';
import DimensionsUtil from '../constants/Dimensions';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
    Easing,
} from 'react-native-reanimated';
import { Fonts } from '../constants/Fonts';
import SendOfferPortal from '../Screens/Buycars/BuyCarsList/SendOfferPortal';
import ConfirmPurchasePortal from '../Screens/Buycars/BuyCarsList/ConfirmPurchasePortal';
import { useNavigation } from '@react-navigation/native';

const PurchaseRequestPortal = ({ visible, onDismiss, car, openedFromHome, offerSent, ConfirmPurchase }) => {
    const opacity = useSharedValue(0);
    const scale = useSharedValue(0.9);
    const [offerVisible, setOfferVisible] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const navigation = useNavigation();
    console.log("car:", car);

    useEffect(() => {

        if (visible) {
            opacity.value = withTiming(1, {
                duration: 300,
                easing: Easing.out(Easing.ease),
            });
            scale.value = withTiming(1, {
                duration: 300,
                easing: Easing.out(Easing.ease),
            });
        } else {
            opacity.value = withTiming(0, { duration: 200 });
            scale.value = withTiming(0.9, { duration: 200 });
        }
    }, [visible]);
    const handleConfirm = () => {
        setShowConfirmModal(false);
        ConfirmPurchase(true);
        onDismiss();
    };
    const OnOfferSent = () => {
        setOfferVisible(false);
        offerSent(true)
        onDismiss()
    }
    const OnAdditionlInfoPress = (car) => {
        onDismiss();
        navigation.navigate("AdditionalInfo", { car })
    }

    const OnDamageReportPress = () => {
        onDismiss();
        navigation.navigate("BuyCarsDamageReport", { car })
    }
    const animatedStyle = useAnimatedStyle(() => ({
        opacity: opacity.value,
        transform: [{ scale: scale.value }],
    }));
    if (!car) return null;

    return (
        <Portal>
            {visible && (
                <View style={styles.overlay}>
                    <Modal
                        visible={visible}
                        onDismiss={onDismiss}
                        contentContainerStyle={styles.modalContainer}
                    >
                        <Animated.View style={[styles.modalContainer, animatedStyle]}>
                            <ScrollView
                                showsVerticalScrollIndicator={false}
                                contentContainerStyle={styles.content}
                            >
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <AppText style={styles.title}>{car.title}</AppText>
                                    <AppTouchable onPress={onDismiss}>
                                        <Icon name="close-outline" size={32} color={AppColors.textSecondary} />
                                    </AppTouchable>
                                </View>

                                <AppText style={styles.subtitle}>{car.variant}</AppText>

                                <View style={styles.row}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={styles.plateBox}>
                                            <AppText style={styles.plateText}>{car.numberPlate}</AppText>
                                        </View>
                                        <AppText style={styles.conditionText}>{car.condition}</AppText>
                                    </View>
                                    <AppText style={styles.capLabel}>CAP: <Text style={styles.capStrike}>£38,335</Text></AppText>

                                </View>

                                <View style={styles.statusRow}>
                                    <AppText style={styles.statusLabel}>Status: <AppText style={styles.statusValue}>{car.status || 'PURCHASE REQUEST'}</AppText></AppText>
                                    <AppText style={[styles.price, { color: car.status == 'PURCHASE REQUEST' ? AppColors.quickbuy : AppColors.textPrimary }]}>{car.price}</AppText>
                                </View>

                                <View style={styles.statusPill}>
                                    <AppText style={styles.statusPillText}>PURCHASE REQUEST RECEIVED </AppText>
                                    <AppText style={styles.timestamp}>(2:28)</AppText>
                                </View>

                                <Divider style={styles.divider} />
                                <AppText style={styles.sectionTitle}>Vehicle Information</AppText>
                                <View style={styles.infoGrid}>
                                    <InfoItem label="Year" value={car.vehicleInfo?.year} />
                                    <InfoItem label="Miles" value={car.vehicleInfo?.miles} />
                                    <InfoItem label="Colour" value={car.vehicleInfo?.color} />
                                    <InfoItem label="Fuel" value={car.vehicleInfo?.fuel} />
                                    <InfoItem label="Engine" value={car.vehicleInfo?.engine} />
                                    <InfoItem label="Trans" value={car.vehicleInfo?.transmission} />
                                </View>

                                <View style={styles.buttonRow}>
                                    {/* {car.actions.showAdditionalInfo && ( */}
                                    <AppTouchable onPress={() => OnAdditionlInfoPress(car)} style={styles.button}>
                                        <AppText
                                            style={{ textAlign: 'center', color: AppColors.primary }}
                                        >
                                            Additional Information
                                        </AppText>
                                    </AppTouchable>

                                    {/* {car.actions.showDamageReport && ( */}
                                    <AppTouchable
                                        onPress={() => OnDamageReportPress(car)}
                                        style={[styles.button, { backgroundColor: AppColors.primary }]}
                                    >
                                        <AppText
                                            style={{ textAlign: 'center', color: AppColors.white }}
                                        >
                                            Damage Report
                                        </AppText>
                                    </AppTouchable>
                                    {/* )} */}
                                </View>

                                <Divider style={styles.divider} />
                                <AppText style={styles.sectionTitle}>Seller Information</AppText>
                                <SellerInfo label="Business Name" value={car.dealer?.name} />
                                <SellerInfo label="Address" value={car.dealer?.address} />
                                <SellerInfo label="Contact Name" value={car.dealer?.contactName} />
                                <SellerInfo label="Phone Number" value={car.dealer?.phone} />
                                <SellerInfo label="Email Address" value={car.dealer?.email} />

                                {openedFromHome && (
                                    <View style={styles.bottomButtonContainer}>
                                        <AppTouchable style={styles.declineOffer}>
                                            <AppText style={styles.sendOfferText}>Decline Offer</AppText>
                                        </AppTouchable>
                                        <AppTouchable style={styles.viewOffer}>
                                            <AppText style={styles.sendOfferText}>View Offer</AppText>
                                        </AppTouchable>
                                    </View>
                                )}
                            </ScrollView>
                        </Animated.View>
                    </Modal>
                </View>
            )}
            <SendOfferPortal
                visible={offerVisible}
                listingPrice={car.price}
                onDismiss={() => setOfferVisible(false)}
                onSubmit={(userOffer) => OnOfferSent(userOffer)}
            />
            <ConfirmPurchasePortal
                visible={showConfirmModal}
                onDismiss={() => setShowConfirmModal(false)}
                onConfirm={handleConfirm}
                vehicleTitle={car.title}
                vehicleSubtitle={car.variant}
                price={car.price}
            />
        </Portal>
    );
};

const InfoItem = ({ label, value }) => (
    <View style={styles.infoItem}>
        <AppText style={styles.infoLabel}>{label}:</AppText>
        <AppText style={styles.infoValue}>{value}</AppText>
    </View>
);

const SellerInfo = ({ label, value }) => (
    <View style={styles.sellerRow}>
        <AppText style={styles.sellerLabel}>{label}:</AppText>
        <AppText style={styles.sellerValue}>{value}</AppText>
    </View>
);

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: AppColors.white,
        marginHorizontal: 15,
        borderRadius: 12,
        maxHeight: DimensionsUtil.SCREEN_HEIGHT - 100,
    },
    declineOffer: {
        backgroundColor: AppColors.redLabel,
        marginRight: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: DimensionsUtil.SCREEN_WIDTH / 9,
        width: DimensionsUtil.SCREEN_WIDTH / 2.4,
    },

    viewOffer: {
        backgroundColor: AppColors.quickbuy,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: DimensionsUtil.SCREEN_WIDTH / 9,
        width: DimensionsUtil.SCREEN_WIDTH / 2.4,
    },
    statusRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 6,
    },

    statusLabel: {
        fontFamily: Fonts.bold,
        color: AppColors.textPrimary,
        fontSize: FontSizes.medium,
    },

    statusValue: {
        color: AppColors.quickbuy,
        fontFamily: Fonts.bold,
        fontSize: FontSizes.mediumLarge,
    },

    capLabel: {
        color: AppColors.textSecondary,
        fontSize: FontSizes.small,
        fontFamily: Fonts.semiBold
    },

    capStrike: {
        textDecorationLine: 'line-through',
        color: AppColors.textSecondary,
        fontFamily: Fonts.semiBold
    },

    statusPill: {
        backgroundColor: AppColors.successgb,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 8,
        alignSelf: 'center',
        marginVertical: 10,
        borderWidth: 1,
        borderColor: AppColors.success,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    statusPillText: {
        color: AppColors.quickbuy,
        fontFamily: Fonts.bold,
        fontSize: FontSizes.medium,
        paddingTop:5
    },

    timestamp: {
        color: AppColors.quickbuy,
        fontFamily: Fonts.bold,
        fontSize: FontSizes.medium,
        paddingTop:5
    },

    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.8)', // semi-transparent dark background
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 999, // ensure it’s on top
    },
    content: {
        paddingVertical: 10,

    },
    title: {
        fontSize: FontSizes.xxxLarge,
        fontFamily: Fonts.bold,
        width: '80%',
    },
    subtitle: {
        color: AppColors.Blue_Subtext,
        fontSize: 14,
        marginBottom: 8,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
        justifyContent: 'space-between'
    },
    plateBox: {
        backgroundColor: AppColors.plateYellow,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
        marginRight: 10,
    },
    plateText: {
        fontWeight: '900',
        color: AppColors.textPrimary,
        fontSize: FontSizes.medium,
    },
    conditionText: {
        color: AppColors.likeNew,
        fontWeight: '700',
    },
    dealerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginBottom: 8,
    },
    dealerName: {
        color: AppColors.textGrey,
        paddingLeft: 5,
        fontWeight: '700',
        maxWidth: DimensionsUtil.SCREEN_WIDTH / 4,
    },
    timeListed: {
        marginLeft: 'auto',
        fontSize: FontSizes.small,
        color: AppColors.textSecondary,
        fontFamily: Fonts.semiBold,
    },
    price: {
        fontWeight: '900',
        fontSize: FontSizes.large,
        marginLeft: 'auto',
        color: AppColors.quickbuy,
    },
    divider: {
        marginVertical: 10,
        backgroundColor: AppColors.textSecondary,
    },
    sectionTitle: {
        fontFamily: Fonts.semiBold,
        marginBottom: 6,
        fontSize: FontSizes.xLarge,
    },
    infoGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    infoItem: {
        width: '48%',
        marginBottom: 6,
        flexDirection: 'row',
    },
    infoLabel: {
        fontFamily: Fonts.bold,
        fontSize: FontSizes.medium,
        color: AppColors.textPrimary,
        width: DimensionsUtil.SCREEN_WIDTH / 6,
    },
    infoValue: {
        color: AppColors.textGrey,
        fontSize: FontSizes.smallMedium,
        fontFamily: Fonts.semiBold
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 8,
        flex: 1,
    },
    button: {
        flex: 1,
        // marginHorizontal: 4,
        borderWidth: 1,
        borderColor: AppColors.primary,
        // padding: 12,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: DimensionsUtil.SCREEN_WIDTH / 2.5,
        height: DimensionsUtil.SCREEN_WIDTH / 9,
    },
    sellerRow: {
        marginBottom: 6,
        flexDirection: 'row',
    },
    sellerLabel: {
        fontFamily: Fonts.bold,
        fontSize: FontSizes.medium,
        color: AppColors.textPrimary,
        width: DimensionsUtil.SCREEN_WIDTH / 3.4,
    },
    sellerValue: {
        color: AppColors.textPrimary,
        width: DimensionsUtil.SCREEN_WIDTH / 2,
        fontSize: FontSizes.smallMedium,
        fontFamily: Fonts.semiBold
    },
    bottomButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    sendOffer: {
        backgroundColor: AppColors.link,
        width: DimensionsUtil.SCREEN_WIDTH / 3.3,
        borderRadius: 10,
    },
    buyNow: {
        backgroundColor: AppColors.quickbuy,
        width: DimensionsUtil.SCREEN_WIDTH / 1.9,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    sendOfferText: {
        color: AppColors.white,
        fontSize: FontSizes.medium,
        fontFamily: Fonts.semiBold,
        textAlign: 'center',
        height: DimensionsUtil.SCREEN_WIDTH / 9,
        textAlignVertical: 'center',
        paddingVertical: 14,
    },
});

export default PurchaseRequestPortal;
