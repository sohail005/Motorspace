import React, { useCallback, useState } from 'react';
import { View, Text, Animated, ScrollView, RefreshControl, StyleSheet, Platform } from 'react-native';
import AppHeader from '../../../components/AppHeader';
import { FontSizes } from '../../../constants/fontsizes';
import { AppColors } from '../../../constants/colors';
import { IMAGES } from '../../../assets/Images/ImagePath';
import { Fonts } from '../../../constants/Fonts';
import AppText from '../../../components/AppText';
import FillterIcon from 'react-native-vector-icons/Octicons';
import AppTouchable from '../../../components/AppTouchable';
import { styles } from './BuyCarsListStyles';
import FilterSortModal from '../../../components/FilterSortModal/FilterSortModal';
import LocationModal from '../../../components/LocationModal';
import CarDetailPortal from '../../../components/CarDetailPortal';
import ConfirmQuickBuyPortal from './ConfirmQuickBuyPortal';
import { defaultValues, nearbyCarsData, vehicleData } from './data';
import SearchFilterBar from '../../../components/SearchFilterBar';
import CarSection from '../../../components/CarSection';
import { useNavigation } from '@react-navigation/native';

const BuyCarsList = () => {
  const navigation = useNavigation();
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
    // Simulate network fetch (replace this with real API)
    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  }, []);
  const onQuickBuyPress = useCallback((item) => {
    setSelectedQuickBuyData(item);
    setShowConfirmQuickBuyModal(true);
  }, []);

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
  const ClearFilters = useCallback(() => {
    setActiveFilters(defaultValues);
    setFiltersCount(0);
  }, []);
  const openDetails = useCallback((item) => {
    setSelectedCar(item);
    setVisibleCarDetails(true);
  }, []);
  const offerSent = () => {
    setPopupTitle("Offer Sent!");
    setPopupContent("The seller has until 13:41 today to reply to your offer.");
    triggerOfferSentPopup();
  }
  const ConfirmPurchase = () => {
    setPopupTitle("Purchase Request Sent!");
    setPopupContent("The seller has until 13:41 today to accept or decline your purchase.");
    triggerOfferSentPopup();
    setTimeout(() => {
      navigation.navigate('SaleSuccessBuyer'); // Assuming you want to navigate to Home after confirming purchase

    }, 100);
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
            tintColor={AppColors.primary}
            title="Refreshing..."
            titleColor={AppColors.primary}
            {...(Platform.OS === 'android' && { colors: [AppColors.primary] })}
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
          <View style={{ marginTop: 20 }}>
            <SearchFilterBar onFilterPress={showModal} />
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

          <CarSection
            title="Recently Listed"
            data={vehicleData}
            onItemPress={openDetails}
            onQuickBuyPress={onQuickBuyPress}
            onViewMore={() => { }}
          />
        </View>

        <CarSection
          title="Cars Near Me"
          isLocation
          locationLabel="Ashby-De-La-Zouch"
          onLocationPress={() => setShowLocationModal(true)}
          data={nearbyCarsData}
          onItemPress={openDetails}
          onQuickBuyPress={onQuickBuyPress}
          onViewMore={() => { }}
        />
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