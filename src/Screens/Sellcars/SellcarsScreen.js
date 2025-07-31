import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppText from '../../components/AppText'
import AppHeader from '../../components/AppHeader'
import { IMAGES } from '../../assets/Images/ImagePath'
import SellCarsStack from '../../navigation/SellCarsStack'

const SellcarsScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <SellCarsStack />
    </View>
  )
}

export default SellcarsScreen

const styles = StyleSheet.create({})