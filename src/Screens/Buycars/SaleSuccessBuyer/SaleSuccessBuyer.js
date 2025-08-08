import React from 'react';
import { View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import AppHeader from '../../../components/AppHeader';
import AppText from '../../../components/AppText';
import AppImage from '../../../components/AppImage';
import AppTouchable from '../../../components/AppTouchable';
import AppBadge from '../../../components/AppBadge';
import { IMAGES } from '../../../assets/Images/ImagePath';
import { styles } from './SaleSuccessBuyerStyles';
import Svg, { Path } from 'react-native-svg';
import DimensionsUtil from '../../../constants/Dimensions';


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
                fill="#D2DDF7"
            />
            <Path
                d={zigzagPath}
                fill="white"
            />
        </Svg>
    );
};

const ZigzagDown = ({ color }) => {
    const zigzagPoints = [];
    const segments = 12; // Increased number of segments for more prominent zigzag
    const cardWidth = DimensionsUtil.SCREEN_WIDTH / 1.1
    const segmentWidth = cardWidth / segments;

    for (let i = 0; i <= segments; i++) {
        const x = i * segmentWidth;
        const y = i % 2 === 0 ? 30 : 80; // More dramatic zigzag: 30 to 80
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
                fill="white"
            />
        </Svg>
    );
};


const SaleSuccessBuyer = ({ navigation }) => {
    const handleBackPress = () => {
        navigation.goBack(); // Or navigate to dashboard
    };


    return (
        <View style={styles.container}>
            <AppHeader leftIcon rightIcon={IMAGES.home} />
            <View style={{}}>
                <Zigzag color="#D2DDF7" />
            </View>

            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.imaegContainer}>
                    <AppImage source={IMAGES.successCelebration} style={styles.successImage} />
                </View>
                <AppText style={styles.title}>Congratulations!</AppText>
                <AppText style={styles.subtitle}>Motor sold successfully!</AppText>


                <View style={styles.receiptCard}>
                    <View style={{ marginBottom: 100 }}>
                        <ZigzagDown color="#D2DDF7" />
                    </View>
                    <View style={styles.receiptCardMainContent}>
                        <AppText style={styles.receiptTitle}>Sale Receipt</AppText>

                        <View style={styles.rowStart}>
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

                        <View style={styles.divider} />

                        <AppText style={styles.carTitle}>Mercedes-Benz CLS</AppText>
                        <AppText style={styles.carSubtitle}>CLS 350d AMG Line 4dr 9G-Tronic</AppText>

                        <View style={styles.regPlateContainer}>
                            <AppBadge text="LP19 RET" badgeStyle={styles.plateBadge} />
                        </View>
                        <View style={styles.dividerthin} />
                        <View style={styles.rowBetween}>
                            <AppText style={styles.label}>Agreed Price:</AppText>
                            <AppText style={styles.price}>£24,650</AppText>
                        </View>
                    </View>
                </View>


                <View style={styles.buttonContainer}>
                    <AppTouchable style={styles.backButton} onPress={handleBackPress}>
                        <AppText style={styles.backButtonText}>Back to My Motorspace</AppText>
                    </AppTouchable>
                    <AppTouchable style={styles.ContactSellerButton} onPress={handleBackPress}>
                        <AppText style={styles.ContactSellerButtonText}>Contact Seller</AppText>
                    </AppTouchable>
                </View>
            </ScrollView>
        </View>
    );
};


export default SaleSuccessBuyer;