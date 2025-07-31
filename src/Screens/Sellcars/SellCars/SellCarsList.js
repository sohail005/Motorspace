import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
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

const listings = [
    {
        title: 'Audi A5',
        subtitle: '2.0 TFSI 150 S Line 4dr S Tronic',
        reg: 'DS74 KLM',
        status: 'PURCHASE REQUEST',
        cap: 35044,
        capStrike: 38335,
        price: '35,044',
        cardColor: '#DDF7E9',
    },
    {
        title: 'Mercedes-Benz CLS',
        subtitle: 'CLS 350d AMG Line 4dr 9G-Tronic',
        reg: 'LP19 RET',
        status: 'INCOMING OFFER',
        cap: 24550,
        capStrike: 27560,
        price: '24,650',
        cardColor: '#E9E9FF',
    },
    {
        title: 'Tesla Model S',
        subtitle: 'Performance Ludicrous AWD 5dr Auto',
        reg: 'LG19 UHD',
        status: 'SALE PENDING',
        cap: 33985,
        capStrike: 35090,
        price: '33,985',
        cardColor: '#F8F8F8',
    },
    {
        title: 'Audi SQ2',
        subtitle: 'SQ2 Quattro 5dr S Tronic',
        reg: 'DS74 KLM',
        status: 'FOR SALE',
        cap: 28752,
        capStrike: 29778,
        price: '28,752',
        cardColor: '#F8F8F8',
    },
    {
        title: 'Audi SQ2',
        subtitle: 'SQ2 Quattro 5dr S Tronic',
        reg: 'DS74 KLM',
        status: 'FOR SALE',
        cap: 28752,
        capStrike: 29778,
        price: '28,752',
        cardColor: '#F8F8F8',
    },
];

const SellCarsList = ({ navigation }) => {
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
                        <SellCarCardItem item={item} onPress={() => { }} />
                    )}
                    ListHeaderComponent={
                        <View>
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
                    contentContainerStyle={{ paddingBottom: 200 }}
                />
            </View>
        </View>
    )
}

export default SellCarsList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.defaultBackground,
    },
    scrollContent: {
        paddingHorizontal: 16,
        // paddingBottom: 100,
        // flex: 1,
    },
    sectionTitle: {
        fontSize: FontSizes.ultra,
        color: AppColors.primary,
        fontFamily: Fonts.bold,
    },
    mainContent: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    addMotorButton: {
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: AppColors.buttonOrange,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 12,
    },
    addMotorText: {
        fontSize: FontSizes.xLarge,
        color: AppColors.buttonOrange || '#333333',
        fontFamily: Fonts.bold
    },
    titleConatiner: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10
    }
});