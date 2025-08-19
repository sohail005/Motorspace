import React, { useEffect, useState, useCallback, useMemo } from "react";
import { View, ScrollView, Text } from "react-native";
import { Divider } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
    Easing,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

import { AppColors } from "../../../constants/colors";
import { styles } from "./VehicleDetailsScreenStyles";
import { IMAGES } from "../../../assets/Images/ImagePath";

import AppText from "../../../components/AppText";
import AppTouchable from "../../../components/AppTouchable";
import AppHeader from "../../../components/AppHeader";

// Portals
import PurchaseNotificationPopup from "../Portals/PurchaseNotificationPopup";
import SendOfferPortal from "../../Buycars/BuyCarsList/SendOfferPortal";
import ConfirmPurchasePortal from "../../Buycars/BuyCarsList/ConfirmPurchasePortal";
import PurchaseRequestPortal from "../Portals/PurchaseRequestPortal";
import OffferConfirmationPortal from "../Portals/OffferConfirmationPortal";
import NewOfferReceived from "../Portals/NewOfferReceived";
import ArchiveListingPortal from "../Portals/ArchiveListingPortal";
import DeleteListingPortal from "../Portals/DeleteListingPortal";
import ReportIssuePortal from "../Portals/ReportIssuePortal";
import NegotiationinProgressPortal from "../Portals/NegotiationinProgressPortal";

/* ---------------- Helpers ---------------- */

const formatPrice = (value) => {
    if (value == null) return "N/A";
    if (typeof value === "number") return `£${value.toLocaleString()}`;
    // if a string already formatted like "£35,000", just return it
    if (typeof value === "string") return value;
    return String(value);
};

const getStatusStyles = (status = "") => {
    if (status === "INCOMING OFFER" || status === "OFFER RECEIVED") {
        return {
            pillBackground: AppColors.blueeBg,
            pillTextColor: AppColors.link,
            priceColor: AppColors.link,
        };
    }
    return {
        pillBackground: AppColors.offerReceivedBackground || "#E0F4E9",
        pillTextColor: AppColors.quickbuy || "#1E824C",
        priceColor: AppColors.quickbuy || "#1E824C",
    };
};

/* ---------------- Screen ---------------- */

