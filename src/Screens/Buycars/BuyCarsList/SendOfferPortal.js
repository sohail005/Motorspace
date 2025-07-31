import React, { useState } from 'react';
import { View, StyleSheet, Keyboard } from 'react-native';
import { Modal, Portal } from 'react-native-paper';
import AppText from '../../../components/AppText';
import AppInput from '../../../components/AppInput';
import AppTouchable from '../../../components/AppTouchable';
import { AppColors } from '../../../constants/colors';
import { FontSizes } from '../../../constants/fontsizes';
import { Fonts } from '../../../constants/Fonts';
import DimensionsUtil from '../../../constants/Dimensions';

const SendOfferPortal = ({ visible, onDismiss, listingPrice, onSubmit }) => {
    const [offer, setOffer] = useState('');
    const [error, setError] = useState('');

    const handleSendOffer = () => {
        const numericOffer = parseFloat(offer.replace(/[^\d.]/g, ''));
        const numericListing = parseFloat(listingPrice.replace(/[^\d.]/g, ''));
        if (numericOffer >= numericListing) {
            setError('Your offer needs to be less than the original listing price');
        } else {
            Keyboard.dismiss()
            setTimeout(() => {
                setError('');
                onSubmit(numericOffer);
            }, 50);
        }
    };

    const handleClose = () => {
        setOffer('');
        setError('');
        onDismiss();
    };

    return (
        <Portal>
            <Modal visible={visible} onDismiss={handleClose} contentContainerStyle={styles.modal}>
                <AppText style={styles.title}>Send Offer?</AppText>
                <AppText style={styles.label}>Listing Price:</AppText>
                <AppText style={styles.price}>{listingPrice}</AppText>

                <AppText style={styles.label}>Your Counter-Offer:</AppText>
                <AppInput
                    style={[styles.input, error ? styles.inputError : null]}
                    placeholder="Enter your offer"
                    keyboardType="numeric"
                    value={offer}
                    inputStyle={styles.inputStyles}
                    onChangeText={setOffer}
                />

                <View style={styles.errorConatiner}>
                    {error ? (
                        <AppText style={styles.error}>
                            <AppText style={styles.errorBold}>Error: </AppText>
                            {error}
                        </AppText>
                    ) : (
                        <AppText style={styles.note}>
                            <AppText style={styles.noteBold}>Please note: </AppText>
                            If your offer is accepted, an invoice will be sent to your email address.
                        </AppText>
                    )}
                </View>

                <View style={styles.buttonRow}>
                    <AppTouchable style={styles.cancelButton} onPress={handleClose}>
                        <AppText style={styles.cancelText}>{error ? 'Cancel' : 'Go Back'}</AppText>
                    </AppTouchable>
                    <AppTouchable
                        style={[styles.sendButton, error ? styles.validButton : null]}
                        onPress={handleSendOffer}
                    >
                        <AppText style={[styles.sendText, error ? styles.validText : null]}>Send Offer</AppText>
                    </AppTouchable>
                </View>
            </Modal>
        </Portal>
    );
};

const styles = StyleSheet.create({
    modal: {
        marginHorizontal: 20,
        borderRadius: 12,
        backgroundColor: AppColors.white,
        width: DimensionsUtil.SCREEN_WIDTH - 40
    },
    title: {
        fontFamily: Fonts.semiBold,
        fontSize: FontSizes.xxLarge,
        color: AppColors.link,
        textAlign: 'center',
        marginTop: 15,
        marginBottom: 10,
    },
    label: {
        fontSize: FontSizes.large,
        color: AppColors.textPrimary,
        fontFamily: Fonts.regular,
        textAlign: 'center'
    },
    inputStyles: {
        fontSize: FontSizes.xLarge,
        alignItems: 'cenetr',
        verticalAlign: 'center',
        textAlign: 'cenetr',
        fontFamily: Fonts.bold,
    },
    price: {
        fontSize: FontSizes.xxxLarge,
        fontFamily: Fonts.bold,
        color: AppColors.link,
        marginBottom: 10,
        textAlign: 'center',
    },
    input: {
        // fontSize: FontSizes.ultra,
        // fontFamily: Fonts.semiBold,
        // backgroundColor: AppColors.white,
        width: DimensionsUtil.SCREEN_WIDTH / 1.4,
        alignSelf: 'center',
        height: DimensionsUtil.SCREEN_WIDTH / 8,
        justifyContent: 'center',

    },
    inputError: {
        borderColor: AppColors.redLabel,
        backgroundColor: AppColors.errorBg,
        borderWidth: 1,
        borderRadius: 10
    },
    errorConatiner: {
        width: '75%',
        alignSelf: 'center'
    },
    error: {
        color: AppColors.error,
        fontSize: FontSizes.small,
        marginTop: 6,
        fontFamily: Fonts.medium,
        textAlign: 'left',
    },
    note: {
        fontSize: FontSizes.small,
        color: AppColors.textPrimary,
        marginTop: 10,
        fontFamily: Fonts.regular,
        width: DimensionsUtil.SCREEN_WIDTH / 1.5,
        alignSelf: 'center'
    },
    noteBold: {
        fontFamily: Fonts.bold,
        color: AppColors.textPrimary,
    },
    errorBold: {
        fontFamily: Fonts.bold,
        color: AppColors.redLabel,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 24,

    },
    cancelButton: {
        backgroundColor: AppColors.lightGray,
        alignItems: 'center',
        width: (DimensionsUtil.SCREEN_WIDTH - 42) / 2,
        borderBottomLeftRadius: 12,
        height: DimensionsUtil.SCREEN_WIDTH / 9,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    cancelText: {
        color: AppColors.gobackButton,
        fontFamily: Fonts.bold,
        textAlign: 'center',
        fontSize: FontSizes.medium
    },
    sendButton: {
        backgroundColor: AppColors.lightGray,
        alignItems: 'center',
        width: (DimensionsUtil.SCREEN_WIDTH - 42) / 2,
        borderBottomRightRadius: 12,
        height: DimensionsUtil.SCREEN_WIDTH / 9,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    sendText: {
        color: AppColors.link,
        fontFamily: Fonts.bold,
        fontSize: FontSizes.medium
    },
    validButton: {
        backgroundColor: AppColors.lightGray,
    },
    validText: {
        color: AppColors.quickbuy,
        fontSize: FontSizes.medium
    },
});

export default SendOfferPortal;