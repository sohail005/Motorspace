// components/CarDetailSetpricePortal.js
import React, { useEffect } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Portal, Modal, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
    Easing,
} from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import AppText from '../../../components/AppText';
import AppTouchable from '../../../components/AppTouchable';
import { AppColors } from '../../../constants/colors';
import { FontSizes } from '../../../constants/fontsizes';
import { Fonts } from '../../../constants/Fonts';
import DimensionsUtil from '../../../constants/Dimensions';

const CarDetailSetpricePortal = ({ visible, onDismiss, car }) => {
    const opacity = useSharedValue(0);
    const scale = useSharedValue(0.95);
    const navigation = useNavigation();

    useEffect(() => {
        if (visible) {
            opacity.value = withTiming(1, { duration: 300, easing: Easing.out(Easing.ease) });
            scale.value = withTiming(1, { duration: 300, easing: Easing.out(Easing.ease) });
        } else {
            opacity.value = withTiming(0, { duration: 200 });
            scale.value = withTiming(0.95, { duration: 200 });
        }
    }, [visible]);

    const animatedStyle = useAnimatedStyle(() => ({
        opacity: opacity.value,
        transform: [{ scale: scale.value }],
    }));

    if (!car) return null;

    return (
        <Portal>
            <Modal
                visible={visible}
                onDismiss={onDismiss}
                contentContainerStyle={styles.modalContainer}
            >
                <Animated.View style={[styles.card, animatedStyle]}>
                    {/* Header */}
                    <View style={styles.headerRow}>
                        <View style={{ flex: 1 }}>
                            <AppText style={styles.title}>{car.title}</AppText>
                            <AppText style={styles.subtitle}>{car.variant}</AppText>
                        </View>
                        <AppTouchable onPress={onDismiss}>
                            <Icon name="close-outline" size={30} color={AppColors.textSecondary} />
                        </AppTouchable>
                    </View>

                    {/* Plate & Condition */}
                    <View style={styles.row}>
                        <View style={styles.plateBox}>
                            <AppText style={styles.plateText}>{car.numberPlate}</AppText>
                        </View>
                        <AppText style={styles.conditionText}>{car.condition}</AppText>
                    </View>

                    <Divider style={styles.divider} />

                    {/* Vehicle Info */}
                    <AppText style={styles.sectionTitle}>Vehicle Information</AppText>
                    {car.vehicleInfo && (
                        <View style={styles.infoGrid}>
                            <InfoItem label="Year" value={car.vehicleInfo.year} />
                            <InfoItem label="Miles" value={car.vehicleInfo.miles} />
                            <InfoItem label="Colour" value={car.vehicleInfo.color} />
                            <InfoItem label="Fuel" value={car.vehicleInfo.fuel} />
                            <InfoItem label="Engine" value={car.vehicleInfo.engine} />
                            <InfoItem label="Trans" value={car.vehicleInfo.transmission} />
                        </View>
                    )}

                    {/* Buttons Row */}
                    <View style={styles.buttonRow}>
                        <AppTouchable onPress={() => handleNavigation("AdditionalInfo")} style={styles.button}>
                            <AppText style={styles.addionalInfoText}>Additional Information</AppText>
                        </AppTouchable>
                        <AppTouchable onPress={() => handleNavigation("BuyCarsDamageReport")} style={[styles.button, { backgroundColor: AppColors.primary }]}>
                            <AppText style={styles.damageReportText}>Damage Report</AppText>
                        </AppTouchable>
                    </View>

                    <Divider style={styles.divider} />

                    {/* Set Price */}
                    <AppText style={styles.sectionTitle}>Set Price:</AppText>
                    <View style={styles.priceRow}>
                        <TextInput
                            style={styles.priceInput}
                            placeholder="Enter price"
                            keyboardType="numeric"
                        />
                        <AppText style={styles.capText}>CAP: £{car.capValue}</AppText>
                    </View>

                    {/* Bottom Buttons */}
                    <View style={styles.bottomRow}>
                        <AppTouchable style={styles.editButton}>
                            <AppText style={styles.outlinedText}>Edit Details</AppText>
                        </AppTouchable>
                        <AppTouchable style={styles.submitButton}>
                            <AppText style={styles.filledText}>Submit Listing</AppText>
                        </AppTouchable>
                    </View>
                </Animated.View>
            </Modal>
        </Portal>
    );
};

const InfoItem = ({ label, value }) => (
    <View style={styles.infoItem}>
        <AppText style={styles.infoLabel}>{label}:</AppText>
        <AppText style={styles.infoValue}>{value}</AppText>
    </View>
);

const styles = StyleSheet.create({
    modalContainer: {
        marginHorizontal: 15,
    },
    card: {
        backgroundColor: AppColors.white,
        borderRadius: 12,
        padding: 15,
        elevation: 4,
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    title: {
        fontSize: FontSizes.xxLarge,
        fontFamily: Fonts.bold,
    },
    subtitle: {
        color: AppColors.Blue_Subtext,
        fontSize: 14,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
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
        color: AppColors.greenLabel,
        fontWeight: '700',
    },
    button: {
        // marginHorizontal: 4,
        borderWidth: 1,
        borderColor: AppColors.primary,
        // padding: 12,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: DimensionsUtil.SCREEN_WIDTH / 2.5,

    },
    addionalInfoText: { textAlign: 'center', color: AppColors.primary },
    damageReportText: { textAlign: 'center', color: AppColors.white },
    sectionTitle: {
        fontFamily: Fonts.semiBold,
        marginBottom: 6,
        fontSize: FontSizes.large,
    },
    divider: {
        marginVertical: 10,
        backgroundColor: AppColors.textSecondary,
    },
    infoGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    infoItem: {
        width: '50%',
        flexDirection: 'row',
        marginBottom: 6,
    },
    infoLabel: {
        fontFamily: Fonts.bold,
        color: AppColors.textPrimary,
        marginRight: 4,
    },
    infoValue: {
        color: AppColors.textGrey,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 8,
        flex: 1,
    },
    outlinedButton: {
        borderWidth: 1,
        borderColor: AppColors.primary,
        borderRadius: 10,
        height: DimensionsUtil.SCREEN_WIDTH / 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 6,
    },
    outlinedText: {
        color: AppColors.primary,
        fontFamily: Fonts.semiBold,
    },
    filledButton: {
        backgroundColor: AppColors.primary,
        borderRadius: 10,
        height: DimensionsUtil.SCREEN_WIDTH / 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 6,
    },
    filledText: {
        color: AppColors.white,
        fontFamily: Fonts.semiBold,
    },
    priceRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    priceInput: {
        borderWidth: 1,
        borderColor: AppColors.textSecondary,
        borderRadius: 8,
        paddingHorizontal: 10,
        flex: 1,
        height: DimensionsUtil.SCREEN_WIDTH / 10,
        marginRight: 10,
    },
    capText: {
        fontSize: FontSizes.medium,
        fontFamily: Fonts.semiBold,
        color: AppColors.textGrey,
    },
    bottomRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
    },
    editButton: {
        borderWidth: 1,
        borderColor: AppColors.primary,
        borderRadius: 10,
        height: DimensionsUtil.SCREEN_WIDTH / 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 6,
    },
    submitButton: {
        backgroundColor: AppColors.quickbuy,
        borderRadius: 10,
        height: DimensionsUtil.SCREEN_WIDTH / 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 6,
    },
});

export default CarDetailSetpricePortal;
