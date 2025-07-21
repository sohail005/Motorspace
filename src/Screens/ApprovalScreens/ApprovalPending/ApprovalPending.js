import React from 'react';
import { View, Image } from 'react-native';
import AppHeaderCommon from '../../../components/AppHeaderCommon';
import AppText from '../../../components/AppText';
import AppTouchable from '../../../components/AppTouchable';
import { IMAGES } from '../../../assets/Images/ImagePath'; // make sure hourglass icon is here
import { useNavigation } from '@react-navigation/native';
import { styles } from './ApprovalPendingStyles';

const ApprovalPending = () => {
  const navigation = useNavigation();

  const handleViewMotors = () => {
    navigation.navigate('MotorsHome'); // update route name as needed
  };

  return (
    <View style={styles.container}>
      <AppHeaderCommon title="" onRightPress={() => console.log('Logo')} />

      <AppText style={styles.heading}>Profile Approval</AppText>

      <Image source={IMAGES.timeDrop} style={styles.icon} resizeMode="contain" />

      <AppText style={styles.subtext}>Your profile is being processed for approval</AppText>
      <AppText style={styles.boldText}>Check back shortly!</AppText>

      <AppTouchable
        style={[styles.disabledButton, { opacity: 0.3 }]}
        onPress={() => { }}>
        <AppText style={styles.disabledButtonText}>Profile Approval in Progress...</AppText>
      </AppTouchable>

      <AppTouchable style={styles.viewMotorsBtn} onPress={handleViewMotors}>
        <AppText style={styles.viewMotorsText}>View Motors Whilst You Wait</AppText>
      </AppTouchable>
    </View>
  );
};

export default ApprovalPending;

