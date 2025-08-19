import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { use, useCallback, useState } from 'react';
import AppHeader from '../../../components/AppHeader';
import { IMAGES } from '../../../assets/Images/ImagePath';
import SearchFilterBar from '../../../components/SearchFilterBar';
import AppText from '../../../components/AppText';
import Icon from 'react-native-vector-icons/Ionicons';
import AppTouchable from '../../../components/AppTouchable';
import AppFlatList from '../../../components/AppFlatList';
import { listings } from '../../Sellcars/SellCars/data';
import { styles } from './MyMotorsStyles';
import MyTotorsItem from './MyTotorsItem';
import { myMotorsData } from './data';
import NewOfferReceived from '../../Sellcars/Portals/NewOfferReceived';
import OffferConfirmationPortal from '../../Sellcars/Portals/OffferConfirmationPortal';
import { navigate, navigationRef } from '../../../navigation/NavigationService';
import { useNavigation } from '@react-navigation/native';
import { switchTab } from '../../../navigation/TabService';

const MyMotors = ({ }) => {
    const navigation = useNavigation();
    const [visibleCarDetails, setVisibleCarDetails] = useState(false);
    const [selectedCar, setSelectedCar] = useState(null);
    const [showNewOfferReceived, setShowNewOfferReceived] = useState(false);
    const [showDeclineConfirm, setShowDeclineConfirm] = useState(false);

    const goToSellCarsList = () => {
        switchTab(2); // Sell Cars tab index
        // navigate("ListMotorScreen");
        navigate('MainTabs', { screen: 'SellCarsTab', params: { screen: 'ListMotorScreen' } });
    };

    const onItemPress = useCallback((item) => {
        console.log(item);
        setSelectedCar(item);
        navigate("VehicleDetailsScreen", { car: item });
        // setVisibleCarDetails(true);
        // setShowNewOfferReceived(true)
    }, []);
    const onCounterOffer = () => {
        // setCounterOfferSent(true);
        setShowNewOfferReceived(false);
        //triggerNotificationPopup("Counter Offer Sent!", "You have sent a counter offer to John Jacobson.");
    };
    const onAcceptNewOffer = (data) => {
        // setNewAcceptOffer(true);
        setShowNewOfferReceived(false);
        // triggerNotificationPopup("Offer Accepted!", "You have accepted the new offer from John Jacobson.");
    };
    const onOfferDeclined = () => {
        setShowDeclineConfirm(false)
        setShowNewOfferReceived(false);
    };
    return (
        <View style={styles.container}>
            <AppHeader leftIcon rightIcon={IMAGES.home} />
            <View style={styles.scrollContent}>
                {!myMotorsData.length > 0 && (
                    <View style={styles.mainContent}>
                        <AppTouchable onPress={goToSellCarsList} style={styles.addMotorButton}>
                            <Icon name="add" size={32} color="white" />
                        </AppTouchable>
                        <AppText style={styles.addMotorText}>List a Motor for Sale</AppText>
                    </View>
                )}

                <AppFlatList
                    data={myMotorsData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <MyTotorsItem item={item} onPress={() => onItemPress(item)} />
                    )}
                    ListHeaderComponent={
                        <View style={{ paddingBottom: 15 }}>
                            <View style={styles.titleConatiner}>
                                <AppText style={styles.sectionTitle}>My Motors</AppText>
                                {myMotorsData.length > 0 && (
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

            <NewOfferReceived
                visible={showNewOfferReceived}
                onDecline={() => onOfferDeclined()}
                onCounter={onCounterOffer}
                onAccept={(data) => onAcceptNewOffer(data)}
                onDecideLater={() => { }}
                onDismiss={() => setShowNewOfferReceived(false)}
                car={selectedCar}
                userPrice={25559}
                offerPrice={24650}
            />
            <OffferConfirmationPortal
                title={"Decline Offer?"}
                visible={showDeclineConfirm}
                onDismiss={() => setShowDeclineConfirm(false)}
                // onDecline={handleDeclineConfirmed}
                onGoBack={() => setShowDeclineConfirm(false)}
            // openedFromAcceptOffer={acceptOffer}
            //onAccept={onAcceptOffer}
            />
        </View>
    );
};

export default MyMotors;
