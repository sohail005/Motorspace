import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { AppColors } from '../../constants/colors';
import AppText from '../../components/AppText';
import { styles } from './RecentlyListedStyles';
import AppHeader from '../../components/AppHeader';
import { useDispatch } from 'react-redux';
import { setStatusBarColor } from '../../redux/features/user/userSlice';
import AppFlatList from '../../components/AppFlatList';
import { useNavigation, useRoute } from '@react-navigation/native';
import RecentlyListItem from '../../components/RecentlyListItem';
import AppTouchable from '../../components/AppTouchable';
import CarDetailPortal from '../../components/CarDetailPortal';

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
    {
        id: '4',
        title: 'Volkswagen Golf GTI',
        variant: '2.0 TSI GTI 5dr DSG',
        numberPlate: 'VW19 GTI',
        condition: 'Used',
        timeListed: '10m ago',
        price: '£19,750',
        dealer: {
            name: 'Highway Motors',
            address: '88 Eastern Road, Norwich, NR1 4DZ',
            contactName: 'Ben Clarkson',
            phone: '0791 213 4455',
            email: 'info@highwaymotors.co.uk',
        },
        vehicleInfo: {
            year: 2019,
            color: 'Red',
            engine: '2.0 L',
            miles: '29,000',
            fuel: 'Petrol',
            transmission: 'Automatic',
        },
        actions: {
            showAdditionalInfo: true,
            showDamageReport: false,
        },
    },
    {
        id: '5',
        title: 'Ford Focus ST-Line',
        variant: '1.5 EcoBlue ST-Line X 5dr',
        numberPlate: 'FO20 CUS',
        condition: 'Like New',
        timeListed: 'Just now',
        price: '£14,500',
        dealer: {
            name: 'Trusty Motors',
            address: '14 Crown Lane, Leeds, LS10 2RR',
            contactName: 'Lucy Moore',
            phone: '0780 998 1144',
            email: 'sales@trustymotors.co.uk',
        },
        vehicleInfo: {
            year: 2020,
            color: 'Blue',
            engine: '1.5 L',
            miles: '18,500',
            fuel: 'Diesel',
            transmission: 'Manual',
        },
        actions: {
            showAdditionalInfo: false,
            showDamageReport: true,
        },
    },
    {
        id: '6',
        title: 'Tesla Model 3',
        variant: 'Long Range AWD 4dr Auto',
        numberPlate: 'EV22 TES',
        condition: 'New',
        timeListed: '20m ago',
        price: '£37,999',
        dealer: {
            name: 'GreenDrive EVs',
            address: '2 Solar Way, Milton Keynes, MK9 1FE',
            contactName: 'Tina Allen',
            phone: '0712 567 4321',
            email: 'contact@greendrive.co.uk',
        },
        vehicleInfo: {
            year: 2023,
            color: 'Pearl White',
            engine: 'Electric',
            miles: '5,000',
            fuel: 'Electric',
            transmission: 'Automatic',
        },
        actions: {
            showAdditionalInfo: true,
            showDamageReport: false,
        },
    },
    {
        id: '7',
        title: 'Hyundai Tucson Hybrid',
        variant: '1.6 T-GDi Premium 5dr 2WD Hybrid',
        numberPlate: 'HY21 BND',
        condition: 'Certified',
        timeListed: '45m ago',
        price: '£21,450',
        dealer: {
            name: 'City Hyundai',
            address: '19 Hill Street, Birmingham, B1 1PU',
            contactName: 'Hassan Malik',
            phone: '0765 992 1188',
            email: 'sales@cityhyundai.co.uk',
        },
        vehicleInfo: {
            year: 2021,
            color: 'White',
            engine: '1.6 L Hybrid',
            miles: '13,000',
            fuel: 'Hybrid',
            transmission: 'Automatic',
        },
        actions: {
            showAdditionalInfo: true,
            showDamageReport: true,
        },
    },
    {
        id: '8',
        title: 'Kia Sportage',
        variant: '1.6 CRDi 48V ISG GT-Line',
        numberPlate: 'KIA20 GTR',
        condition: 'Used',
        timeListed: '1d ago',
        price: '£18,899',
        dealer: {
            name: 'AutoKia Center',
            address: '55 Ringway, Coventry, CV2 2LY',
            contactName: 'James Lee',
            phone: '0790 123 4578',
            email: 'sales@autokia.co.uk',
        },
        vehicleInfo: {
            year: 2020,
            color: 'Dark Grey',
            engine: '1.6 L',
            miles: '22,000',
            fuel: 'Diesel',
            transmission: 'Manual',
        },
        actions: {
            showAdditionalInfo: false,
            showDamageReport: false,
        },
    },
    {
        id: '9',
        title: 'Toyota Corolla',
        variant: '1.8 VVT-i Hybrid Icon Tech',
        numberPlate: 'TY21 COR',
        condition: 'Like New',
        timeListed: '2d ago',
        price: '£17,290',
        dealer: {
            name: 'Toyota Town',
            address: '75 Oak Avenue, Reading, RG1 3LJ',
            contactName: 'Sophie Tran',
            phone: '0732 555 1020',
            email: 'info@toyotatown.co.uk',
        },
        vehicleInfo: {
            year: 2021,
            color: 'Silver',
            engine: '1.8 L',
            miles: '10,000',
            fuel: 'Hybrid',
            transmission: 'Automatic',
        },
        actions: {
            showAdditionalInfo: true,
            showDamageReport: false,
        },
    },
    {
        id: '10',
        title: 'Nissan Qashqai',
        variant: '1.3 DiG-T Acenta Premium 5dr',
        numberPlate: 'NS19 QSQ',
        condition: 'Used',
        timeListed: '30m ago',
        price: '£16,399',
        dealer: {
            name: 'Nissan Drive',
            address: '12 Motor Lane, Glasgow, G1 5HL',
            contactName: 'Craig Hunter',
            phone: '0711 998 2233',
            email: 'sales@nissandrive.co.uk',
        },
        vehicleInfo: {
            year: 2019,
            color: 'Black',
            engine: '1.3 L',
            miles: '40,000',
            fuel: 'Petrol',
            transmission: 'Manual',
        },
        actions: {
            showAdditionalInfo: false,
            showDamageReport: true,
        },
    },
    {
        id: '11',
        title: 'Peugeot 3008 GT',
        variant: '1.5 BlueHDi GT Line Premium',
        numberPlate: 'PE22 GTL',
        condition: 'Certified',
        timeListed: '1hr ago',
        price: '£20,250',
        dealer: {
            name: 'Elite Motors',
            address: '4 Sunrise Blvd, Liverpool, L5 2GT',
            contactName: 'Amelia Brooks',
            phone: '0782 445 6643',
            email: 'amelia@elitemotors.co.uk',
        },
        vehicleInfo: {
            year: 2022,
            color: 'Navy Blue',
            engine: '1.5 L',
            miles: '8,000',
            fuel: 'Diesel',
            transmission: 'Automatic',
        },
        actions: {
            showAdditionalInfo: true,
            showDamageReport: true,
        },
    },
];

