import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppHeader from '../../components/AppHeader'
import { IMAGES } from '../../assets/Images/ImagePath'
import HomeStack from '../../navigation/HomeStack'
import BuyCarsStack from '../../navigation/BuyCarsStack'

const BuycarsScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <BuyCarsStack />
    </View>
  )
}

export default BuycarsScreen

const styles = StyleSheet.create({})