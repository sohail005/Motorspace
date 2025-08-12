import React, { useEffect, useState, useCallback } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Portal, Modal, Text, Divider } from 'react-native-paper';
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

import SendOfferPortal from '../../Buycars/BuyCarsList/SendOfferPortal';
import ConfirmPurchasePortal from '../../Buycars/BuyCarsList/ConfirmPurchasePortal';
import PurchaseRequestPortal from './PurchaseRequestPortal';
import OffferConfirmationPortal from './OffferConfirmationPortal';
import PurchaseNotificationPopup from './PurchaseNotificationPopup';

import { AppColors } from '../../../constants/colors';
import { styles } from './VehicleDetailsPortalStyles';
import NewOfferReceived from './NewOfferReceived';
import ArchiveListingPortal from './ArchiveListingPortal';
import DeleteListingPortal from './DeleteListingPortal';
import ReportIssuePortal from './ReportIssuePortal';

const VehicleDetailsPortal = ({ visible, onDismiss, car, openedFromHome, offerSent, ConfirmPurchase }) => {
    const opacity = useSharedValue(0);
    const scale = useSharedValue(0.9);
    const navigation = useNavigation();

    const [offerVisible, setOfferVisible] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [showPurchasePopup, setShowPurchasePopup] = useState(false);
    const [showDeclineConfirm, setShowDeclineConfirm] = useState(false);
    const [showNotificationpoup, setShowNotificationpoup] = useState(false);
    const [acceptOffer, setAcceptOffer] = useState(false);

    const [notificationTittle, setNotificationTittle] = useState('');
    const [notificationMessage, setNotificationMessage] = useState('');
    const [isOfferDeclined, setIsOfferDeclined] = useState(false);
    const [isOfferAccepted, setIsOfferAccepted] = useState(false);

    const [showNewOfferReceived, setShowNewOfferReceived] = useState(false);
    const [counterOfferSent, setCounterOfferSent] = useState(false);
    const [newAcceptOffer, setNewAcceptOffer] = useState(false);
    const [showArchivePortal, setShowArchivePortal] = useState(false);
    const [showDeletePortal, setShowDeletePortal] = useState(false);
    const [showReportModal, setShowReportModal] = useState(false);
    useEffect(() => {
        if (visible) {
            // Reset all internal states when modal opens
            setOfferVisible(false);
            setShowConfirmModal(false);
            setShowPurchasePopup(false);
            setShowDeclineConfirm(false);
            setShowNotificationpoup(false);
            setShowNewOfferReceived(false);
            setNotificationTittle('');
            setNotificationMessage('');
            setIsOfferDeclined(false);
            setIsOfferAccepted(false);

            // Trigger entrance animation
            opacity.value = withTiming(1, { duration: 300, easing: Easing.out(Easing.ease) });
            scale.value = withTiming(1, { duration: 300, easing: Easing.out(Easing.ease) });
        } else {
            // Trigger exit animation
            opacity.value = withTiming(0, { duration: 200 });
            scale.value = withTiming(0.9, { duration: 200 });
        }
    }, [visible]);

    useEffect(() => {
        if (visible) {
            opacity.value = withTiming(1, { duration: 300, easing: Easing.out(Easing.ease) });
            scale.value = withTiming(1, { duration: 300, easing: Easing.out(Easing.ease) });
        } else {
            opacity.value = withTiming(0, { duration: 200 });
            scale.value = withTiming(0.9, { duration: 200 });
        }
    }, [visible]);

    const animatedStyle = useAnimatedStyle(() => ({
        opacity: opacity.value,
        transform: [{ scale: scale.value }],
    }));

    const triggerNotificationPopup = useCallback((title, message) => {
        setNotificationTittle(title);
        setNotificationMessage(message);
        setShowNotificationpoup(true);
    }, []);

    const handleConfirm = () => {
        setShowConfirmModal(false);
        ConfirmPurchase(true);
        onDismiss();
    };

    const OnOfferSent = () => {
        setOfferVisible(false);
        offerSent(true);
        onDismiss();
    };

    const handleAccept = () => {
        setIsOfferAccepted(true);
        setShowPurchasePopup(false);
        triggerNotificationPopup("Purchase Request Accepted!", "Motor Sold! (£35,044) Complete the sale with Shark Fin Motors now!");
    };

    const handleDeclineConfirmed = () => {
        setIsOfferDeclined(true);
        setShowDeclineConfirm(false);
        triggerNotificationPopup("Purchase Offer Declined!", "Shark Fin Motors can still send you a new offer if they want.");
    };

    const handleNavigation = (screen) => {
        onDismiss();
        navigation.navigate(screen, { car });
    };

    const getStatusStyles = (status = '') => {
        if (status === 'INCOMING OFFER') {
            return {
                pillBackground: AppColors.blueeBg,
                pillTextColor: AppColors.link,
                priceColor: AppColors.link,
            };
        }
        return {
            pillBackground: AppColors.offerReceivedBackground || '#E0F4E9',
            pillTextColor: AppColors.quickbuy || '#1E824C',
            priceColor: AppColors.quickbuy || '#1E824C',
        };
    };

    if (!car) return null;

    const statusStyles = getStatusStyles(car?.status);
    const onAcceptNewOffer = (data) => {
        setNewAcceptOffer(true);
        setShowNewOfferReceived(false);
        triggerNotificationPopup("Offer Accepted!", "You have accepted the new offer from John Jacobson.");
    };
    const onAcceptOffer = (data) => {
        setAcceptOffer(true);
        setShowDeclineConfirm(false);
        triggerNotificationPopup("Offer Accepted!", "You have accepted the offer from Shark Fin Motors.");
        setShowNewOfferReceived(false);
    };
    const onCounterOffer = () => {
        setCounterOfferSent(true);
        setShowNewOfferReceived(false);
        triggerNotificationPopup("Counter Offer Sent!", "You have sent a counter offer to John Jacobson.");
    };
    const onOfferDeclined = () => {
        setShowDeclineConfirm(true)
        setShowNewOfferReceived(false);
    };


    const OnCompleteSale = () => {
        onDismiss();
        navigation.navigate("CompleteSale", { car });
    }
    return (
        <Portal>
            {visible && (
                <View style={styles.overlay}>
                    <PurchaseNotificationPopup
                        visible={showNotificationpoup}
                        onClose={() => setShowNotificationpoup(false)}
                        title={notificationTittle}
                        message={notificationMessage}
                    />

                    <Modal visible={visible} onDismiss={onDismiss} contentContainerStyle={styles.modalContainer}>
                        <Animated.View style={[styles.modalContainer, animatedStyle]}>
                            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
                                {/* Header */}
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <AppText style={styles.title}>{car.title}</AppText>
                                    <AppTouchable onPress={onDismiss}>
                                        <Icon name="close-outline" size={32} color={AppColors.textSecondary} />
                                    </AppTouchable>
                                </View>

                                <AppText style={styles.subtitle}>{car.variant}</AppText>

                                {/* Plate & CAP Row */}
                                <View style={styles.row}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={styles.plateBox}>
                                            <AppText style={styles.plateText}>{car.numberPlate}</AppText>
                                        </View>
                                        <AppText style={styles.conditionText}>{car.condition}</AppText>
                                    </View>
                                    <AppText style={styles.capLabel}>CAP: <Text style={styles.capStrike}>£38,335</Text></AppText>
                                </View>

                                {/* Status */}
                                <View style={styles.statusRow}>
                                    <AppText style={styles.statusLabel}>
                                        Status: <AppText style={[styles.statusValue, { color: statusStyles.pillTextColor }]}>{car.status || 'PURCHASE REQUEST'}</AppText>
                                    </AppText>
                                    <AppText style={[styles.price, { color: statusStyles.priceColor }]}>{car.price}</AppText>
                                </View>

                                {!isOfferDeclined && (
                                    <View style={[styles.statusPill, { backgroundColor: statusStyles.pillBackground, borderColor: statusStyles.pillTextColor }]}>
                                        <AppText style={[styles.statusPillText, { color: statusStyles.pillTextColor }]}>
                                            {car.status === 'INCOMING OFFER' ? 'INCOMING OFFER PENDING' : 'PURCHASE REQUEST RECEIVED'}
                                        </AppText>
                                        <AppText style={[styles.timestamp, { color: statusStyles.pillTextColor }]}>(3:59)</AppText>
                                    </View>
                                )}

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

                                {/* Action Buttons */}
                                <View style={styles.buttonRow}>
                                    <AppTouchable onPress={() => handleNavigation("AdditionalInfo")} style={styles.button}>
                                        <AppText style={{ textAlign: 'center', color: AppColors.primary }}>Additional Information</AppText>
                                    </AppTouchable>
                                    <AppTouchable onPress={() => handleNavigation("BuyCarsDamageReport")} style={[styles.button, { backgroundColor: AppColors.primary }]}>
                                        <AppText style={{ textAlign: 'center', color: AppColors.white }}>Damage Report</AppText>
                                    </AppTouchable>
                                </View>

                                <Divider style={styles.divider} />
                                {!isOfferDeclined ?
                                    <AppText style={styles.sectionTitle}>My Information</AppText>
                                    :
                                    <AppText style={styles.sectionTitle}>Buyer Information</AppText>
                                }

                                <SellerInfo label="Business Name" value={car.dealer?.name} />
                                <SellerInfo label="Address" value={car.dealer?.address} />
                                <SellerInfo label="Contact Name" value={car.dealer?.contactName} />
                                <SellerInfo label="Phone Number" value={car.dealer?.phone} />
                                <SellerInfo label="Email Address" value={car.dealer?.email} />

                                {/* Conditional Bottom Buttons */}
                                {openedFromHome && !isOfferDeclined && !isOfferAccepted && car?.status !== "INCOMING OFFER" && !newAcceptOffer && (
                                    <View style={styles.bottomButtonContainer}>
                                        <AppTouchable onPress={() => setShowDeclineConfirm(true)} style={styles.declineOffer}>
                                            <AppText style={styles.sendOfferText}>Decline Offer</AppText>
                                        </AppTouchable>
                                        <AppTouchable onPress={() => setShowPurchasePopup(true)} style={styles.viewOffer}>
                                            <AppText style={styles.sendOfferText}>View Offer</AppText>
                                        </AppTouchable>
                                    </View>
                                )}

                                {isOfferDeclined && (
                                    <View style={styles.offerDeclineButtonsContainer}>
                                        <AppTouchable onPress={() => setShowDeclineConfirm(true)} style={styles.EditDetailsButton}>
                                            <AppText style={styles.EditDetailsButtonText}>Edit Details</AppText>
                                        </AppTouchable>
                                        <AppTouchable onPress={() => setShowArchivePortal(true)} style={styles.ArchiveListingButton}>
                                            <AppText style={styles.ArchiveListingButtontext}>Archive Listing</AppText>
                                        </AppTouchable>
                                        <AppTouchable onPress={() => setShowDeletePortal(true)} style={styles.deleteButton}>
                                            <Icon name="trash" size={32} color={AppColors.white} />
                                        </AppTouchable>
                                    </View>
                                )}

                                {isOfferAccepted && (
                                    <View style={styles.offerDeclineButtonsContainer}>
                                        <AppTouchable onPress={() => setShowReportModal(true)} style={styles.ReportanIssueButton}>
                                            <AppText style={styles.ReportanIssueButtonText}>Report an Issue</AppText>
                                        </AppTouchable>
                                        <AppTouchable onPress={() => OnCompleteSale()} style={styles.CompleteSaleButton}>
                                            <AppText style={styles.CompleteSaleButtontext}>Complete Sale</AppText>
                                        </AppTouchable>
                                    </View>
                                )}
                                {car.status === 'INCOMING OFFER' && !isOfferDeclined && !counterOfferSent && !newAcceptOffer &&
                                    <View style={styles.offerDeclineButtonsContainer}>
                                        <AppTouchable onPress={() => setShowDeclineConfirm(true)} style={styles.declineOffer}>
                                            <AppText style={styles.ReportanIssueButtonText}>Decline Offer</AppText>
                                        </AppTouchable>
                                        <AppTouchable onPress={() => setShowNewOfferReceived(true)}
                                            style={[styles.viewOffer, { backgroundColor: AppColors.link }]}>
                                            <AppText style={styles.CompleteSaleButtontext}>View Offer</AppText>
                                        </AppTouchable>
                                    </View>
                                }
                                {car.status === 'INCOMING OFFER' && counterOfferSent &&
                                    <View style={styles.offerDeclineButtonsContainer}>
                                        <AppTouchable onPress={() => setShowReportModal(true)} style={styles.declineOffer}>
                                            <AppText style={styles.ReportanIssueButtonText}>Retract Offer</AppText>
                                        </AppTouchable>
                                        <AppTouchable onPress={() => setShowNewOfferReceived(true)}
                                            style={[styles.viewOffer, { backgroundColor: AppColors.link }]}>
                                            <AppText style={styles.CompleteSaleButtontext}>View Counter</AppText>
                                        </AppTouchable>
                                    </View>
                                }
                                {car.status === 'INCOMING OFFER' && newAcceptOffer &&
                                    <View style={styles.offerDeclineButtonsContainer}>
                                        <AppTouchable onPress={() => setShowReportModal(true)} style={styles.ReportanIssueButton}>
                                            <AppText style={styles.ReportanIssueButtonText}>Report an Issue</AppText>
                                        </AppTouchable>
                                        <AppTouchable onPress={() => OnCompleteSale()} style={styles.CompleteSaleButton}>
                                            <AppText style={styles.CompleteSaleButtontext}>Complete Sale</AppText>
                                        </AppTouchable>
                                    </View>
                                }


                            </ScrollView>
                        </Animated.View>
                    </Modal>
                </View>
            )}

            <SendOfferPortal
                visible={offerVisible}
                listingPrice={car.price}
                onDismiss={() => setOfferVisible(false)}
                onSubmit={OnOfferSent}
            />

            <ConfirmPurchasePortal
                visible={showConfirmModal}
                onDismiss={() => setShowConfirmModal(false)}
                onConfirm={handleConfirm}
                vehicleTitle={car.title}
                vehicleSubtitle={car.variant}
                price={car.price}
            />

            <PurchaseRequestPortal
                visible={showPurchasePopup}
                onDismiss={() => setShowPurchasePopup(false)}
                onAccept={handleAccept}
                onDecline={() => setShowPurchasePopup(false)}
            />

            <OffferConfirmationPortal
                title={car.status === 'INCOMING OFFER' ? "Decline Offer?" : "Decline Purchase?"}
                visible={showDeclineConfirm}
                onDismiss={() => setShowDeclineConfirm(false)}
                onDecline={handleDeclineConfirmed}
                onGoBack={() => setShowDeclineConfirm(false)}
                openedFromAcceptOffer={acceptOffer}
                onAccept={onAcceptOffer}
            />
            <NewOfferReceived
                visible={showNewOfferReceived}
                onDecline={() => onOfferDeclined()}
                onCounter={onCounterOffer}
                onAccept={(data) => onAcceptNewOffer(data)}
                onDecideLater={() => { }}
                onDismiss={() => setShowNewOfferReceived(false)}
                car={car}
                userPrice={25559}
                offerPrice={24650}
            />
            <ArchiveListingPortal
                visible={showArchivePortal}
                onDismiss={() => setShowArchivePortal(false)}
                onConfirm={() => {
                    // perform archive logic here
                    setShowArchivePortal(false);
                }}
            />
            <DeleteListingPortal
                visible={showDeletePortal}
                onDismiss={() => setShowDeletePortal(false)}
                onConfirm={() => {
                    // perform delete logic here
                    setShowDeletePortal(false);
                }}
            />
            <ReportIssuePortal
                visible={showReportModal}
                onDismiss={() => setShowReportModal(false)}
                onCancelSale={() => { /* your logic */ }}
                onReportBuyer={() => { /* your logic */ }}
                onSupport={() => { /* your logic */ }}
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

export default VehicleDetailsPortal;
