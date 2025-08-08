import React from 'react';
import { View, ScrollView, Dimensions } from 'react-native';
import AppHeader from '../../../components/AppHeader';
import AppText from '../../../components/AppText';
import AppImage from '../../../components/AppImage';
import AppTouchable from '../../../components/AppTouchable';
import AppBadge from '../../../components/AppBadge';
import { styles } from './SaleSuccessStyles';
import { IMAGES } from '../../../assets/Images/ImagePath';

const { width: screenWidth } = Dimensions.get('window');
const SaleSuccess = ({ navigation }) => {
    const handleBackPress = () => {
        navigation.goBack(); // Or navigate to dashboard
    };

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
    return (
        <View style={styles.container}>
            <AppHeader rightIcon={IMAGES.home} />
            <View style={{ position: 'relative' }}>
                <Zigzag color="#D2DDF7" />
            </View>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.imaegContainer}>
                    <AppImage source={IMAGES.successCelebration} style={styles.successImage} />
                </View>
                <AppText style={styles.title}>Congratulations!</AppText>
                <AppText style={styles.subtitle}>Motor sold successfully!</AppText>

                <View style={styles.receiptCard}>
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

                <AppTouchable style={styles.backButton} onPress={handleBackPress}>
                    <AppText style={styles.backButtonText}>Back to My Motorspace</AppText>
                </AppTouchable>
            </ScrollView>
        </View>
    );
};

export default SaleSuccess;