const RecentlyListed = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const route = useRoute();
    const { isApproved } = route.params;
    useEffect(() => {
        dispatch(setStatusBarColor(AppColors.primary));
    }, []);
    const [selectedCar, setSelectedCar] = useState(null);
    const [visible, setVisible] = useState(false);
    
    const openDetails = (item) => {
      setSelectedCar(item);
      setVisible(true);
    };
    return (
        <View style={styles.container}>
            <AppHeader
                leftIcon
                rightIcon
                onLeftPress={() => navigation.goBack()}
            />

            <View style={styles.containerMain}>
                <AppFlatList
                    data={vehicleData}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <RecentlyListItem item={item} onPress={() => openDetails(item)}/>}
                    emptyText="No cars listed"
                    stickyHeaderHiddenOnScroll={true}
                    stickyHeaderIndices={[0]}
                    ListHeaderComponent={
                        <View style={styles.listHeaderContainer}>
                            <AppText style={styles.heading}>Recently Listed</AppText>
                        </View>
                    }
                />
            </View>

            <AppTouchable
                disabled={!isApproved}
                style={[styles.confirmButton, { opacity: isApproved ? 1 : 0.5, backgroundColor: isApproved ? AppColors.buttonOrange : AppColors.primary }]}
                onPress={() => { }}>
                <AppText style={styles.confirmText}>{isApproved ? "Continue to Profile Set Up" : "Profile Approval in Progress..."}</AppText>
            </AppTouchable>
            <CarDetailPortal visible={visible} onDismiss={() => setVisible(false)} car={selectedCar} />
        </View>
    );
};


export default RecentlyListed;


