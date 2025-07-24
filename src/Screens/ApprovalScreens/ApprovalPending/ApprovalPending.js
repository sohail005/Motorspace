import React, { useState } from 'react';
import { View, Image } from 'react-native';
import AppHeaderCommon from '../../../components/AppHeaderCommon';
import AppText from '../../../components/AppText';
import AppTouchable from '../../../components/AppTouchable';
import { IMAGES } from '../../../assets/Images/ImagePath'; // make sure hourglass icon is here
import { useNavigation } from '@react-navigation/native';
import { styles } from './ApprovalPendingStyles';
import { AppColors } from '../../../constants/colors';

const ApprovalPending = () => {
  const navigation = useNavigation();
  const [isApproved, setIsApproved] = useState(true)
  const handleViewMotors = () => {
    navigation.navigate('RecentlyListed',{isApproved:isApproved}); // update route name as needed
  };

  return (
    <View style={styles.container}>
      <AppHeaderCommon title="" onLeftPress={() => navigation.goBack()} />

      <AppText style={styles.heading}>Profile Approval</AppText>

      <Image source={isApproved ? IMAGES.check : IMAGES.timeDrop} style={styles.icon} resizeMode="contain" />

      {isApproved ?
        <>
          <AppText style={styles.subtext}>Your profile has been approved!</AppText>
          <AppText style={styles.boldText}>Finish Setting Up!</AppText>
        </>
        :
        <>
          <AppText style={styles.subtext}>Your profile is being processed for approval</AppText>
          <AppText style={styles.boldText}>Check back shortly!</AppText>
        </>
      }

      <AppTouchable
      disabled={!isApproved}
        style={[styles.disabledButton, { opacity: isApproved ? 1 : 0.3, backgroundColor: isApproved ? AppColors.buttonOrange : AppColors.primary }]}
        onPress={() => { }}>
        <AppText style={styles.disabledButtonText}>{isApproved ? "Continue to Profile Set Up" : "Profile Approval in Progress..."}</AppText>
      </AppTouchable>

      <AppTouchable style={styles.viewMotorsBtn} onPress={handleViewMotors}>
        <AppText style={styles.viewMotorsText}>View Motors Whilst You Wait</AppText>
      </AppTouchable>
    </View>
  );
};

export default ApprovalPending;

