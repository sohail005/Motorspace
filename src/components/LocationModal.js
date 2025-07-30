import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Modal, Portal, Text, IconButton, Divider } from 'react-native-paper';
import AppTouchable from './AppTouchable';
import AppInput from './AppInput'; // Your reusable input
import { AppColors } from '../constants/colors';
import { FontSizes } from '../constants/fontsizes';
import { Fonts } from '../constants/Fonts';
import DimensionsUtil from '../constants/Dimensions';

const LocationModal = ({
  visible,
  onDismiss,
  postcode,
  town,
  county,
  setPostcode,
  setTown,
  setCounty,
  onApply,
}) => {
  return (
    <Portal>
      <Modal visible={visible} onDismiss={onDismiss} contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>My Location</Text>
          <IconButton icon="close" onPress={onDismiss} />
        </View>

        <Divider style={styles.divider} />

        <AppInput
          label="Postcode"
          value={postcode}
          onChangeText={setPostcode}
          placeholder="Enter postcode"
          rightIcon="chevron-down"
          style={styles.input}
        />

        <AppInput
          label="Town/City"
          value={town}
          onChangeText={setTown}
          placeholder="Enter town or city"
          rightIcon="chevron-down"
          style={styles.input}
        />

        <AppInput
          label="County"
          value={county}
          onChangeText={setCounty}
          placeholder="Enter county"
          rightIcon="chevron-down"
          style={styles.input}
        />

        <AppTouchable style={styles.button} onPress={onApply}>
          <Text style={styles.buttonText}>Apply</Text>
        </AppTouchable>
      </Modal>
    </Portal>
  );
};

export default LocationModal;
const styles = StyleSheet.create({
    container: {
      backgroundColor: AppColors.white,
      borderRadius: 20,
      padding: 20,
      marginHorizontal: 20,
      elevation: 10,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    title: {
      fontSize: FontSizes.large,
      fontFamily: Fonts.bold,
      color: AppColors.link,
    },
    divider: {
      marginVertical: 16,
      height: 1,
      backgroundColor: AppColors.lightGray,
    },
    input: {
      marginBottom: 16,
    },
    button: {
      backgroundColor: AppColors.link || '#4C73F1',
      paddingVertical: 12,
      borderRadius: 12,
      alignItems: 'center',
      marginTop: 8,
      width:DimensionsUtil.SCREEN_WIDTH/2.5,
      alignSelf:'center'
    },
    buttonText: {
      color: AppColors.white,
      fontSize: FontSizes.medium,
      fontFamily: Fonts.semiBold,
    },
  });
  