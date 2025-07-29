import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import AppHeader from '../../../components/AppHeader';
import AppFlatList from '../../../components/AppFlatList';
import { FontSizes } from '../../../constants/fontsizes';
import { AppColors } from '../../../constants/colors';
import CarListItem from '../../../components/CarListItem';
import { IMAGES } from '../../../assets/Images/ImagePath';

const recentlyListedData = [
  {
    id: '1',
    title: 'BMW 4 Series Gran...',
    subtitle: '2.0 Diesel Auto RWD 5dr Hatchback',
    badge: 'BE20 UHG',
    price: '£17,849',
    seller: 'Prototype Cars',
    time: '35m ago',
  },
  {
    id: '2',
    title: 'Lexus ES',
    subtitle: '2.5 Hybrid Auto FWD 5dr Saloon',
    badge: 'W21 ERR',
    price: '£23,395',
    seller: 'Alpha Car Sales',
    time: '1hr ago',
  },
];

const nearbyCarsData = [
  {
    id: '1',
    title: 'Alfa Romeo Giulia',
    subtitle: '2.0 Turbo Tributo Italiano 4dr Auto',
    badge: 'EK74 PDF',
    price: '£36,465',
    seller: 'Middlesex Motors',
    time: '2hrs ago',
    location: 'Ashby-De-La-Zouch',
    showLocation: true,
  },
  {
    id: '2',
    title: 'Nissan Qashqai',
    subtitle: '1.3 DiG-T MH 158 N-Connecta 5dr',
    badge: 'FV22 YHT',
    price: '£16,655',
    seller: 'West End Cars',
    time: '2hrs ago',
    location: 'Ashby-De-La-Zouch',
    showLocation: true,
  },
  {
    id: '3',
    title: 'Mercedes-Benz A-Class',
    subtitle: 'A2000 AMG Line 5dr Auto',
    badge: 'KJ69 DSA',
    price: '£15,788',
    seller: 'Harbour Trades',
    time: '4hrs ago',
    location: 'Ashby-De-La-Zouch',
    showLocation: true,
  },
  {
    id: '4',
    title: 'Vauxhall Insignia Grand Sport',
    subtitle: '1.5T SRi VX-Line Nav 5dr',
    badge: 'DY17 NGH',
    price: '£10,399',
    seller: 'Alexander Matthews',
    time: '4hrs ago',
    location: 'Ashby-De-La-Zouch',
    showLocation: true,
  },
  {
    id: '5',
    title: 'Volkswagen Golf',
    subtitle: '160kW Premium 73 kWh 5dr Auto',
    badge: 'KN22 PGJ',
    price: '£19,687',
    seller: 'West End Cars',
    time: '5hrs ago',
    location: 'Ashby-De-La-Zouch',
    showLocation: true,
  },
  {
    id: '6',
    title: 'Hyundai IONIQ 5',
    subtitle: '225kW Ultimate 73 kWh 5dr AWD Auto',
    badge: 'TR71 WER',
    price: '£20,138',
    seller: 'West End Cars',
    time: '8hrs ago',
    location: 'Ashby-De-La-Zouch',
    showLocation: true,
  },
];


const BuyCarsList = () => {
  const renderCarItem = ({ item }) => (
    <CarListItem
      title={item.title}
      subtitle={item.subtitle}
      badge={item.badge}
      price={item.price}
      seller={item.seller}
      time={item.time}
      location={item.location}
      showLocation={item.showLocation}
    />
  );

  return (
    <View style={styles.container}>
      <AppHeader rightIcon={IMAGES.home} />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.sectionTitle}>Recently Listed</Text>
        <AppFlatList
          data={recentlyListedData}
          renderItem={renderCarItem}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          emptyText="No recent listings found"
        />

        <Text style={styles.sectionTitle}>Cars Near Me</Text>
        <AppFlatList
          data={nearbyCarsData}
          renderItem={renderCarItem}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          emptyText="No nearby cars found"
        />
      </ScrollView>
    </View>
  );
};

export default BuyCarsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.defaultBackground,
  },
  scrollContent: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: FontSizes.large,
    fontWeight: 'bold',
    color: AppColors.primary,
    marginTop: 10,
    marginBottom: 6,
  },
});
