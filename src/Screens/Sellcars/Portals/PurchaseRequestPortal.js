import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Portal, Modal } from 'react-native-paper';
import AppText from '../../../components/AppText';
import AppTouchable from '../../../components/AppTouchable';
import { FontSizes } from '../../../constants/fontsizes';
import { AppColors } from '../../../constants/colors';
import { Fonts } from '../../../constants/Fonts';
import DimensionsUtil from '../../../constants/Dimensions';
import OffferConfirmationPortal from './OffferConfirmationPortal';

const PurchaseRequestPortal = ({
    visible,
    onDismiss,
    onAccept,
    onDecline,
    countdown = '2:28',
}) => {
    const [showAcceptConfirmationportal, setAcceptConfirmationportal] = useState(false);

    const handleAcceptConfirmed = () => {
        setAcceptConfirmationportal(false)
        onDismiss()
        onAccept(true)
    }

    return (
        <Portal>
            <Modal visible={visible} onDismiss={onDismiss} contentContainerStyle={styles.modal}>
                <AppText style={styles.title}>New Purchase Request!</AppText>

                <AppText style={styles.requestText}>
                    <AppText style={styles.bold}>Shark Fin Motors</AppText> has requested to purchase the
                    following motor:
                </AppText>

                <AppText style={styles.carTitle}>Audi A5</AppText>
                <AppText style={styles.carSubtitle}>2.0 TFSI 150 S Line 4dr S Tronic</AppText>

                <View style={styles.priceBox}>
                    <AppText style={styles.priceLabel}>Your Price:</AppText>
                    <AppText style={styles.price}>£35,044</AppText>
                </View>

                <View style={styles.actionRow}>
                    <AppTouchable onPress={onDecline} style={styles.declineBtn}>
                        <AppText style={styles.declineText}>Decline</AppText>
                    </AppTouchable>

                    <AppTouchable onPress={() => setAcceptConfirmationportal(true)} style={styles.acceptBtn}>
                        <AppText style={styles.acceptText}>Accept</AppText>
                    </AppTouchable>
                </View>
                <View style={styles.timeRemainingbackground} >
                    <AppText style={styles.footer}>Decide Later ({countdown} Remaining)</AppText>
                </View>
            </Modal>
            <OffferConfirmationPortal
                visible={showAcceptConfirmationportal}
                onGoBack={() => setAcceptConfirmationportal(false)}
                openedFromAcceptOffer={true}
                onAccept={handleAcceptConfirmed}
            />
        </Portal>
    );
};

const styles = StyleSheet.create({
    modal: {
        marginHorizontal: 20,
        paddingTop: 24,
        paddingHorizontal: 22,
        backgroundColor: '#fff',
        borderRadius: 18,
        alignItems: 'center',
    },
    title: {
        fontSize: FontSizes.xLarge,
        fontFamily: Fonts.bold,
        color: AppColors.quickbuy,
        marginBottom: 14,
    },
    requestText: {
        fontSize: FontSizes.medium,
        textAlign: 'center',
        color: AppColors.textDark,
        marginBottom: 14,
        textAlign: 'center',
        width: '80%',
        // lineHeight: 18,
    },
    bold: {
        fontFamily: Fonts.bold,
        fontSize: FontSizes.medium,

    },
    carTitle: {
        fontSize: FontSizes.xLarge,
        fontFamily: Fonts.bold,
        color: AppColors.textDark,
    },
    carSubtitle: {
        fontSize: FontSizes.medium,
        color: AppColors.Blue_Subtext,
        // textDecorationLine: 'underline',
        marginBottom: 10,
    },
    priceBox: {
        backgroundColor: AppColors.greenlight, // light tint green
        borderRadius: 15,
        paddingTop: 8,
        paddingHorizontal: 16,
        alignItems: 'center',
        width: '100%',
        marginBottom: 24,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    priceLabel: {
        fontSize: FontSizes.mediumLarge,
        color: AppColors.quickbuy,
        marginBottom: 2,
        fontFamily: Fonts.semiBold,
    },
    price: {
        fontSize: FontSizes.xxLarge,
        fontFamily: Fonts.bold,
        color: AppColors.quickbuy,
    },
    actionRow: {
        flexDirection: 'row',
        width: DimensionsUtil.SCREEN_WIDTH - 40,
        justifyContent: 'space-between',
        marginBottom: 1,
        // height: 50, // Ensure buttons are the same height
    },
    declineBtn: {
        // flex: 1,
        // marginRight: 6,
        // paddingVertical: 12,
        backgroundColor: AppColors.defaultBackground,
        alignItems: 'center',
        width: (DimensionsUtil.SCREEN_WIDTH - 40) / 2, // Adjust width to fit buttons side by side
        height: 60,
        justifyContent: 'center',
    },
    acceptBtn: {
        // flex: 1,
        // marginLeft: 6,
        // paddingVertical: 12,
        backgroundColor: AppColors.defaultBackground,
        alignItems: 'center',
        width: (DimensionsUtil.SCREEN_WIDTH - 40) / 2, // Adjust width to fit buttons side by side
        height: 60,
        justifyContent: 'center',
    },
    declineText: {
        color: AppColors.redLabel,
        fontFamily: Fonts.bold,
        fontSize: FontSizes.medium,
    },
    acceptText: {
        color: AppColors.quickbuy,
        fontFamily: Fonts.bold,
        fontSize: FontSizes.medium,
    },
    timeRemainingbackground: {
        backgroundColor: AppColors.defaultBackground,
        width: DimensionsUtil.SCREEN_WIDTH - 40,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    footer: {
        fontSize: FontSizes.medium,
        color: AppColors.gobackButton,
        // marginTop: 6,
        padding: 20,
        textAlign: 'center'
    },
});

export default PurchaseRequestPortal;
