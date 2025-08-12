import React from 'react';
import { View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import AppHeader from '../../../components/AppHeader';
import AppText from '../../../components/AppText';
import AppImage from '../../../components/AppImage';
import AppTouchable from '../../../components/AppTouchable';
import AppBadge from '../../../components/AppBadge';
import { IMAGES } from '../../../assets/Images/ImagePath';
import Svg, { Path } from 'react-native-svg';
import DimensionsUtil from '../../../constants/Dimensions';
import { styles } from './../SaleSuccess/SaleSuccessStyles';
import { AppColors } from '../../../constants/colors';
import { FontSizes } from '../../../constants/fontsizes';
import { Fonts } from '../../../constants/Fonts';


const { width: screenWidth } = Dimensions.get('window');

const Zigzag = ({ color }) => {
    const zigzagPoints = [];
    const segments = 10; // Number of zigzag segments
    const segmentWidth = screenWidth / segments;

    for (let i = 0; i <= segments; i++) {
        const x = i * segmentWidth;
        const y = i % 2 === 0 ? 80 : 50; // Alternate between 80 and 50
        zigzagPoints.push(`${x} ${y}`);
    }

    const zigzagPath = `M0 80 ${zigzagPoints.map(point => `L${point}`).join(' ')} L${screenWidth} 80 Z`;

    return (
        <Svg width={screenWidth} height={80} viewBox={`0 0 ${screenWidth} 80`} style={{ position: 'absolute', top: 0 }}>
            <Path
                d={`M0 0 L${screenWidth} 0 L${screenWidth} 80 L0 80 Z`}
                fill={AppColors.zigzagColor}
            />
            <Path
                d={zigzagPath}
                fill={AppColors.defaultBackground}
            />
        </Svg>
    );
};

const ZigzagDown = ({ color }) => {
    const zigzagPoints = [];
    const segments = 8; // Increased number of segments for more prominent zigzag
    const cardWidth = DimensionsUtil.SCREEN_WIDTH / 1.1
    const segmentWidth = cardWidth / segments;

    for (let i = 0; i <= segments; i++) {
        const x = i * segmentWidth;
        const y = i % 2 === 0 ? 40 : 80; // More dramatic zigzag: 30 to 80
        zigzagPoints.push(`${x} ${y}`);
    }

    const zigzagPath = `M0 0 ${zigzagPoints.map(point => `L${point}`).join(' ')} L${cardWidth} 0 Z`;

    return (
        <Svg width={cardWidth} height={80} viewBox={`0 0 ${cardWidth} 80`} style={{ position: 'absolute', top: 0 }}>
            {/* <Path
        d={`M0 0 L${cardWidth} 0 L${cardWidth} 80 L0 80 Z`}
        fill="#D2DDF7"
      /> */}
            <Path
                d={zigzagPath}
                fill={AppColors.defaultBackground}
            />
        </Svg>
    );
};


const MotorUpForSale = ({ navigation }) => {
    const handleBackPress = () => {
        navigation.goBack(); // Or navigate to dashboard
    };


    return (
        <View style={[styles.container, { backgroundColor: AppColors.defaultBackground }]}>
            <AppHeader leftIcon rightIcon={IMAGES.home} />


            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={{}}>
                    <Zigzag color={AppColors.zigzagColor} />
                </View>
                <View style={styles.imaegContainer}>
                    <AppImage source={IMAGES.NoDamage} style={styles.successImage} />
                </View>
                <AppText style={styles.title}>Congratulations!</AppText>
                <AppText style={styles.subtitle}>Your Motor is up for Sale!</AppText>


                <View style={[styles.receiptCard, { backgroundColor: AppColors.white }]}>
                    <View style={{ marginBottom: 100 }}>
                        <ZigzagDown color={AppColors.defaultBackground} />
                    </View>
                    <View style={[styles.receiptCardMainContent, { padding: 16 }]}>
                        <AppText style={[styles.receiptTitle, { color: AppColors.quickbuy }]}>For Sale</AppText>

                        {/* <View style={styles.rowStart}>
                            <AppImage
                                source={IMAGES.private} // Or IMAGES.buyer
                                style={styles.avatar}
                                resizeMode="contain"
                            />
                            <View>
                                <AppText style={styles.name}>Sally Thimble</AppText>
                                <AppText style={styles.company}>Shark Fin Motors</AppText>
                            </View>
                        </View>

                        <View style={styles.divider} /> */}

                        <AppText style={[styles.carTitle, { fontSize: FontSizes.xxLarge }]}>Mercedes-Benz CLS</AppText>
                        <AppText style={[styles.carSubtitle, { fontSize: FontSizes.medium, color: AppColors.textPrimary }]}>CLS 350d AMG Line 4dr 9G-Tronic</AppText>

                        <View style={styles.regPlateContainer}>
                            <AppBadge text="LP19 RET" badgeStyle={styles.plateBadge} />
                        </View>
                        <View style={styles.dividerthin} />
                        <AppText style={innerstyles.capText}>CAP: £15,345</AppText>
                        <View style={styles.rowBetween}>
                            <AppText style={[styles.label, { fontSize: FontSizes.xLarge }]}>Set Price:</AppText>
                            <AppText style={styles.price}>£24,650</AppText>
                        </View>
                    </View>
                </View>


                <View style={innerstyles.buttonContainer}>
                    <AppTouchable style={innerstyles.activeListingButton} onPress={handleBackPress}>
                        <AppText style={innerstyles.backButtonText}>View Active Listings</AppText>
                    </AppTouchable>
                    <AppTouchable style={innerstyles.backButton} onPress={handleBackPress}>
                        <AppText style={innerstyles.backButtonText}>My Motorspace</AppText>
                    </AppTouchable>
                </View>
            </ScrollView>
        </View>
    );
};


export default MotorUpForSale;

const innerstyles = StyleSheet.create({
    capText: {
        color: AppColors.gobackButton,
        fontSize: FontSizes.large,
        fontFamily: Fonts.semiBold,
        alignSelf: 'flex-end'
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: 30,
    },
    backButton: {
        backgroundColor: AppColors.primary,
        // paddingVertical: 16,
        paddingHorizontal: 10,
        borderRadius: 10,
        width: (DimensionsUtil.SCREEN_WIDTH - 80) / 2,
        height: DimensionsUtil.SCREEN_WIDTH / 9,
        justifyContent: 'center'
    },
    activeListingButton: {
        backgroundColor: AppColors.buttonOrange,
        // paddingVertical: 16,
        paddingHorizontal: 10,
        borderRadius: 10,
        width: (DimensionsUtil.SCREEN_WIDTH - 80) / 2,
        height: DimensionsUtil.SCREEN_WIDTH / 9,
        justifyContent: 'center'
    },
    backButtonText: {
        color: AppColors.white,
        fontFamily: Fonts.semiBold,
        fontSize: FontSizes.mediumLarge,
        textAlign: 'center',
        textAlignVertical: 'center'
    },
})