import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Modal, Portal, Text } from 'react-native-paper';
import AppText from '../../../components/AppText';
import AppTouchable from '../../../components/AppTouchable';
import { AppColors } from '../../../constants/colors';
import { Fonts } from '../../../constants/Fonts';
import { FontSizes } from '../../../constants/fontsizes';
import DimensionsUtil from '../../../constants/Dimensions';

const NewOfferReceived = ({ visible, onDecline, onCounter, onAccept, onDecideLater, onDismiss, car, userPrice, offerPrice }) => {
    return (
        <Portal>
            <Modal visible={visible} onDismiss={onDismiss} contentContainerStyle={styles.modalContainer}>
                <View style={styles.content}>
                    <AppText style={styles.title}>New Offer Received!</AppText>
                    <AppText style={styles.subtitle}><Text style={styles.bold}>John Jacobson</Text> has sent an offer for the following motor:</AppText>

                    <AppText style={styles.carTitle}>{car?.title}</AppText>
                    <AppText style={styles.carSubtitle}>{car?.variant}</AppText>

                    {/* Price Info Box */}
                    <View style={styles.priceBox}>
                        <View style={styles.priceRow}>
                            <AppText style={styles.priceLabel}>Your Price:</AppText>
                            <AppText style={styles.priceValue}>£{userPrice}</AppText>
                        </View>
                        <View style={styles.priceRow}>
                            <AppText style={[styles.priceLabel, { color: AppColors.link }]}>Incoming Offer:</AppText>
                            <AppText style={[styles.priceValue, { color: AppColors.link }]}>£{offerPrice}</AppText>
                        </View>
                    </View>

                    {/* Action Buttons */}
                    <View style={styles.actionRow}>
                        <AppTouchable onPress={onDecline} style={styles.actionTouch}>
                            <AppText style={styles.declineText}>Decline</AppText>
                        </AppTouchable>
                        <AppTouchable onPress={onCounter} style={styles.actionTouch}>
                            <AppText style={styles.counterText}>Counter</AppText>
                        </AppTouchable>
                        <AppTouchable onPress={onAccept} style={styles.actionTouch}>
                            <AppText style={styles.acceptText}>Accept</AppText>
                        </AppTouchable>
                    </View>

                    <AppTouchable onPress={onDecideLater} style={styles.decideLaterContainer}>
                        <AppText style={styles.decideLaterText}>Decide Later (3:59 Remaining)</AppText>
                    </AppTouchable>
                </View>
            </Modal>
        </Portal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        marginHorizontal: 20,
        backgroundColor: 'white',
        borderRadius: 16,
        width: DimensionsUtil.SCREEN_WIDTH - 40,
    },
    content: {
        alignItems: 'center',
    },
    title: {
        color: AppColors.link,
        fontSize: FontSizes.xLarge,
        fontFamily: Fonts.bold,
        marginBottom: 8,
    },
    subtitle: {
        textAlign: 'center',
        color: AppColors.textPrimary,
        fontSize: FontSizes.medium,
        marginBottom: 16,
        width: '80%',
    },
    bold: {
        color: AppColors.textPrimary,
        fontFamily: Fonts.bold,
        textAlign: 'center',

    },
    carTitle: {
        fontSize: FontSizes.xLarge,
        fontFamily: Fonts.bold,
        color: AppColors.textPrimary,
        marginBottom: 2,
    },
    carSubtitle: {
        fontSize: 14,
        color: AppColors.Blue_Subtext,
        marginBottom: 16,
    },
    priceBox: {
        backgroundColor: AppColors.pricebg,
        padding: 16,
        borderRadius: 12,
        width: '95%',
        marginBottom: 20,
    },
    priceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 6,
    },
    priceLabel: {
        fontSize: FontSizes.medium,
        color: AppColors.textSecondary,
        fontFamily: Fonts.semiBold,
    },
    priceValue: {
        fontSize: FontSizes.xLarge,
        fontFamily: Fonts.bold,
        color: AppColors.textSecondary,
    },
    actionRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
        gap: 1,
        width: DimensionsUtil.SCREEN_WIDTH - 45,
    },
    actionTouch: {
        alignItems: 'center',
        paddingVertical: 20,
        width: (DimensionsUtil.SCREEN_WIDTH - 45) / 3,
        backgroundColor: AppColors.lightGray,
    },
    declineText: {
        color: AppColors.error,
        fontFamily: Fonts.bold,
    },
    counterText: {
        color: AppColors.link,
        fontFamily: Fonts.bold,
    },
    acceptText: {
        color: AppColors.successGreen,
        fontFamily: Fonts.bold,
    },
    decideLaterContainer: {
        // marginTop: 4,
        backgroundColor: AppColors.lightGray,
        width: DimensionsUtil.SCREEN_WIDTH - 45,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        alignContent: 'center'
    },
    decideLaterText: {
        color: AppColors.textSecondary,
        fontSize: FontSizes.medium,
        fontWeight: '500',
        paddingVertical: 16,
        textAlign: 'center',
        fontFamily: Fonts.semiBold,

    },
});

export default NewOfferReceived;
