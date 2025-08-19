// screens/ListMotorScreen.js
import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from './ListMotorScreenStyles';
import AppText from '../../../../components/AppText';
import AppTouchable from '../../../../components/AppTouchable';
import { AppColors } from '../../../../constants/colors';
import AppHeader from '../../../../components/AppHeader';
import { IMAGES } from '../../../../assets/Images/ImagePath';
import { Fonts } from '../../../../constants/Fonts';
import CarDetailSetpricePortal from '../CarDetailSetpricePortal';
import { useDispatch } from 'react-redux';
import { setStatusBarColor } from '../../../../redux/features/user/userSlice';

const getStatusColor = (status) => {
    const colors = {
        ARCHIVED: AppColors.Blue_Subtext,
        IDLE: AppColors.textPrimary,
        'SALE PENDING': AppColors.quickbuy,
        'FOR SALE': AppColors.buttonOrange,
    };
    return colors[status] || AppColors.textPrimary;
};

const MotorCard = ({ numberPlate, title, variant, status, dateAdded, price, onPress }) => (
    <AppTouchable onPress={onPress} style={styles.cardContainer}>
        <AppText style={[styles.title]}>{title}</AppText>
        <AppText style={styles.subtitle}>{variant}</AppText>

        <View style={styles.rowBetween}>
            <View style={styles.badge}>
                <AppText style={styles.badgeText}>{numberPlate}</AppText>
            </View>
            <AppText style={styles.dateAdded}>Added: {dateAdded}</AppText>
        </View>

        <View style={styles.rowBetween}>
            <AppText style={styles.statusText}>
                Status:{' '}
                <AppText
                    style={[
                        styles.statusText,
                        { fontFamily: Fonts.bold, color: getStatusColor(status) },
                    ]}
                >
                    {status}
                </AppText>
            </AppText>
            {price ? (
                <AppText style={[styles.price, { color: getStatusColor(status) }]}>{price}</AppText>
            ) : null}
        </View>
    </AppTouchable>
);

const ListMotorScreen = ({ navigation }) => {
    const [showPortal, setShowPortal] = useState(false);
    const [selectedCar, setSelectedCar] = useState(null);
    const dispatch = useDispatch();

    const data = [
        {
            id: '1',
            title: 'BMW 4 Series Gran Coupe',
            variant: '420d [190] M Sport 5dr Auto',
            numberPlate: 'BE20 UHG',
            condition: 'Like New',
            timeListed: '35m ago',
            price: '£17,849',
            status: 'ARCHIVED',
            dateAdded: '26/05/25',
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
            status: 'IDLE',
            price: '£23,995',
            dateAdded: '26/05/25',
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
    ];

    const OnItemPress = (item) => {
        console.log("item:", item);
        setSelectedCar(item);
        setShowPortal(true);
    }
    OnAddMotorPress = () => {
        navigation.navigate('InputVehicleRegistration');
        dispatch(setStatusBarColor(AppColors.white));
    }
    return (
        <View style={styles.container}>
            <AppHeader leftIcon rightIcon={IMAGES.home} />

            <ScrollView contentContainerStyle={styles.scroll}>
                <AppText style={styles.pageTitle}>List a Motor for Sale</AppText>

                {data.map((item) => (
                    <MotorCard
                        onPress={() => OnItemPress(item)}
                        key={item.id}
                        {...item}
                    />
                ))}

                <View style={styles.mainContent}>
                    <AppTouchable
                        onPress={() => OnAddMotorPress()}
                        style={styles.addMotorButton}
                    >
                        <Icon name="add" size={32} color="white" />
                    </AppTouchable>
                    <AppText style={styles.addMotorText}>List a Motor for Sale</AppText>
                </View>
            </ScrollView>
            <CarDetailSetpricePortal
                visible={showPortal}
                onDismiss={() => setShowPortal(false)}
                car={selectedCar}
            />
        </View>
    );
};

export default ListMotorScreen;
