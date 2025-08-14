import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import AppTouchable from '../../../components/AppTouchable';
import AppText from '../../../components/AppText';
import { AppColors } from '../../../constants/colors';
import { FontSizes } from '../../../constants/fontsizes';
import { Fonts } from '../../../constants/Fonts';
import AppImage from '../../../components/AppImage';
import { IMAGES } from '../../../assets/Images/ImagePath';
import DimensionsUtil from '../../../constants/Dimensions';

const MotorRegistered = ({ navigation, route }) => {
  const { make, model, registrationNumber } = route?.params || {
    make: 'Fiat Punto',
    model: '2025',
    registrationNumber: 'TY24 FGH'
  };

  const handleContinue = () => {
    // Navigate to next screen or perform action
    navigation?.navigate('RegisterYourFirstMotor');
  };

  const CarIcon = () => (
    <View style={styles.carIcon}>
      <AppImage
        source={IMAGES.MotospaceCar}
        resizeMode="contain"
        style={{ width: DimensionsUtil.SCREEN_WIDTH / 3, height: DimensionsUtil.SCREEN_WIDTH / 3 }}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Success Message */}
        <View style={styles.headerSection}>
          <AppText style={styles.title}>Motor{'\n'}Registered!</AppText>
        </View>

        {/* Vehicle Info Card */}
        <View style={styles.vehicleCard}>
          <CarIcon />
          <AppText style={styles.vehicleInfo}>
            {make}{model && `, ${model}`}
          </AppText>
          <View style={styles.registrationPlate}>
            <AppText style={styles.registrationText}>
              {registrationNumber}
            </AppText>
          </View>
        </View>

        {/* Continue Button */}
        <View style={styles.buttonSection}>
          <AppTouchable
            style={styles.continueButton}
            onPress={handleContinue}
            activeOpacity={0.8}
          >
            <AppText style={styles.continueButtonText}>Continue</AppText>
          </AppTouchable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.white,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    paddingTop: 60,
    paddingBottom: 40,
  },
  headerSection: {
    alignItems: 'center',
  },
  title: {
    fontSize: FontSizes.ultraLarge,
    fontWeight: 'bold',
    color: AppColors.primary, // Navy blue
    textAlign: 'center',
  },
  vehicleCard: {
    backgroundColor: AppColors.white,
    borderRadius: 16,
    padding: 32,
    alignItems: 'center',
    marginHorizontal: 16,

    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  carIcon: {
    marginBottom: 24,
  },
  carBody: {
    position: 'relative',
    alignItems: 'center',
  },
  carTop: {
    width: 60,
    height: 20,
    backgroundColor: AppColors.primary,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    marginBottom: -2,
  },
  carWindows: {
    width: 80,
    height: 32,
    backgroundColor: AppColors.primary,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  window: {
    width: 16,
    height: 12,
    backgroundColor: AppColors.white,
    borderRadius: 2,
  },
  vehicleInfo: {
    fontSize: FontSizes.xxLarge,
    fontFamily: Fonts.semiBold,
    color: AppColors.primary,
    marginBottom: 16,
    textAlign: 'center',
  },
  registrationPlate: {
    backgroundColor: AppColors.plateYellow, // Yellow background
    borderRadius: 6,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  registrationText: {
    fontSize: FontSizes.xLarge,
    color: AppColors.textPrimary,
    letterSpacing: 2,
    fontFamily: Fonts.UKNumberPlate,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    textAlignVertical: 'center'
  },
  buttonSection: {
    paddingHorizontal: 20,

  },
  continueButton: {
    backgroundColor: AppColors.primary,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center'

  },
  continueButtonText: {
    color: AppColors.white,
    fontSize: FontSizes.medium,
    fontFamily: Fonts.semiBold,
  },
});

export default MotorRegistered;