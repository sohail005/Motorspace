import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppHeaderCommon from '../../components/AppHeaderCommon';
import AppText from '../../components/AppText';
import AppTouchable from '../../components/AppTouchable';
import { IMAGES } from '../../assets/Images/ImagePath';
import { styles } from './ApprovalPendingStyles';
import { AppColors } from '../../constants/colors';

const ApprovalPending = () => {
  const navigation = useNavigation();
  const [isApproved, setIsApproved] = useState(true);

  const handleViewMotors = () => {
    navigation.navigate('RecentlyListed', { isApproved });
  };

  const handleSetupProfileDetails = () => {
    if (isApproved) {
      navigation.navigate('LetsRegister');
    }
  };

  const iconSource = isApproved ? IMAGES.check : IMAGES.timeDrop;
  const mainMessage = isApproved
    ? 'Your profile has been approved!'
    : 'Your profile is being processed for approval';
  const subMessage = isApproved
    ? 'Finish Setting Up!'
    : 'Check back shortly!';
  const buttonText = isApproved
    ? 'Continue to Profile Set Up'
    : 'Profile Approval in Progress...';

  return (
    <View style={styles.container}>
      <AppHeaderCommon title="" onLeftPress={navigation.goBack} />

      <AppText style={styles.heading}>Profile Approval</AppText>
      <Image source={iconSource} style={styles.icon} resizeMode="contain" />

      <AppText style={styles.subtext}>{mainMessage}</AppText>
      <AppText style={styles.boldText}>{subMessage}</AppText>

      <AppTouchable
        disabled={!isApproved}
        style={[
          styles.disabledButton,
          {
            opacity: isApproved ? 1 : 0.3,
            backgroundColor: isApproved
              ? AppColors.buttonOrange
              : AppColors.primary,
          },
        ]}
        onPress={handleSetupProfileDetails}
      >
        <AppText style={styles.disabledButtonText}>{buttonText}</AppText>
      </AppTouchable>

      <View style={styles.viewmotorsButtonConatiner}>
        <AppTouchable style={styles.viewMotorsBtn} onPress={handleViewMotors}>
          <AppText style={styles.viewMotorsText}>
            View Motors Whilst You Wait
          </AppText>
        </AppTouchable>
      </View>
    </View>
  );
};

export default ApprovalPending;
