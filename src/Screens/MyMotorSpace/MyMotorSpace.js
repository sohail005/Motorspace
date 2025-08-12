import React, { use } from 'react';
import { View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from './MyMotorSpaceStyles';
import { AppColors } from '../../constants/colors';
import AppHeader from '../../components/AppHeader';
import { IMAGES } from '../../assets/Images/ImagePath';
import AppTouchable from '../../components/AppTouchable';
import AppImage from '../../components/AppImage';
import AppText from '../../components/AppText';
import { useNavigation } from '@react-navigation/native';

export default function MyMotorSpace() {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            {/* Top Bar */}
            <AppHeader rightIcon={IMAGES.home} />

            <ScrollView contentContainerStyle={styles.scrollContent}>
                {/* Screen Title */}
                <View style={styles.mymotorsapcaeHeaderContainer}>
                    <AppText style={styles.screenTitle}>My Motorspace</AppText>
                </View>

                {/* Profile Card */}
                <View style={styles.profileCard}>
                    <AppImage
                        source={IMAGES.private}
                        style={styles.avatar}
                    />
                    <View style={{ flex: 1 }}>
                        <AppText style={styles.name}>Thomas Lamb</AppText>
                        <AppText style={styles.subText}>Motorspace Testing</AppText>
                    </View>
                    <AppTouchable onPress={() => navigation.navigate("AccountSettings")}>
                        <Icon name="settings-sharp" size={30} color={AppColors.primary} />
                    </AppTouchable>
                </View>
                <View style={styles.divider} />

                {/* Menu Items */}
                {menuItems.map((item, index) => (
                    <React.Fragment key={index}>
                        <AppTouchable style={styles.menuItem}>
                            <View style={styles.innercarditemsConatiner}>
                                <View style={styles.iconLabelRow}>
                                    <Icon name={item.icon} size={24} color={AppColors.buttonOrange} />
                                    <AppText style={styles.menuLabel}>{item.label}</AppText>
                                </View>
                                {item.badge && (
                                    <View style={styles.badge}>
                                        <AppText style={styles.badgeText}>{item.badge}</AppText>
                                    </View>
                                )}
                            </View>
                        </AppTouchable>

                        {index === 2 && <View style={styles.divider} />}
                    </React.Fragment>
                ))}
            </ScrollView>
        </View>
    );
}

const menuItems = [
    { icon: 'car-outline', label: 'My Motors' },
    { icon: 'checkmark-done-circle-outline', label: 'Active Listings', badge: 2 },
    { icon: 'cash-outline', label: 'Sold Motors', badge: 1 },
    { icon: 'eye-outline', label: 'Watch List' },
    { icon: 'pricetag-outline', label: 'My Purchases' },
];
