import React, { useCallback, useState } from 'react';
import { View, Text, Animated, ScrollView, RefreshControl, TextInput, StyleSheet } from 'react-native';
import AppHeader from '../../../components/AppHeader';
import AppFlatList from '../../../components/AppFlatList';
import { FontSizes } from '../../../constants/fontsizes';
import { AppColors } from '../../../constants/colors';
import CarListItem from '../../../components/CarListItem';
import { IMAGES } from '../../../assets/Images/ImagePath';
import { Fonts } from '../../../constants/Fonts';
import AppText from '../../../components/AppText';
import AppImage from '../../../components/AppImage';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SearchIcon from 'react-native-vector-icons/Feather';
import FillterIcon from 'react-native-vector-icons/Octicons';
import AppTouchable from '../../../components/AppTouchable';
import { styles } from './BuyCarsListStyles';
import FilterSortModal from '../../../components/FilterSortModal/FilterSortModal';
import LocationModal from '../../../components/LocationModal';
import CarDetailPortal from '../../../components/CarDetailPortal';
import ConfirmPurchasePortal from './ConfirmPurchasePortal';
import ConfirmQuickBuyPortal from './ConfirmQuickBuyPortal';

export const vehicleData = [
  {
    id: '1',
    title: 'BMW 4 Series Gran Coupe',
    variant: '420d [190] M Sport 5dr Auto',
    numberPlate: 'BE20 UHG',
    condition: 'Like New',
    timeListed: '35m ago',
    price: '£17,849',
    dealer: {
      name: 'ProHatch Cars',
      address: '106 Jam Road, Bristol, BS47 2HJ',
      contactName: 'Jason Murray',
      phone: '0789 123 4567',
      email: 'bmw@prohatchcars.co.uk',
    },
    vehicleInfo: {
      year: 2020,
      color: 'Midnight',
      engine: '2.0 L',
      miles: '32,000',
      fuel: 'Diesel',
      transmission: 'Automatic',
    },
    actions: {
      showAdditionalInfo: true,
      showDamageReport: true,
    },
  },
  {
    id: '2',
    title: 'Audi A6 TDI S Line',
    variant: '40 TDI [204] Quattro 4dr S Tronic',
    numberPlate: 'AU21 A6T',
    condition: 'Used',
    timeListed: '1hr ago',
    price: '£23,995',
    dealer: {
      name: 'Metro Autohaus',
      address: '32 King’s Road, London, NW1 3BP',
      contactName: 'Elena Ford',
      phone: '0777 345 9012',
      email: 'sales@metroautohaus.co.uk',
    },
    vehicleInfo: {
      year: 2021,
      color: 'Black',
      engine: '2.0 L',
      miles: '21,000',
      fuel: 'Diesel',
      transmission: 'Automatic',
    },
    actions: {
      showAdditionalInfo: true,
      showDamageReport: false,
    },
  },
  {
    id: '3',
    title: 'Mercedes-Benz C-Class',
    variant: 'C200 AMG Line 4dr 9G-Tronic',
    numberPlate: 'MB22 AMG',
    condition: 'Certified',
    timeListed: '3hrs ago',
    price: '£28,499',
    dealer: {
      name: 'Star Auto Traders',
      address: '221 Victoria Ave, Manchester, M16 8EX',
      contactName: 'Rahul Singh',
      phone: '0745 998 2311',
      email: 'sales@starautotraders.co.uk',
    },
    vehicleInfo: {
      year: 2022,
      color: 'Silver',
      engine: '1.5 L',
      miles: '15,000',
      fuel: 'Petrol',
      transmission: 'Automatic',
    },
    actions: {
      showAdditionalInfo: true,
      showDamageReport: true,
    },
  },
  // ... (continues for other vehicles up to id: '11')
];
export const nearbyCarsData = [
  {
    id: '1',
    title: 'Alfa Romeo Giulia',
    variant: '2.0 Turbo Tributo Italiano 4dr Auto',
    numberPlate: 'EK74 PDF',
    condition: 'Used',
    timeListed: '2hrs ago',
    price: '£36,465',
    dealer: {
      name: 'Middlesex Motors',
      address: 'Ashby-De-La-Zouch, UK',
      contactName: 'Sales Team',
      phone: 'N/A',
      email: 'info@middlesexmotors.co.uk',
    },
    vehicleInfo: {
      year: 2022,
      color: 'Red',
      engine: '2.0 L',
      miles: '12,000',
      fuel: 'Petrol',
      transmission: 'Automatic',
    },
    actions: {
      showAdditionalInfo: true,
      showDamageReport: true,
    },
  },
  {
    id: '2',
    title: 'Nissan Qashqai',
    variant: '1.3 DiG-T MH 158 N-Connecta 5dr',
    numberPlate: 'FV22 YHT',
    condition: 'Used',
    timeListed: '2hrs ago',
    price: '£16,655',
    dealer: {
      name: 'West End Cars',
      address: 'Ashby-De-La-Zouch, UK',
      contactName: 'Sales Team',
      phone: 'N/A',
      email: 'info@westendcars.co.uk',
    },
    vehicleInfo: {
      year: 2022,
      color: 'Grey',
      engine: '1.3 L',
      miles: '14,000',
      fuel: 'Petrol',
      transmission: 'Manual',
    },
    actions: {
      showAdditionalInfo: false,
      showDamageReport: false,
    },
  },
  {
    id: '3',
    title: 'Mercedes-Benz A-Class',
    variant: 'A2000 AMG Line 5dr Auto',
    numberPlate: 'KJ69 DSA',
    condition: 'Used',
    timeListed: '4hrs ago',
    price: '£15,788',
    dealer: {
      name: 'Harbour Trades',
      address: 'Ashby-De-La-Zouch, UK',
      contactName: 'Sales Team',
      phone: 'N/A',
      email: 'sales@harbourtrades.co.uk',
    },
    vehicleInfo: {
      year: 2021,
      color: 'Black',
      engine: '2.0 L',
      miles: '25,000',
      fuel: 'Petrol',
      transmission: 'Automatic',
    },
    actions: {
      showAdditionalInfo: true,
      showDamageReport: false,
    },
  },
  {
    id: '4',
    title: 'Vauxhall Insignia Grand Sport',
    variant: '1.5T SRi VX-Line Nav 5dr',
    numberPlate: 'DY17 NGH',
    condition: 'Used',
    timeListed: '4hrs ago',
    price: '£10,399',
    dealer: {
      name: 'Alexander Matthews',
      address: 'Ashby-De-La-Zouch, UK',
      contactName: 'Sales Team',
      phone: 'N/A',
      email: 'info@alexandermatthews.co.uk',
    },
    vehicleInfo: {
      year: 2017,
      color: 'Silver',
      engine: '1.5 L',
      miles: '50,000',
      fuel: 'Diesel',
      transmission: 'Manual',
    },
    actions: {
      showAdditionalInfo: false,
      showDamageReport: true,
    },
  },
  {
    id: '5',
    title: 'Volkswagen Golf',
    variant: '160kW Premium 73 kWh 5dr Auto',
    numberPlate: 'KN22 PGJ',
    condition: 'Like New',
    timeListed: '5hrs ago',
    price: '£19,687',
    dealer: {
      name: 'West End Cars',
      address: 'Ashby-De-La-Zouch, UK',
      contactName: 'Sales Team',
      phone: 'N/A',
      email: 'info@westendcars.co.uk',
    },
    vehicleInfo: {
      year: 2022,
      color: 'White',
      engine: 'Electric',
      miles: '7,000',
      fuel: 'Electric',
      transmission: 'Automatic',
    },
    actions: {
      showAdditionalInfo: true,
      showDamageReport: true,
    },
  },
  {
    id: '6',
    title: 'Hyundai IONIQ 5',
    variant: '225kW Ultimate 73 kWh 5dr AWD Auto',
    numberPlate: 'TR71 WER',
    condition: 'Certified',
    timeListed: '8hrs ago',
    price: '£20,138',
    dealer: {
      name: 'West End Cars',
      address: 'Ashby-De-La-Zouch, UK',
      contactName: 'Sales Team',
      phone: 'N/A',
      email: 'info@westendcars.co.uk',
    },
    vehicleInfo: {
      year: 2021,
      color: 'Black',
      engine: 'Electric',
      miles: '10,000',
      fuel: 'Electric',
      transmission: 'Automatic',
    },
    actions: {
      showAdditionalInfo: true,
      showDamageReport: false,
    },
  },
];

