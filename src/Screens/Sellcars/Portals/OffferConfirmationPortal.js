import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Modal, Portal } from 'react-native-paper';
import AppText from '../../../components/AppText';
import AppTouchable from '../../../components/AppTouchable';
import { AppColors } from '../../../constants/colors';
import { FontSizes } from '../../../constants/fontsizes';
import { Fonts } from '../../../constants/Fonts';
import DimensionsUtil from '../../../constants/Dimensions';

const OffferConfirmationPortal = ({
  visible,
  onDismiss,
  onDecline,
  onGoBack,
  openedFromAcceptOffer = false,
  onAccept,
}) => {
  console.log('OffferConfirmationPortal rendered with openedFromAcceptOffer:', openedFromAcceptOffer);
  
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={onDismiss}
        contentContainerStyle={styles.modal}
        style={styles.overlay}
      >
        <AppText style={[styles.title, { color: openedFromAcceptOffer ? AppColors.quickbuy : AppColors.redLabel }]}>{openedFromAcceptOffer ? 'Accept Purchase?' : 'Decline Purchase?'}</AppText>

        {openedFromAcceptOffer ?
          <AppText style={styles.message}>
            Are you sure you want to accept{'\n'} this purchase request?
          </AppText>
          :
          <AppText style={styles.message}>
            Are you sure you want to decline{'\n'}this offer to purchase?
          </AppText>
        }

        <View style={styles.buttonRow}>
          <AppTouchable onPress={onGoBack} style={styles.backBtn}>
            <AppText style={styles.backText}>Go Back</AppText>
          </AppTouchable>
          {openedFromAcceptOffer ?
            <AppTouchable onPress={onAccept} style={styles.declineBtn}>
              <AppText style={[styles.declineText, { color: openedFromAcceptOffer ? AppColors.quickbuy : AppColors.redLabel }]}>Accept</AppText>
            </AppTouchable>
            :
            <AppTouchable onPress={onDecline} style={styles.declineBtn}>
              <AppText style={styles.declineText}>Decline</AppText>
            </AppTouchable>
          }
        </View>
      </Modal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.3)', // semi-transparent backdrop
  },
  modal: {
    marginHorizontal: 24,
    padding: 2,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: FontSizes.xLarge,
    fontFamily: Fonts.bold,
    color: AppColors.redLabel,
    marginVertical: 16,
  },
  message: {
    fontSize: FontSizes.large,
    color: AppColors.textPrimary,
    textAlign: 'center',
    marginBottom: 24,
    fontFamily: Fonts.regular,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: DimensionsUtil.SCREEN_WIDTH - 50,
    // padding: 10
  },
  backBtn: {
    paddingVertical: 18,
    backgroundColor: AppColors.defaultBackground,
    alignItems: 'center',
    width: (DimensionsUtil.SCREEN_WIDTH - 52) / 2,
    borderBottomLeftRadius: 10,
    // borderBottomRightRadius: 10,
    justifyContent: 'center',
  },
  declineBtn: {
    paddingVertical: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppColors.defaultBackground,
    width: (DimensionsUtil.SCREEN_WIDTH - 52) / 2,
    borderBottomRightRadius: 10,

  },
  backText: {
    color: AppColors.gobackButton,
    fontFamily: Fonts.bold,
    fontSize: FontSizes.medium,
    textAlign: 'center'
  },
  declineText: {
    color: AppColors.redLabel,
    fontFamily: Fonts.bold,
    fontSize: FontSizes.medium,
  },
});

export default OffferConfirmationPortal;
