import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Modal, Portal } from 'react-native-paper';
import AppText from '../../../components/AppText';
import AppTouchable from '../../../components/AppTouchable';
import { AppColors } from '../../../constants/colors';
import { FontSizes } from '../../../constants/fontsizes';
import { Fonts } from '../../../constants/Fonts';
import DimensionsUtil from '../../../constants/Dimensions';

const ConfirmPurchasePortal = ({
  visible,
  onDismiss,
  onConfirm,
  vehicleTitle,
  vehicleSubtitle,
  price,
}) => {
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={onDismiss}
        contentContainerStyle={styles.modal}
      >
        <AppText style={styles.heading}>Confirm Purchase</AppText>
        <AppText style={styles.question}>
          Do you wish to confirm the purchase request for the following vehicle?
        </AppText>

        <View style={styles.card}>
          <AppText style={styles.title}>{vehicleTitle}</AppText>
          <AppText style={styles.subtitle}>{vehicleSubtitle}</AppText>
          <AppText style={styles.price}>{price}</AppText>
        </View>

        <AppText style={styles.note}>
          <AppText style={styles.noteBold}>Please note:</AppText> If your purchase request is accepted, an invoice will be sent to your email address.
        </AppText>

        <View style={styles.buttonRow}>
          <AppTouchable style={styles.cancelButton} onPress={onDismiss}>
            <AppText style={styles.cancelText}>Go Back</AppText>
          </AppTouchable>
          <AppTouchable style={styles.confirmButton} onPress={onConfirm}>
            <AppText style={styles.confirmText}>Confirm</AppText>
          </AppTouchable>
        </View>
      </Modal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  modal: {
    marginHorizontal: 20,
    paddingTop: 20,
    borderRadius: 16,
    backgroundColor: AppColors.white,
  },
  heading: {
    fontSize: FontSizes.large,
    fontFamily: Fonts.semiBold,
    textAlign: 'center',
    color: AppColors.quickbuy,
    marginBottom: 12,
  },
  question: {
    fontSize: FontSizes.medium,
    textAlign: 'center',
    fontFamily: Fonts.medium,
    color: AppColors.textPrimary,
    marginBottom: 18,
    paddingHorizontal:30

  },
  card: {
    backgroundColor: AppColors.inputBackground,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontFamily: Fonts.bold,
    fontSize: FontSizes.large,
    color: AppColors.black,
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: Fonts.medium,
    fontSize: FontSizes.medium,
    color: AppColors.Blue_Subtext,
    textAlign: 'center',
    marginTop: 4,
  },
  price: {
    fontFamily: Fonts.bold,
    fontSize: FontSizes.xxLarge,
    color: AppColors.quickbuy,
    marginTop: 8,
  },
  note: {
    fontSize: FontSizes.small,
    color: AppColors.grayText,
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: Fonts.medium,
    paddingHorizontal:30
  },
  noteBold: {
    fontFamily: Fonts.bold,
    color: AppColors.black,
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
  confirmButton: {
    backgroundColor: AppColors.lightGray,
    alignItems: 'center',
    width: (DimensionsUtil.SCREEN_WIDTH - 42) / 2,
    borderBottomRightRadius: 12,
    height: DimensionsUtil.SCREEN_WIDTH / 9,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  cancelText: {
    fontFamily: Fonts.bold,
    color: AppColors.gobackButton,
    fontSize: FontSizes.medium
  },
  confirmText: {
    fontFamily: Fonts.bold,
    color: AppColors.quickbuy,
    fontSize: FontSizes.medium
  },
});

export default ConfirmPurchasePortal;
