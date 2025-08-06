import React from 'react';
import { View, ScrollView } from 'react-native';
import AppHeader from '../../../components/AppHeader';
import AppText from '../../../components/AppText';
import AppImage from '../../../components/AppImage';
import AppTouchable from '../../../components/AppTouchable';
import AppBadge from '../../../components/AppBadge';
import { styles } from './SaleSuccessStyles';
import { IMAGES } from '../../../assets/Images/ImagePath';

const SaleSuccess = ({ navigation }) => {
    const handleBackPress = () => {
        navigation.goBack(); // Or navigate to dashboard
    };

    return (
        <View style={styles.container}>
            <AppHeader rightIcon={IMAGES.home} />
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
