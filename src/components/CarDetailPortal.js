// components/CarDetailPortal.js
import React, { useEffect } from 'react';
import { View, StyleSheet, ScrollView, } from 'react-native';
import { Portal, Modal, Text, Button, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import AppText from './AppText'; // assumes this exists
import { AppColors } from '../constants/colors';
import AppTouchable from './AppTouchable';
import { FontSizes } from '../constants/fontsizes';
import DimensionsUtil from '../constants/Dimensions';
import Animated, { useAnimatedStyle, useSharedValue, withTiming, Easing } from 'react-native-reanimated';
import { Fonts } from '../constants/Fonts';


const CarDetailPortal = ({ visible, onDismiss, car, openedFromHome }) => {
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0.9);
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
  if (!car) return null;

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={onDismiss}
        contentContainerStyle={styles.modalContainer}
      >
        <Animated.View style={[styles.modalContainer, animatedStyle]}>
          <ScrollView contentContainerStyle={styles.content}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <AppText style={styles.title}>{car.title}</AppText>
              <AppTouchable onPress={onDismiss} style={{ alignSelf: 'flex-end' }}>
                <Icon name="close-outline" size={32} color={AppColors.textSecondary} />
              </AppTouchable>
            </View>
            <AppText style={styles.subtitle}>{car.variant}</AppText>

            <View style={styles.row}>
              <View style={styles.plateBox}>
                <AppText style={styles.plateText}>{car.numberPlate}</AppText>
              </View>
              <AppText style={styles.conditionText}>{car.condition}</AppText>
            </View>

            <View style={styles.dealerRow}>
              <Icon name="person-sharp" size={18} color={AppColors.textPrimary} />
              <AppText style={styles.dealerName}>{car.dealer.name}</AppText>
              <AppText style={styles.timeListed}>{car.timeListed}</AppText>
              <AppText style={styles.price}>{car.price}</AppText>
            </View>

            <Divider style={styles.divider} />
            <AppText style={styles.sectionTitle}>Vehicle Information</AppText>
            <View style={styles.infoGrid}>
              <InfoItem label="Year" value={car.vehicleInfo.year} />
              <InfoItem label="Miles" value={car.vehicleInfo.miles} />
              <InfoItem label="Colour" value={car.vehicleInfo.color} />
              <InfoItem label="Fuel" value={car.vehicleInfo.fuel} />
              <InfoItem label="Engine" value={car.vehicleInfo.engine} />
              <InfoItem label="Trans" value={car.vehicleInfo.transmission} />
            </View>

            <View style={styles.buttonRow}>
              {/* {car.actions.showAdditionalInfo && ( */}
              <AppTouchable style={styles.button}>
                <AppText style={{ textAlign: 'center', color: AppColors.primary }}>Additional Information</AppText>
              </AppTouchable>

              {/* {car.actions.showDamageReport && ( */}
              <AppTouchable style={[styles.button, { backgroundColor: AppColors.primary }]}>
                <AppText style={{ textAlign: 'center', color: AppColors.white }}>Damage Report</AppText>
              </AppTouchable>
              {/* )} */}
            </View>

            <Divider style={styles.divider} />
            <AppText style={styles.sectionTitle}>Seller Information</AppText>
            <SellerInfo label="Business Name" value={car.dealer.name} />
            <SellerInfo label="Address" value={car.dealer.address} />
            <SellerInfo label="Contact Name" value={car.dealer.contactName} />
            <SellerInfo label="Phone Number" value={car.dealer.phone} />
            <SellerInfo label="Email Address" value={car.dealer.email} />

            {openedFromHome &&
              <View style={styles.bottomButtonContainer}>
                <AppTouchable style={styles.sendOffer}>
                  <AppText style={styles.sendOfferText}>Send Offer</AppText>
                </AppTouchable>
                <AppTouchable style={styles.buyNow}>
                  <AppText style={styles.sendOfferText}>BUY NOW</AppText>
                </AppTouchable>
              </View>
            }
          </ScrollView>
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
    marginTop: 10,
    borderRadius: 12,
    // maxHeight: '95%',
    maxHeight: DimensionsUtil.SCREEN_HEIGHT / 1.3
  },
  content: {
    paddingBottom: 20,
  },
  title: {
    fontSize: FontSizes.xxxLarge,
    fontWeight: '700',
    width: '80%'
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
    fontSize: FontSizes.medium
  },
  conditionText: {
    color: AppColors.greenLabel,
    fontWeight: '700'
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
    maxWidth: DimensionsUtil.SCREEN_WIDTH / 4
  },
  timeListed: {
    marginLeft: 'auto',
    fontSize: FontSizes.small,
    color: AppColors.textSecondary,
    fontFamily: Fonts.semiBold
  },
  price: {
    fontWeight: '900',
    fontSize: FontSizes.large,
    marginLeft: 'auto',
    color: AppColors.textPrimary
  },
  divider: {
    marginVertical: 10,
    backgroundColor: AppColors.textSecondary,
  },
  sectionTitle: {
    fontFamily: Fonts.semiBold,
    marginBottom: 6,
    fontSize: FontSizes.xLarge
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
    fontFamily: Fonts.semiBold,
    fontSize: FontSizes.medium,
    color: AppColors.textPrimary,
    width: DimensionsUtil.SCREEN_WIDTH / 6,
    
  },
  infoValue: {
    color: AppColors.textGrey,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 12,
    flex: 1
  },
  button: {
    flex: 1,
    // marginHorizontal: 4,
    borderWidth: 1,
    borderColor: AppColors.primary,
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: DimensionsUtil.SCREEN_WIDTH / 2.5
  },
  sellerRow: {
    marginBottom: 6,
    flexDirection: 'row',
  },
  sellerLabel: {
    fontFamily: Fonts.semiBold,
    fontSize: FontSizes.medium,
    color: AppColors.textPrimary,
    width: DimensionsUtil.SCREEN_WIDTH / 3.4
  },
  sellerValue: {
    color: AppColors.textPrimary,
    width: DimensionsUtil.SCREEN_WIDTH / 2
  },
  bottomButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 20
  },
  sendOffer: {
    backgroundColor: AppColors.link,
    width: DimensionsUtil.SCREEN_WIDTH / 3.5,
    borderRadius: 10,
  },
  buyNow: {
    backgroundColor: AppColors.quickbuy,
    width: DimensionsUtil.SCREEN_WIDTH / 1.8,
    borderRadius: 10
  },
  sendOfferText: {
    color: AppColors.white,
    fontSize: FontSizes.medium,
    fontFamily: Fonts.semiBold,
    textAlign: 'center',
    height: DimensionsUtil.SCREEN_WIDTH / 9,
    textAlignVertical: 'center'
  }
});

export default CarDetailPortal;
