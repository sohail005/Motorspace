import React, { useState } from 'react';
import { View, StyleSheet, Linking } from 'react-native';
import { Modal, Portal, Checkbox } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

import AppText from '../../../components/AppText';
import AppTouchable from '../../../components/AppTouchable';

import { AppColors } from '../../../constants/colors';
import { Fonts } from '../../../constants/Fonts';
import { FontSizes } from '../../../constants/fontsizes';
import DimensionsUtil from '../../../constants/Dimensions';

const FinaliseSalePortal = ({ visible, onClose, onFinalise }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleLinkPress = () => {
    Linking.openURL('https://motorspace.app/terms');
  };

  const handleFinalise = () => {
    if (isChecked) onFinalise();
  };

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={onClose}
        contentContainerStyle={styles.modalContainer}
      >
        <View style={styles.popupContent}>
          <Icon name="warning" size={36} color={AppColors.warning} style={styles.icon} />

          <AppText style={styles.title}>Is Everything in Order?</AppText>

          <AppText style={styles.description}>
            Make sure all the correct paperwork has been handed-over and all balances have been paid before finalising any motor sale.
          </AppText>

          <View style={styles.checkboxRow}>
            <Checkbox
              status={isChecked ? 'checked' : 'unchecked'}
              onPress={() => setIsChecked(prev => !prev)}
            />
            <AppText style={styles.termsText}>
              By ticking this, you agree to have read and acknowledged the Motorspace webapp's{' '}
              <AppText style={styles.link} onPress={handleLinkPress}>
                Terms & Conditions (click to read)
              </AppText>
            </AppText>
          </View>

          <AppTouchable
            onPress={handleFinalise}
            style={[styles.button, !isChecked && styles.disabledButton]}
            disabled={!isChecked}
          >
            <AppText style={styles.buttonText}>Finalise Sale</AppText>
          </AppTouchable>
        </View>
      </Modal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },

  popupContent: {
    backgroundColor: AppColors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 24,
    alignItems: 'center',
    // Optional: add shadow if needed
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  icon: {
    marginBottom: 12,
  },
  title: {
    fontSize: FontSizes.large,
    fontFamily: Fonts.bold,
    color: AppColors.textPrimary,
    textAlign: 'center',
    marginBottom: 12,
  },
  description: {
    textAlign: 'center',
    fontSize: FontSizes.medium,
    color: AppColors.textSecondary,
    marginBottom: 20,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 24,
  },
  termsText: {
    fontSize: FontSizes.small,
    color: AppColors.textSecondary,
    flex: 1,
    paddingLeft: 10,
  },
  link: {
    color: AppColors.link,
    fontFamily: Fonts.bold,
  },
  button: {
    backgroundColor: AppColors.successGreen,
    width: DimensionsUtil.SCREEN_WIDTH - 80,
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: AppColors.disabledButton,
  },
  buttonText: {
    color: AppColors.white,
    fontSize: FontSizes.medium,
    fontFamily: Fonts.bold,
  },
});

export default FinaliseSalePortal;