const VehicleDetailsScreen = ({ route }) => {
    const { car, openedFromHome, offerSent, ConfirmPurchase } = route?.params || {};
    const navigation = useNavigation();

    // animation
    const opacity = useSharedValue(0);
    const scale = useSharedValue(0.95);

    // notification popup
    const [showNotificationPopup, setShowNotificationPopup] = useState(false);
    const [notificationTitle, setNotificationTitle] = useState("");
    const [notificationMessage, setNotificationMessage] = useState("");

    // offer/sale state
    const [offerVisible, setOfferVisible] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [showPurchasePopup, setShowPurchasePopup] = useState(false);
    const [showDeclineConfirm, setShowDeclineConfirm] = useState(false);
    const [acceptOffer, setAcceptOffer] = useState(false);

    const [isOfferDeclined, setIsOfferDeclined] = useState(false);
    const [isOfferAccepted, setIsOfferAccepted] = useState(false);

    const [showNewOfferReceived, setShowNewOfferReceived] = useState(false);
    const [counterOfferSent, setCounterOfferSent] = useState(false);
    const [newAcceptOffer, setNewAcceptOffer] = useState(false);

    const [showArchivePortal, setShowArchivePortal] = useState(false);
    const [showDeletePortal, setShowDeletePortal] = useState(false);
    const [showReportModal, setShowReportModal] = useState(false);

    const [showNegotiationPopup, setShowNegotiationPopup] = useState(false);


    // animate in
    useEffect(() => {
        opacity.value = withTiming(1, { duration: 300, easing: Easing.out(Easing.ease) });
        scale.value = withTiming(1, { duration: 300, easing: Easing.out(Easing.ease) });
    }, []);

    const animatedStyle = useAnimatedStyle(() => ({
        opacity: opacity.value,
        transform: [{ scale: scale.value }],
    }));

    const triggerNotificationPopup = useCallback((title, message) => {
        setNotificationTitle(title);
        setNotificationMessage(message);
        setShowNotificationPopup(true);
    }, []);

    const handleNavigation = (screen) => {
        navigation.navigate(screen, { car });
    };

    const onAcceptNewOffer = () => {
        setNewAcceptOffer(true);
        setShowNewOfferReceived(false);
        triggerNotificationPopup("Offer Accepted!", "You have accepted the new offer from John Jacobson.");
    };

    const onAcceptOffer = () => {
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

    const onOfferDeclinedFlow = () => {
        setShowDeclineConfirm(true);
        setShowNewOfferReceived(false);
    };

    const onDeclineConfirmed = () => {
        setIsOfferDeclined(true);
        setShowDeclineConfirm(false);
        triggerNotificationPopup("Purchase Offer Declined!", "The buyer can still send a new offer if they want.");
    };

    const onAcceptPurchaseRequest = () => {
        setIsOfferAccepted(true);
        setShowPurchasePopup(false);
        triggerNotificationPopup("Purchase Request Accepted!", "Complete the sale with the buyer now.");
    };

    const onConfirmPurchase = () => {
        setShowConfirmModal(false);
        ConfirmPurchase?.(true);
    };

    const onSendOfferSubmit = () => {
        setOfferVisible(false);
        offerSent?.(true);
    };

    const onCompleteSale = () => {
        navigation.navigate("CompleteSale", { car });
    };

    const statusStyles = useMemo(() => getStatusStyles(car?.status), [car?.status]);

    // graceful fallback if car missing
    if (!car) {
        return (
            <View style={{ flex: 1, backgroundColor: AppColors.white }}>
                <AppHeader rightIcon={IMAGES.home} />
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 24 }}>
                    <AppText style={{ fontSize: 16, color: AppColors.textPrimary, textAlign: "center" }}>
                        No vehicle data provided. Go back and select a vehicle.
                    </AppText>
                    <AppTouchable onPress={() => navigation.goBack()} style={{ marginTop: 16 }}>
                        <AppText style={{ color: AppColors.primary }}>Go Back</AppText>
                    </AppTouchable>
                </View>
            </View>
        );
    }

    const {
        title,
        variant,
        numberPlate,
        condition,
        status,
        price,
        vehicleInfo,
        dealer,
    } = car;

    return (
        <View style={{ flex: 1, backgroundColor: AppColors.white }}>
            {/* Notification */}
            <PurchaseNotificationPopup
                visible={showNotificationPopup}
                onClose={() => setShowNotificationPopup(false)}
                title={notificationTitle}
                message={notificationMessage}
            />

            <AppHeader rightIcon={IMAGES.home} />

            <Animated.View style={[{ flex: 1 }, animatedStyle]}>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
                    {/* Card-like body */}
                    <View style={styles.modalContainer}>
                        {/* Header */}
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <AppText style={styles.title}>{title}</AppText>
                            <AppTouchable onPress={() => navigation.goBack()}>
                                <Icon name="close-outline" size={28} color={AppColors.textSecondary} />
                            </AppTouchable>
                        </View>

                        <AppText style={styles.subtitle}>{variant}</AppText>

                        {/* Plate & CAP Row */}
                        <View style={styles.row}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <View style={styles.plateBox}>
                                    <AppText style={styles.plateText}>{numberPlate}</AppText>
                                </View>
                                <AppText style={styles.conditionText}>{condition}</AppText>
                            </View>
                            <AppText style={styles.capLabel}>
                                CAP: <Text style={styles.capStrike}>£38,335</Text>
                            </AppText>
                        </View>

                        {/* Status */}
                        <View style={styles.statusRow}>
                            <AppText style={styles.statusLabel}>
                                Status:{" "}
                                <AppText style={[styles.statusValue, { color: statusStyles.pillTextColor }]}>
                                    {status || "PURCHASE REQUEST"}
                                </AppText>
                            </AppText>
                            <AppText style={[styles.price, { color: statusStyles.priceColor }]}>
                                {formatPrice(price)}
                            </AppText>
                        </View>

                        {/* Status Pill */}
                        {!isOfferDeclined && (
                            <View
                                style={[
                                    styles.statusPill,
                                    {
                                        backgroundColor: statusStyles.pillBackground,
                                        borderColor: statusStyles.pillTextColor,
                                    },
                                ]}
                            >
                                <AppText style={[styles.statusPillText, { color: statusStyles.pillTextColor }]}>
                                    {status === "INCOMING OFFER" ? "INCOMING OFFER PENDING" : "PURCHASE REQUEST RECEIVED"}
                                </AppText>
                                <AppText style={[styles.timestamp, { color: statusStyles.pillTextColor }]}>
                                    (3:59)
                                </AppText>
                            </View>
                        )}

                        <Divider style={styles.divider} />
                        <AppText style={styles.sectionTitle}>Vehicle Information</AppText>

                        {/* Vehicle Info Grid */}
                        <View style={styles.infoGrid}>
                            <InfoItem label="Year" value={vehicleInfo?.year} />
                            <InfoItem label="Miles" value={vehicleInfo?.miles} />
                            <InfoItem label="Colour" value={vehicleInfo?.color} />
                            <InfoItem label="Fuel" value={vehicleInfo?.fuel} />
                            <InfoItem label="Engine" value={vehicleInfo?.engine} />
                            <InfoItem label="Trans" value={vehicleInfo?.transmission} />
                        </View>

                        {/* Action Buttons */}
                        <View style={styles.buttonRow}>
                            <AppTouchable onPress={() => handleNavigation("AdditionalInfo")} style={styles.button}>
                                <AppText style={{ textAlign: "center", color: AppColors.primary }}>
                                    Additional Information
                                </AppText>
                            </AppTouchable>
                            <AppTouchable
                                onPress={() => handleNavigation("BuyCarsDamageReport")}
                                style={[styles.button, { backgroundColor: AppColors.primary }]}
                            >
                                <AppText style={{ textAlign: "center", color: AppColors.white }}>
                                    Damage Report
                                </AppText>
                            </AppTouchable>
                        </View>

                        <Divider style={styles.divider} />
                        <AppText style={styles.sectionTitle}>
                            {isOfferDeclined ? "Buyer Information" : "My Information"}
                        </AppText>

                        {/* Seller Info */}
                        <SellerInfo label="Business Name" value={dealer?.name} />
                        <SellerInfo label="Address" value={dealer?.address} />
                        <SellerInfo label="Contact Name" value={dealer?.contactName} />
                        <SellerInfo label="Phone Number" value={dealer?.phone} />
                        <SellerInfo label="Email Address" value={dealer?.email} />

                        {/* Conditional Bottom Buttons */}
                        {
                            (status === "FOR SALE" || status === "PURCHASE REQUEST" || status === "SALE PENDING") &&
                            !isOfferDeclined &&
                            !isOfferAccepted &&
                            !newAcceptOffer && (
                                <View style={styles.bottomButtonContainer}>
                                    <AppTouchable
                                        onPress={() => setShowDeclineConfirm(true)}
                                        style={styles.declineOffer}
                                    >
                                        <AppText style={styles.sendOfferText}>Decline Offer</AppText>
                                    </AppTouchable>

                                    <AppTouchable
                                        onPress={() => setShowPurchasePopup(true)}
                                        style={styles.viewOffer}
                                    >
                                        <AppText style={styles.sendOfferText}>View Offer</AppText>
                                    </AppTouchable>
                                </View>
                            )
                        }




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
                                <AppTouchable onPress={onCompleteSale} style={styles.CompleteSaleButton}>
                                    <AppText style={styles.CompleteSaleButtontext}>Complete Sale</AppText>
                                </AppTouchable>
                            </View>
                        )}

                        {(status === "INCOMING OFFER" || status == "OFFER RECEIVED") && !isOfferDeclined && !counterOfferSent && !newAcceptOffer && (
                            <View style={styles.offerDeclineButtonsContainer}>
                                <AppTouchable onPress={() => setShowDeclineConfirm(true)} style={styles.declineOffer}>
                                    <AppText style={styles.ReportanIssueButtonText}>Decline Offer</AppText>
                                </AppTouchable>
                                <AppTouchable
                                    onPress={() => setShowNewOfferReceived(true)}
                                    style={[styles.viewOffer, { backgroundColor: AppColors.link }]}
                                >
                                    <AppText style={styles.CompleteSaleButtontext}>View Offer</AppText>
                                </AppTouchable>
                            </View>
                        )}

                        {(status === "INCOMING OFFER" || status == "OFFER RECEIVED") && counterOfferSent && (
                            <View style={styles.offerDeclineButtonsContainer}>
                                <AppTouchable onPress={() => setShowReportModal(true)} style={styles.declineOffer}>
                                    <AppText style={styles.ReportanIssueButtonText}>Retract Offer</AppText>
                                </AppTouchable>
                                <AppTouchable
                                    onPress={() => setShowNegotiationPopup(true)}
                                    style={[styles.viewOffer, { backgroundColor: AppColors.link }]}
                                >
                                    <AppText style={styles.CompleteSaleButtontext}>View Counter</AppText>
                                </AppTouchable>
                            </View>
                        )}

                        {status === "INCOMING OFFER" && newAcceptOffer && (
                            <View style={styles.offerDeclineButtonsContainer}>
                                <AppTouchable onPress={() => setShowReportModal(true)} style={styles.ReportanIssueButton}>
                                    <AppText style={styles.ReportanIssueButtonText}>Report an Issue</AppText>
                                </AppTouchable>
                                <AppTouchable onPress={onCompleteSale} style={styles.CompleteSaleButton}>
                                    <AppText style={styles.CompleteSaleButtontext}>Complete Sale</AppText>
                                </AppTouchable>
                            </View>
                        )}
                    </View>
                </ScrollView>
            </Animated.View>

            {/* --------- Portals (fully wired) --------- */}
            <SendOfferPortal
                visible={offerVisible}
                listingPrice={price}
                onDismiss={() => setOfferVisible(false)}
                onSubmit={onSendOfferSubmit}
            />

            <ConfirmPurchasePortal
                visible={showConfirmModal}
                onDismiss={() => setShowConfirmModal(false)}
                onConfirm={onConfirmPurchase}
                vehicleTitle={title}
                vehicleSubtitle={variant}
                price={price}
            />

            <PurchaseRequestPortal
                visible={showPurchasePopup}
                onDismiss={() => setShowPurchasePopup(false)}
                onAccept={onAcceptPurchaseRequest}
                onDecline={() => setShowPurchasePopup(false)}
            />

            <OffferConfirmationPortal
                title={status === "INCOMING OFFER" ? "Decline Offer?" : "Decline Purchase?"}
                visible={showDeclineConfirm}
                onDismiss={() => setShowDeclineConfirm(false)}
                onDecline={onDeclineConfirmed}
                onGoBack={() => setShowDeclineConfirm(false)}
                openedFromAcceptOffer={acceptOffer}
                onAccept={onAcceptOffer}
            />

            <NewOfferReceived
                visible={showNewOfferReceived}
                onDecline={onOfferDeclinedFlow}
                onCounter={onCounterOffer}
                onAccept={onAcceptNewOffer}
                onDecideLater={() => setShowNewOfferReceived(false)}
                onDismiss={() => setShowNewOfferReceived(false)}
                car={car}
                userPrice={25559}
                offerPrice={24650}
            />
            <NegotiationinProgressPortal
                visible={showNegotiationPopup}
                onCounter={onCounterOffer}
                onDismiss={() => setShowNegotiationPopup(false)}
                car={car}
            />

            <ArchiveListingPortal
                visible={showArchivePortal}
                onDismiss={() => setShowArchivePortal(false)}
                onConfirm={() => setShowArchivePortal(false)}
            />

            <DeleteListingPortal
                visible={showDeletePortal}
                onDismiss={() => setShowDeletePortal(false)}
                onConfirm={() => setShowDeletePortal(false)}
            />

            <ReportIssuePortal
                visible={showReportModal}
                onDismiss={() => setShowReportModal(false)}
                onCancelSale={() => { }}
                onReportBuyer={() => { }}
                onSupport={() => { }}
            />
        </View>
    );
};

/* ---------------- Subcomponents ---------------- */

const InfoItem = ({ label, value }) => (
    <View style={styles.infoItem}>
        <AppText style={styles.infoLabel}>{label}:</AppText>
        <AppText style={styles.infoValue}>{value ?? "N/A"}</AppText>
    </View>
);

const SellerInfo = ({ label, value }) => (
    <View style={styles.sellerRow}>
        <AppText style={styles.sellerLabel}>{label}:</AppText>
        <AppText style={styles.sellerValue}>{value ?? "N/A"}</AppText>
    </View>
);

export default VehicleDetailsScreen;