const defaultValues = {
  sort: 'Most Recent',
  distance: 'Any',
  model: 'Any',
  price: 'Any',
  year: 'Any',
  mileage: 'Any',
};
const BuyCarsList = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [filtersCount, setFiltersCount] = useState(0);
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [visibleCarDetails, setVisibleCarDetails] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [popupTitle, setPopupTitle] = useState("");
  const [popupContent, setPopupContent] = useState("");
  const [showConfirmQuickBuyModal, setShowConfirmQuickBuyModal] = useState(false);
  const [selectedQuickBuyData, setSelectedQuickBuyData] = useState(null);


  const [postcode, setPostcode] = useState('');
  const [city, setCity] = useState('');
  const [county, setCounty] = useState('');
  const [activeFilters, setActiveFilters] = useState(defaultValues);

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);
  const [showOfferSent, setShowOfferSent] = useState(false);
  const slideAnim = useState(new Animated.Value(-100))[0];

  const triggerOfferSentPopup = () => {
    setShowOfferSent(true);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 400,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => {
        Animated.timing(slideAnim, {
          toValue: -100,
          duration: 400,
          useNativeDriver: true,
        }).start(() => setShowOfferSent(false));
      }, 3000);
    });
  };
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    triggerOfferSentPopup()
    // Simulate network fetch (replace this with real API)
    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  }, []);
  const onQuickBuyPress=(item)=>{
    setSelectedQuickBuyData(item);
    setShowConfirmQuickBuyModal(true)
  }
  const renderCarItem = ({ item }) => (
    <CarListItem
      title={item.title}
      subtitle={item.variant}
      badge={item.numberPlate}
      price={item.price}
      seller={item.dealer}
      time={item.timeListed}
      location={item.location}
      showLocation={item.showLocation}
      onPress={() => openDetails(item)}
      onQuickBuyPress={() => onQuickBuyPress(item)}
    />
  );
  function countAppliedFilters(filters) {
    let count = 0;
    for (const key in filters) {
      if (filters[key] !== defaultValues[key]) {
        count++;
      }
    }
    return count;
  }
  // Callback function to receive filter data from the modal
  const handleApplyFilters = (filters) => {
    console.log("filters:", filters);
    console.log('Number of keys in filters object:', countAppliedFilters(filters));
    setFiltersCount(countAppliedFilters(filters))
    setActiveFilters(filters);
  };
  const ClearFilters = () => {
    setActiveFilters(defaultValues);
    setFiltersCount(0);

  }
  const openDetails = (item) => {
    setSelectedCar(item);
    setVisibleCarDetails(true);
   
  };
  const offerSent = () => {
    setPopupTitle("Offer Sent!");
    setPopupContent("The seller has until 13:41 today to reply to your offer.")
    triggerOfferSentPopup();
  }
  const ConfirmPurchase = () => {
    setPopupTitle("Purchase Request Sent!");
    setPopupContent("The seller has until 13:41 today to accept or decline your purchase.")
    triggerOfferSentPopup();
  }
  const handleConfirmQuickBuy = () => {
    setShowConfirmQuickBuyModal(false)
    ConfirmPurchase()
  }
  return (
    <View style={styles.container}>
      <AppHeader rightIcon={IMAGES.home} />
      {showOfferSent && (
        <Animated.View style={[internalStyles.offerPopup, { transform: [{ translateY: slideAnim }] }]}>
          <View style={internalStyles.offerContent}>
            <AppTouchable onPress={() => setShowOfferSent(false)}>
              <FillterIcon name="x" size={26} color={AppColors.white} />
            </AppTouchable>
            <View style={{ marginLeft: 20 }}>
              <AppText style={internalStyles.offerTitle}>{popupTitle}</AppText>
              <AppText style={internalStyles.offerText}>
                {popupContent}
              </AppText>
            </View>

          </View>
        </Animated.View>
      )}
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[AppColors.primary]}
            tintColor={AppColors.primary}
            title="Refreshing..."
            titleColor={AppColors.primary}
          />
        }
      >
        <LocationModal
          visible={showLocationModal}
          onDismiss={() => setShowLocationModal(false)}
          postcode={postcode}
          setPostcode={setPostcode}
          city={city}
          setCity={setCity}
          county={county}
          setCounty={setCounty}
          onApply={() => {
            console.log({ postcode, city, county });
            setShowLocationModal(false);
          }}
        />
        <ConfirmQuickBuyPortal
          visible={showConfirmQuickBuyModal}
          onDismiss={() => setShowConfirmQuickBuyModal(false)}
          onConfirm={handleConfirmQuickBuy}
          vehicleTitle={selectedQuickBuyData?.title}
          vehicleSubtitle={selectedQuickBuyData?.variant}
          price={selectedQuickBuyData?.price}
                  />
        {/* --- MODAL INTEGRATION --- */}
        <FilterSortModal
          visible={modalVisible}
          onDismiss={hideModal}
          onApplyFilters={handleApplyFilters}
          initialFilters={activeFilters} // Pass current filters to the modal
        />
        <View style={styles.topListConatiner}>
          {/* Search and fillter bar */}
          <View style={styles.searchbardContainer}>
            <View style={styles.inputConatainer}>
              <View style={styles.iconConatiner}>
                <SearchIcon name="search" size={26} color={AppColors.primary} />
              </View>
              <TextInput
                style={styles.searchInput}
                allowFontScaling={false}
                placeholder="Search"
                placeholderTextColor={AppColors.grayOverlay}
                cursorColor={AppColors.primary}
              />
            </View>
            <AppTouchable onPress={() => showModal()} style={styles.fillterButton}>
              <FillterIcon name="filter" size={26} color={AppColors.primary} />
            </AppTouchable>
          </View>
          {/* showAppliedFillterContainer */}
          {(filtersCount > 0) &&
            <View style={styles.showAppliedFillterContainer}>
              <AppTouchable onPress={() => ClearFilters()} style={styles.closeIconButton}>
                <FillterIcon name="x" size={26} color={AppColors.white} />
              </AppTouchable>
              <View style={styles.filterCountContainer}>
                <AppText style={styles.fillterCountText}>{filtersCount} Filters Active</AppText>
              </View>
            </View>
          }

          <AppText style={styles.sectionTitle}>Recently Listed</AppText>
          <AppFlatList
            data={vehicleData}
            renderItem={renderCarItem}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
            emptyText="No recent listings found"
          />
          <AppTouchable style={styles.viewmoreButton}>
            <AppText style={styles.viewmore}>View More</AppText>
          </AppTouchable>
        </View>

        <View style={styles.bottomListConatiner}>
          <AppText style={styles.sectionTitle}>Cars Near Me</AppText>
          <AppTouchable onPress={() => setShowLocationModal(true)} style={styles.locationContiner}>
            <Icon name="location-arrow" size={14} color={AppColors.link} />
            <AppText style={styles.locationText}>Ashby-De-La-Zouch</AppText>
          </AppTouchable>
          <AppFlatList
            data={nearbyCarsData}
            renderItem={renderCarItem}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
            emptyText="No nearby cars found"
          />
          <AppTouchable style={styles.viewmoreButton}>
            <AppText style={styles.viewmore}>View More</AppText>
          </AppTouchable>
        </View>
      </ScrollView>
      <CarDetailPortal
        visible={visibleCarDetails}
        onDismiss={() => setVisibleCarDetails(false)}
        car={selectedCar}
        openedFromHome={true}
        offerSent={offerSent}
        ConfirmPurchase={ConfirmPurchase}
      />
    </View>
  );
};

export default BuyCarsList;
const internalStyles = StyleSheet.create({
  offerPopup: {
    position: 'absolute',
    top: 10,
    left: 10,
    right: 10,
    zIndex: 100,
    backgroundColor: AppColors.popupbg,
    borderRadius: 12,
    padding: 14,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 6,
  },
  offerContent: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  offerTitle: {
    color: AppColors.white,
    fontFamily: Fonts.bold,
    fontSize: FontSizes.medium,
  },
  offerText: {
    color: AppColors.white,
    fontFamily: Fonts.regular,
    fontSize: FontSizes.medium,
    marginTop: 4,
  },
  offerTime: {
    fontFamily: Fonts.bold,
    color: AppColors.white,
  },
});