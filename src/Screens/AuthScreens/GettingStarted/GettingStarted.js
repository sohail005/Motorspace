import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import AppHeaderCommon from '../../../components/AppHeaderCommon';
import { styles } from './GettingStartedStyles';
import { useNavigation } from '@react-navigation/native';
import AppText from '../../../components/AppText';
import AppImage from '../../../components/AppImage';
import { IMAGES } from '../../../assets/Images/ImagePath';
import AppTouchable from '../../../components/AppTouchable';
import { AppColors } from '../../../constants/colors';

const GettingStarted = () => {
  const navigation = useNavigation();
  const [selectedType, setSelectedType] = useState(null); // 'private' or 'business'

  return (
    <View style={styles.container}>
      <AppHeaderCommon
        title=""
        onLeftPress={() => navigation.goBack()}
        onRightPress={() => console.log('Logo tapped')}
      />

      <AppText style={styles.loginHeading}>Getting Started</AppText>

      <View style={styles.mainItemsConatiner}>
        {/* Private Option */}
        <AppTouchable
          onPress={() => setSelectedType('private')}
          style={[
            styles.ItemsConatiner,
            selectedType === 'private' ? styles.selectedBorder : styles.unSelectedBorder,
          ]}
        >
          <AppImage resizeMode="contain" source={IMAGES.private} style={styles.image} />
          <AppText style={styles.privately}>I’m Buying and Selling Privately</AppText>
        </AppTouchable>

        {/* Business Option */}
        <AppTouchable
          onPress={() => setSelectedType('business')}
          style={[
            styles.ItemsConatiner,
            selectedType === 'business' ? styles.selectedBorder : styles.unSelectedBorder,
          ]}
        >
          <AppImage resizeMode="contain" source={IMAGES.bussiness} style={styles.image} />
          <AppText style={styles.privately}>I’m Buying and Selling for a Business</AppText>
        </AppTouchable>
      </View>

      <View style={styles.buttonContainer}>
        <AppTouchable disabled={selectedType == null}
          onPress={() => { }}
          style={[styles.confirmButton, { backgroundColor: selectedType == null ? AppColors.buttonDisabled : AppColors.primary }]}>
          <AppText style={styles.buttontext}>Confirm</AppText>
        </AppTouchable>
      </View>
    </View>
  );
};

export default GettingStarted;
