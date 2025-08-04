import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import AppHeader from '../../../components/AppHeader'
import { IMAGES } from '../../../assets/Images/ImagePath'
import { AppColors } from '../../../constants/colors'
import SearchFilterBar from '../../../components/SearchFilterBar'
import AppText from '../../../components/AppText'
import { FontSizes } from '../../../constants/fontsizes'
import { Fonts } from '../../../constants/Fonts'
import Icon from 'react-native-vector-icons/Ionicons'
import AppTouchable from '../../../components/AppTouchable'
import AppFlatList from '../../../components/AppFlatList'
import SellCarCardItem from './SellCarCardItem'
import PurchaseRequestPortal from '../../../components/PurchaseRequestPortal'
import { listings } from './data'
import { styles } from './SellCarsListStyles'

const SellCarsList = ({ navigation }) => {
    const [visibleCarDetails, setVisibleCarDetails] = useState(false);
    const [selectedCar, setSelectedCar] = useState(null);

    const onItemPress = useCallback((item) => {
        console.log(item);
        setSelectedCar(item);
        setVisibleCarDetails(true);
    }, []);
    return (
        <View style={styles.container}>
            <AppHeader rightIcon={IMAGES.home} />
            <View style={styles.scrollContent}>

                {!listings.length > 0 &&
                    <View style={styles.mainContent}>
                        <AppTouchable
                            onPress={() => navigation.navigate("InputVehicleRegistration")}
                            style={styles.addMotorButton}
                        >
                            <Icon name="add" size={32} color="white" />
                        </AppTouchable>
                        <AppText style={styles.addMotorText}>List a Motor for Sale</AppText>
                    </View>
                }

                <AppFlatList
                    data={listings}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <SellCarCardItem
                            item={item}
                            onPress={() => onItemPress(item)} />
                    )}
                    ListHeaderComponent={
                        <View style={{ paddingBottom: 15 }}>
                            <View style={styles.titleConatiner}>
                                <AppText style={styles.sectionTitle}>Active Listings</AppText>
                                {listings.length > 0 &&
                                    <AppTouchable
                                        onPress={() => navigation.navigate("InputVehicleRegistration")}
                                        style={styles.addMotorButton}
                                    >
                                        <Icon name="add" size={32} color="white" />
                                    </AppTouchable>
                                }
                            </View>
                            <SearchFilterBar />
                        </View>
                    }
                    contentContainerStyle={{ paddingBottom: 200, }}
                />
            </View>
            <PurchaseRequestPortal
                visible={visibleCarDetails}
                onDismiss={() => setVisibleCarDetails(false)}
                car={selectedCar}
                openedFromHome={true}
                offerSent={() => { }}
                ConfirmPurchase={() => { }}
            />
        </View>
    )
}

export default SellCarsList

