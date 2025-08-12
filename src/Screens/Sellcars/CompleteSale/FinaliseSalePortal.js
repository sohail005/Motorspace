import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Linking } from 'react-native';
import { Modal, Portal, Checkbox } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

import AppText from '../../../components/AppText';
import AppTouchable from '../../../components/AppTouchable';

import { AppColors } from '../../../constants/colors';
import { Fonts } from '../../../constants/Fonts';
import { FontSizes } from '../../../constants/fontsizes';
import DimensionsUtil from '../../../constants/Dimensions';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import AppCircleCheckbox from '../../../components/AppCircleCheckbox';
import AppImage from '../../../components/AppImage';
import { IMAGES } from '../../../assets/Images/ImagePath';

const FinaliseSalePortal = ({ visible, onDismiss, onFinalise }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleLinkPress = () => {
    Linking.openURL('https://motorspace.app/terms');
  };

  const handleFinalise = () => {
    if (isChecked) onFinalise();
  };
  const translateY = useSharedValue(200); // start below screen

  useEffect(() => {
    setIsChecked(false)
    if (visible) {
      translateY.value = withTiming(0, { duration: 200 });
    } else {
      translateY.value = withTiming(200, { duration: 200 });
    }
  }, [visible]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={onDismiss}
        contentContainerStyle={styles.modalContainer}
      >
        <Animated.View style={[styles.popupContent, animatedStyle]}>
          <AppImage source={IMAGES.warning} style={styles.icon} />

          <AppText style={styles.title}>Is Everything in Order?</AppText>

          <AppText style={styles.description}>
            Make sure all the correct paperwork has been handed-over and all balances have been paid before finalising any motor sale.
          </AppText>

          <View style={styles.checkboxRow}>
            <AppCircleCheckbox
              checked={isChecked}
              onPress={() => setIsChecked(prev => !prev)}
            />
            <AppText style={styles.termsText}>
              By ticking this, you agree to have read and acknowledged the Motorspace webapp's{' '}
            </AppText>

          </View>
          <AppText style={styles.link} onPress={handleLinkPress}>
            Terms & Conditions (click to read)
          </AppText>
          <AppTouchable
            onPress={handleFinalise}
            style={[styles.button, !isChecked && styles.disabledButton]}
            disabled={!isChecked}
          >
            <AppText style={styles.buttonText}>Finalise Sale</AppText>
          </AppTouchable>

        </Animated.View>
        {/* Proceed Button */}

      </Modal>
    </Portal>

  );
};

const styles = StyleSheet.create({
  modalContainer: {
    marginHorizontal: 0,
    marginTop: 'auto', // Pushes to bottom
    width: '100%',
  },

  popupContent: {
    backgroundColor: AppColors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 30,
    alignItems: 'center',
    width: '100%',
  },

  icon: {
    marginBottom: 12,
    width: 50,
    height: 50,
  },
  title: {
    fontSize: FontSizes.xLarge,
    fontFamily: Fonts.bold,
    color: AppColors.textPrimary,
    textAlign: 'center',
    marginBottom: 12,
  },
  description: {
    textAlign: 'center',
    fontSize: FontSizes.medium,
    color: AppColors.textPrimary,
    marginBottom: 20,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',

  },
  termsText: {
    fontSize: FontSizes.smallMedium,
    color: AppColors.textSecondary,
    flex: 1,
    paddingLeft: 10,
  },
  link: {
    color: AppColors.link,
    fontFamily: Fonts.bold,
    fontSize: FontSizes.mediumLarge,

  },
  button: {
    backgroundColor: AppColors.quickbuy,
    width: DimensionsUtil.SCREEN_WIDTH - 80,
    height: DimensionsUtil.SCREEN_WIDTH / 9,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  disabledButton: {
    backgroundColor: AppColors.quickbuy,
    opacity: 0.5,
  },
  buttonText: {
    color: AppColors.white,
    fontSize: FontSizes.mediumLarge,
    fontFamily: Fonts.bold,
  },

});

export default FinaliseSalePortal;
