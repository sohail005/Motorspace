import React, { useCallback, useState, useMemo } from 'react';
import { View, ScrollView, RefreshControl, Platform } from 'react-native';
import AppHeader from '../../../components/AppHeader';
import AppText from '../../../components/AppText';
import AppTouchable from '../../../components/AppTouchable';
import FillterIcon from 'react-native-vector-icons/Octicons';
import { useNavigation } from '@react-navigation/native';

// Local Imports
import { styles } from './BuyCarsListStyles';
import { IMAGES } from '../../../assets/Images/ImagePath';
import { defaultValues, nearbyCarsData, vehicleData } from './data';

// Component Imports
import FilterSortModal from '../../../components/FilterSortModal/FilterSortModal';
import LocationModal from '../../../components/LocationModal';
import CarDetailPortal from '../../../components/CarDetailPortal';
import ConfirmQuickBuyPortal from './ConfirmQuickBuyPortal';
import SearchFilterBar from '../../../components/SearchFilterBar';
import CarSection from '../../../components/CarSection';
import OfferSentPopup from '../../../components/OfferSentPopup'; // <-- New Extracted Component
import { AppColors } from '../../../constants/colors';

// New Extracted Component for the "Filters Active" bar
const AppliedFiltersBar = React.memo(({ count, onClear }) => {
    if (count === 0) return null;

    return (
        <View style={styles.showAppliedFillterContainer}>
            <AppTouchable onPress={onClear} style={styles.closeIconButton}>
                <FillterIcon name="x" size={26} color={AppColors.white} />
            </AppTouchable>
            <View style={styles.filterCountContainer}>
                <AppText style={styles.fillterCountText}>{count} Filters Active</AppText>
            </View>
        </View>
    );
});


const BuyCarsList = () => {
    const navigation = useNavigation();

    // State management
    const [refreshing, setRefreshing] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [showLocationModal, setShowLocationModal] = useState(false);
    const [visibleCarDetails, setVisibleCarDetails] = useState(false);
    const [selectedCar, setSelectedCar] = useState(null);
    const [showConfirmQuickBuyModal, setShowConfirmQuickBuyModal] = useState(false);
    const [selectedQuickBuyData, setSelectedQuickBuyData] = useState(null);
    const [activeFilters, setActiveFilters] = useState(defaultValues);
    const [location, setLocation] = useState({ postcode: '', city: '', county: '' });
    
    // State for the popup
    const [popupData, setPopupData] = useState({ visible: false, title: '', content: '' });

    // OPTIMIZATION: useMemo calculates the filter count only when activeFilters changes.
    const filtersCount = useMemo(() => {
        let count = 0;
        for (const key in activeFilters) {
            if (activeFilters[key] !== defaultValues[key]) {
                count++;
            }
        }
        return count;
    }, [activeFilters]);

    // OPTIMIZATION: All functions passed as props are wrapped in `useCallback`
    // to ensure they have a stable identity across re-renders.

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => setRefreshing(false), 1500);
    }, []);

    const showFilterModal = useCallback(() => setModalVisible(true), []);
    const hideFilterModal = useCallback(() => setModalVisible(false), []);
    const showLocation = useCallback(() => setShowLocationModal(true), []);
    const hideLocation = useCallback(() => setShowLocationModal(false), []);
    const hideCarDetails = useCallback(() => setVisibleCarDetails(false), []);
    const hideConfirmQuickBuy = useCallback(() => setShowConfirmQuickBuyModal(false), []);

    const handleApplyFilters = useCallback((filters) => {
        setActiveFilters(filters);
        hideFilterModal(); // Close modal on apply
    }, []);

    const clearFilters = useCallback(() => {
        setActiveFilters(defaultValues);
    }, []);

    const openDetails = useCallback((item) => {
        setSelectedCar(item);
        setVisibleCarDetails(true);
    }, []);

    const onQuickBuyPress = useCallback((item) => {
        setSelectedQuickBuyData(item);
        setShowConfirmQuickBuyModal(true);
    }, []);

    const triggerPopup = useCallback((title, content) => {
        setPopupData({ visible: true, title, content });
    }, []);

    const offerSent = useCallback(() => {
        triggerPopup("Offer Sent!", "The seller has until 13:41 today to reply to your offer.");
    }, [triggerPopup]);
    
    const confirmPurchase = useCallback(() => {
        hideConfirmQuickBuy();
        triggerPopup("Purchase Request Sent!", "The seller has until 13:41 today to accept or decline your purchase.");
        // Use a slight delay to allow popup to appear before navigating
        setTimeout(() => {
            navigation.navigate('SaleSuccessBuyer');
        }, 400);
    }, [navigation, triggerPopup]);

    const handleLocationApply = useCallback(() => {
        console.log(location);
        hideLocation();
    }, [location, hideLocation]);
    
    // Empty function for props that need it
    const doNothing = useCallback(() => {}, []);

    return (
        <View style={styles.container}>
            <AppHeader rightIcon={IMAGES.home} />
            <OfferSentPopup 
                data={popupData} 
                onDismiss={() => setPopupData(prev => ({ ...prev, visible: false }))} 
            />

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
                {/* --- MODALS --- */}
                <LocationModal
                    visible={showLocationModal}
                    onDismiss={hideLocation}
                    postcode={location.postcode}
                    setPostcode={val => setLocation(l => ({ ...l, postcode: val }))}
                    city={location.city}
                    setCity={val => setLocation(l => ({ ...l, city: val }))}
                    county={location.county}
                    setCounty={val => setLocation(l => ({ ...l, county: val }))}
                    onApply={handleLocationApply}
                />
                <ConfirmQuickBuyPortal
                    visible={showConfirmQuickBuyModal}
                    onDismiss={hideConfirmQuickBuy}
                    onConfirm={confirmPurchase}
                    vehicleTitle={selectedQuickBuyData?.title}
                    vehicleSubtitle={selectedQuickBuyData?.variant}
                    price={selectedQuickBuyData?.price}
                />
                <FilterSortModal
                    visible={modalVisible}
                    onDismiss={hideFilterModal}
                    onApplyFilters={handleApplyFilters}
                    initialFilters={activeFilters}
                />

                {/* --- CONTENT --- */}
                <View style={styles.topListConatiner}>
                    <View style={{ marginTop: 20 }}>
                        <SearchFilterBar onFilterPress={showFilterModal} />
                    </View>
                    
                    <AppliedFiltersBar count={filtersCount} onClear={clearFilters} />

                    <CarSection
                        title="Recently Listed"
                        data={vehicleData}
                        onItemPress={openDetails}
                        onQuickBuyPress={onQuickBuyPress}
                        onViewMore={doNothing} // Pass stable function
                    />
                </View>

                <CarSection
                    title="Cars Near Me"
                    isLocation
                    locationLabel="Ashby-De-La-Zouch"
                    onLocationPress={showLocation}
                    data={nearbyCarsData}
                    onItemPress={openDetails}
                    onQuickBuyPress={onQuickBuyPress}
                    onViewMore={doNothing} // Pass stable function
                />
            </ScrollView>

            <CarDetailPortal
                visible={visibleCarDetails}
                onDismiss={hideCarDetails}
                car={selectedCar}
                openedFromHome={true}
                offerSent={offerSent}
                ConfirmPurchase={confirmPurchase}
            />
        </View>
    );
};

export default BuyCarsList;