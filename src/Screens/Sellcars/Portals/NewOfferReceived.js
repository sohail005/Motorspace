import React, { useEffect, useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Keyboard, TextInput } from 'react-native';
import { Modal, Portal, Text } from 'react-native-paper';
import AppText from '../../../components/AppText';
import AppTouchable from '../../../components/AppTouchable';
import AppInput from '../../../components/AppInput'; // assumed reusable input
import { AppColors } from '../../../constants/colors';
import { Fonts } from '../../../constants/Fonts';
import { FontSizes } from '../../../constants/fontsizes';
import DimensionsUtil from '../../../constants/Dimensions';
import OffferConfirmationPortal from './OffferConfirmationPortal';

const NewOfferReceived = ({
    visible,
    onDecline,
    onCounter,
    onAccept,
    onDecideLater,
    onDismiss,
    car,
    userPrice,
    offerPrice,
}) => {
    const [showCounterOffer, setShowCounterOffer] = useState(false);
    const [counterOfferValue, setCounterOfferValue] = useState('');
    const [showAcceptConfirmationportal, setAcceptConfirmationportal] = useState(false);

    useEffect(() => {
        if (visible) {
            setShowCounterOffer(false);
            setCounterOfferValue('');
        }
    }, [visible]);
    const onCounterClicked = () => {
        if (!showCounterOffer) {
            setShowCounterOffer(true);
        } else {
            onCounter(counterOfferValue);
            onDismiss();
        }
    };
    const AcceptOffer = () => {
        setAcceptConfirmationportal(true);
    };
    const handleAcceptConfirmed = () => {
        setAcceptConfirmationportal(false)
        setShowCounterOffer(false)
        onDismiss()
        onAccept(true)
    }
    return (
        <Portal>
            <Modal visible={visible} onDismiss={onDismiss} contentContainerStyle={styles.modalContainer}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={{ flexGrow: 1 }}
                >
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={styles.content}>
                            <AppText style={styles.title}>New Offer Received!</AppText>
                            <AppText style={styles.subtitle}>
                                <Text style={styles.bold}>John Jacobson</Text> has sent an offer for the following motor:
                            </AppText>

                            <AppText style={styles.carTitle}>{car?.title}</AppText>
                            <AppText style={styles.carSubtitle}>{car?.variant}</AppText>

                            <View style={styles.priceBox}>
                                <View style={styles.priceRow}>
                                    <AppText style={styles.priceLabel}>Your Price:</AppText>
                                    <AppText style={styles.priceValue}>£{userPrice}</AppText>
                                </View>
                                <View style={styles.devider} />
                                <View style={[styles.priceRow, {
                                    borderTopRightRadius: 0,
                                    borderTopLeftRadius: 0,
                                    borderBottomRightRadius: 12,
                                    borderBottomLeftRadius: 12,
                                }]}>
                                    <AppText style={[styles.priceLabel, { color: AppColors.link }]}>Incoming Offer:</AppText>
                                    <AppText style={[styles.priceValue, { color: AppColors.link }]}>£{offerPrice}</AppText>
                                </View>
                            </View>

                            {showCounterOffer && (
                                <>
                                    <AppText style={[styles.priceLabel, { marginTop: 16 }]}>Your Counter-Offer:</AppText>
                                    <View style={styles.inputWithPrefix}>
                                        <AppText style={styles.prefix}>£</AppText>
                                        <TextInput
                                            value={counterOfferValue}
                                            onChangeText={setCounterOfferValue}
                                            keyboardType="numeric"
                                            placeholder="00.00"
                                            placeholderTextColor={AppColors.grayOverlay}
                                            style={styles.counterOfferPriceInputtext}
                                        />
                                    </View>


                                    <AppText style={styles.subtitle}>
                                        <Text style={styles.bold}>Please note:</Text> If your counter-offer is accepted, an invoice containing the newly-agreed price will be sent to the buyer.
                                    </AppText>
                                </>
                            )}

                            {!showCounterOffer ? (
                                <View style={styles.actionRow}>
                                    <AppTouchable onPress={onDecline} style={styles.actionTouch}>
                                        <AppText style={styles.declineText}>Decline</AppText>
                                    </AppTouchable>
                                    <AppTouchable onPress={onCounterClicked} style={styles.actionTouch}>
                                        <AppText style={styles.counterText}>Counter</AppText>
                                    </AppTouchable>
                                    <AppTouchable onPress={AcceptOffer} style={styles.actionTouch}>
                                        <AppText style={styles.acceptText}>Accept</AppText>
                                    </AppTouchable>
                                </View>
                            ) : (
                                <View style={styles.sendOfferbuttonContainer}>
                                    <AppTouchable onPress={onDecline} style={styles.sendOfferbutton}>
                                        <AppText style={styles.declineText}>Cancel</AppText>
                                    </AppTouchable>
                                    <AppTouchable
                                        onPress={onCounterClicked}
                                        style={[styles.sendOfferbutton, { borderBottomRightRadius: 16 }]}
                                    >
                                        <AppText style={styles.counterText}>Send Offer</AppText>
                                    </AppTouchable>
                                </View>
                            )}

                            {!showCounterOffer && (
                                <AppTouchable onPress={onDecideLater} style={styles.decideLaterContainer}>
                                    <AppText style={styles.decideLaterText}>Decide Later (3:59 Remaining)</AppText>
                                </AppTouchable>
                            )}
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </Modal>
            <OffferConfirmationPortal
                visible={showAcceptConfirmationportal}
                onGoBack={() => setAcceptConfirmationportal(false)}
                openedFromAcceptOffer={true}
                onAccept={handleAcceptConfirmed}
            />
        </Portal >
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
        marginVertical: 12,
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
        padding: 16,
        borderRadius: 12,
        width: '100%',
        // alignItems: 'center',
    },
    priceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: AppColors.pricebg,
        paddingHorizontal: 40,
        padding: 10,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    devider: {
        height: 1,
        backgroundColor: AppColors.white,
        width: DimensionsUtil.SCREEN_WIDTH / 1.3,
        alignSelf: 'center',
    },
    priceLabel: {
        fontSize: FontSizes.medium,
        color: AppColors.textSecondary,
        fontFamily: Fonts.semiBold,
        textAlignVertical: 'center', // Vertically centers the text within the row
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
    sendOfferbuttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 1,
        width: DimensionsUtil.SCREEN_WIDTH - 45,
    },
    actionTouch: {
        alignItems: 'center',
        paddingVertical: 20,
        width: (DimensionsUtil.SCREEN_WIDTH - 45) / 3,
        backgroundColor: AppColors.lightGray,
    },
    sendOfferbutton: {
        width: (DimensionsUtil.SCREEN_WIDTH - 45) / 2,
        backgroundColor: AppColors.lightGray,
        paddingVertical: 20,
        alignItems: 'center',
        borderBottomLeftRadius: 16,
    },
    declineText: {
        color: AppColors.error,
        fontFamily: Fonts.bold,
        fontSize: FontSizes.medium,
    },
    counterText: {
        color: AppColors.link,
        fontFamily: Fonts.bold,
        fontSize: FontSizes.medium,
    },
    acceptText: {
        color: AppColors.quickbuy,
        fontFamily: Fonts.bold,
    },
    decideLaterContainer: {
        backgroundColor: AppColors.lightGray,
        width: DimensionsUtil.SCREEN_WIDTH - 45,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        alignContent: 'center',
    },
    decideLaterText: {
        color: AppColors.textSecondary,
        fontSize: FontSizes.medium,
        fontWeight: '500',
        paddingVertical: 16,
        textAlign: 'center',
        fontFamily: Fonts.semiBold,
    },
    inputWithPrefix: {
        flexDirection: 'row',
        alignItems: 'center', // ✅ Vertically centers the prefix and input
        backgroundColor: AppColors.white,
        borderWidth: 1,
        borderColor: AppColors.borderColor,
        borderRadius: 8,
        paddingHorizontal: 12,
        height: 50,
        width: DimensionsUtil.SCREEN_WIDTH / 1.4,
        marginBottom: 16, // Add some space below the input
    },
    prefix: {
        fontSize: FontSizes.jumbo,
        color: AppColors.textPrimary,
        marginRight: 4,
        fontFamily: Fonts.bold,
        // remove textAlignVertical
    },

    counterOfferPriceInputtext: {
        flex: 1,
        fontSize: FontSizes.jumbo,
        color: AppColors.textPrimary,
        backgroundColor: AppColors.white,
        paddingLeft: 4,
        textAlignVertical: 'center', // this works on Android
        textAlign: 'left',
        height: 50, // required for vertical alignment
        fontFamily: Fonts.bold,
        includeFontPadding: false, // Optional: better vertical centering on Android
        paddingVertical: 0,
        borderTopWidth: 1,    // Optional: avoid extra vertical spacing,
        borderBottomWidth: 1, // Optional: avoid extra vertical spacing
        borderColor: AppColors.borderColor,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: AppColors.white,
        borderWidth: 1,
        borderColor: AppColors.borderColor,
        borderRadius: 8,
        paddingHorizontal: 12,
        width: DimensionsUtil.SCREEN_WIDTH / 1.4,
        height: 50,
    },



});

export default NewOfferReceived;
