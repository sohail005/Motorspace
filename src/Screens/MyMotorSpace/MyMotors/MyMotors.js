import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useState } from 'react';
import AppHeader from '../../../components/AppHeader';
import { IMAGES } from '../../../assets/Images/ImagePath';
import SearchFilterBar from '../../../components/SearchFilterBar';
import AppText from '../../../components/AppText';
import Icon from 'react-native-vector-icons/Ionicons';
import AppTouchable from '../../../components/AppTouchable';
import AppFlatList from '../../../components/AppFlatList';
import SellCarCardItem from '../../Sellcars/SellCars/SellCarCardItem';
import VehicleDetailsPortal from '../../Sellcars/Portals/VehicleDetailsPortal';
import { listings } from '../../Sellcars/SellCars/data';
import { styles } from './MyMotorsStyles';

const MyMotors = () => {
    const [visibleCarDetails, setVisibleCarDetails] = useState(false);
    const [selectedCar, setSelectedCar] = useState(null);

    const goToSellCarsList = () => {
        // switchTabAndNavigate(2, "ListMotorScreen");
    };

    const onItemPress = useCallback((item) => {
        console.log(item);
        setSelectedCar(item);
        setVisibleCarDetails(true);
    }, []);

    return (
        <View style={styles.container}>
            <AppHeader leftIcon rightIcon={IMAGES.home} />
            <View style={styles.scrollContent}>
                {!listings.length > 0 && (
                    <View style={styles.mainContent}>
                        <AppTouchable onPress={goToSellCarsList} style={styles.addMotorButton}>
                            <Icon name="add" size={32} color="white" />
                        </AppTouchable>
                        <AppText style={styles.addMotorText}>List a Motor for Sale</AppText>
                    </View>
                )}

                <AppFlatList
                    data={listings}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <SellCarCardItem item={item} onPress={() => onItemPress(item)} />
                    )}
                    ListHeaderComponent={
                        <View style={{ paddingBottom: 15 }}>
                            <View style={styles.titleConatiner}>
                                <AppText style={styles.sectionTitle}>My Motors</AppText>
                                {listings.length > 0 && (
                                    <AppTouchable onPress={goToSellCarsList} style={styles.addMotorButton}>
                                        <Icon name="add" size={32} color="white" />
                                    </AppTouchable>
                                )}
                            </View>
                            <SearchFilterBar />
                        </View>
                    }
                    contentContainerStyle={{ paddingBottom: 200 }}
                />
            </View>

            <VehicleDetailsPortal
                visible={visibleCarDetails}
                onDismiss={() => setVisibleCarDetails(false)}
                car={selectedCar}
                openedFromHome={true}
                offerSent={() => { }}
                ConfirmPurchase={() => { }}
            />
        </View>
    );
};

export default MyMotors;
