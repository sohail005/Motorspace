import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppHeader from '../../components/AppHeader'
import { IMAGES } from '../../assets/Images/ImagePath'

const BuycarsScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppHeader
        rightIcon={IMAGES.home}
      />
    </View>
  )
}

export default BuycarsScreen

const styles = StyleSheet.create({})