import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppHeader from '../../../components/AppHeader'
import { AppColors } from '../../../constants/colors'
import InfoHeader from '../AdditionalInfo/InfoHeader'
import { useRoute } from '@react-navigation/native'
import CarDamageOverview from './CarDamageOverview'
import WarningContainer from '../AdditionalInfo/WarningContainer'

const BuyCarsDamageReport = ({ navigation }) => {
  const route = useRoute();
  const { title, variant, vehicleInfo } = route.params.car || {};
  console.log("route:", route);
  return (
    <View style={styles.container}>
      <AppHeader onLeftPress={() => navigation.goBack()} leftIcon rightIcon />
      <ScrollView contentContainerStyle={styles.Contentcontainer}>
        <InfoHeader
          title="Damage Report"
          subtitle={title}
          specLine={variant}
        />
        <View style={styles.carDamagesDetialConatiner}>
        <CarDamageOverview />
        </View>
        <WarningContainer
                    messages={[
                        'If you think information for this listing is incorrect or misleading, you can contact the seller directly',
                        'Alternatively, you can reach out to our free Helpline below',
                    ]}
                    onPress={() => {
                        // Call helpline or open dialer
                        console.log('Calling helpline...');
                    }}
                />
      </ScrollView>
    </View>
  )
}

export default BuyCarsDamageReport

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.defaultBackground,
    flex: 1,

  },
  Contentcontainer: {
    paddingBottom: 150,
  },
  carDamagesDetialConatiner: {
    backgroundColor: AppColors.white,
    borderRadius: 10,
    padding: 20
  }
})