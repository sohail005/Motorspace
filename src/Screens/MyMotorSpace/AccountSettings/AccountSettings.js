import React from 'react';
import { View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from './AccountSettingsStyles';
import AppTouchable from '../../../components/AppTouchable';
import AppText from '../../../components/AppText';
import AppImage from '../../../components/AppImage';
import { AppColors } from '../../../constants/colors';
import AppHeader from '../../../components/AppHeader';
import { IMAGES } from '../../../assets/Images/ImagePath';
import { useNavigation } from '@react-navigation/native';

export default function AccountSettings() {
    const navigation = useNavigation()

    const OnItemPress = (item) => {
        if (item.id == 0) {
            navigation.navigate("EditProfile")
        }

    }
    return (
        <View style={styles.container}>
            {/* Top Bar */}
            <AppHeader leftIcon rightIcon={IMAGES.home} />

            <ScrollView contentContainerStyle={styles.scrollContent}>
                {/* Screen Title */}
                <View style={styles.mymotorsapcaeHeaderContainer}>
                    <AppText style={styles.screenTitle}>Account Settings</AppText>
                </View>

                {/* Profile Card */}
                <View style={styles.profileCard}>
                    <AppImage
                        source={IMAGES.MotospaceCar}
                        style={styles.avatar}
                    />
                    <View style={{ flex: 1 }}>
                        <AppText style={styles.name}>Thomas Lamb</AppText>
                        <AppText style={styles.subText}>Motorspace Testing</AppText>
                    </View>
                </View>
                <View style={styles.divider} />

                {/* Menu Items */}
                {menuItems.map((item, index) => (
                    <React.Fragment key={index}>
                        <AppTouchable onPress={() => OnItemPress(item)} style={styles.menuItem}>
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

                        {/* {index === 2 && <View style={styles.divider} />} */}
                    </React.Fragment>
                ))}
            </ScrollView>
        </View>
    );
}

const menuItems = [
    { id: 0, icon: 'person-sharp', label: 'Edit Profile' },
    { id: 1, icon: 'help-circle', label: 'FAQs' },
    { id: 2, icon: 'information-circle', label: 'Terms & Conditions' },
    { id: 3, icon: 'exit-outline', label: 'Sign Out' },
];
