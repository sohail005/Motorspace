import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import AppHeaderCommon from '../../../components/AppHeaderCommon';
import AppText from '../../../components/AppText';
import AppImage from '../../../components/AppImage';
import AppTouchable from '../../../components/AppTouchable';

import { IMAGES } from '../../../assets/Images/ImagePath';
import { AppColors } from '../../../constants/colors';
import { styles } from './GettingStartedStyles';
import storageItem from '../../../utils/storageItem';

const GettingStarted = () => {
  const navigation = useNavigation();
  const [selectedType, setSelectedType] = useState(null); // 'private' | 'business' | null

  const handleConfirm = () => {
    if (selectedType === 'private') {
      navigation.navigate('PrivateDetails');
    } else if (selectedType === 'business') {
      navigation.navigate('BusinessDetails');
    }
  };
  const SetSelectedOption = (type) => {
    let isTypePrivate = type == 'private'
    console.log("type:", type,isTypePrivate);
    storageItem.setItem('isTypePrivate', isTypePrivate);
    setSelectedType(type)
  }
  const renderOption = (type, label, imageSource) => {
    const isSelected = selectedType === type;
    return (
      <AppTouchable
        onPress={() => SetSelectedOption(type)}
        style={[
          styles.ItemsConatiner,
          isSelected ? styles.selectedBorder : styles.unSelectedBorder,
        ]}
      >
        <AppImage source={imageSource} resizeMode="contain" style={styles.image} />
        <AppText style={styles.privately}>{label}</AppText>
      </AppTouchable>
    );
  };

  return (
    <View style={styles.container}>
      <AppHeaderCommon
        title=""
        onLeftPress={navigation.goBack}
        onRightPress={() => console.log('Logo tapped')}
      />

      <AppText style={styles.loginHeading}>Getting Started</AppText>

      <View style={styles.mainItemsConatiner}>
        {renderOption('private', 'I’m Buying and Selling Privately', IMAGES.private)}
        {renderOption('business', 'I’m Buying and Selling for a Business', IMAGES.bussiness)}
      </View>

      <View style={styles.buttonContainer}>
        <AppTouchable
          disabled={!selectedType}
          onPress={handleConfirm}
          style={[
            styles.confirmButton,
            {
              backgroundColor: selectedType
                ? AppColors.primary
                : AppColors.buttonDisabled,
            },
          ]}
        >
          <AppText style={styles.buttontext}>Confirm</AppText>
        </AppTouchable>
      </View>
    </View>
  );
};

export default GettingStarted;
