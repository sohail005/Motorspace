import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from './AccountSettingsStyles';
import AppTouchable from '../../../components/AppTouchable';
import AppText from '../../../components/AppText';
import AppImage from '../../../components/AppImage';
import { AppColors } from '../../../constants/colors';
import AppHeader from '../../../components/AppHeader';
import { IMAGES } from '../../../assets/Images/ImagePath';
import { CommonActions, useNavigation } from '@react-navigation/native';
import ProfileCard from '../ProfileCard';
import SignoutPortal from '../../../components/SignoutPortal';
import { navigate } from '../../../navigation/NavigationService';
import { appLogout } from '../../../utils/Functions/logoutService';

export default function AccountSettings() {
    const navigation = useNavigation()
    const [showSignout, setShowSignout] = useState(false);

    const handleSignout = () => {
        setShowSignout(false);
        appLogout();
    };
    const OnItemPress = (item) => {
        if (item.id == 0) {
            navigation.navigate("EditProfile")
        } else if (item.id == 3) {
            setShowSignout(true)
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
                <ProfileCard
                    imageSource={IMAGES.MotospaceCar}
                    name="Thomas Lamb"
                    subtitle="Motorspace Testing"
                    onSettingsPress={() => console.log("Settings Pressed")}
                />
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
            <SignoutPortal
                visible={showSignout}
                onDismiss={() => setShowSignout(false)}
                onConfirmSignout={handleSignout}
                onCancel={() => setShowSignout(false)}
            />
        </View>
    );
}

const menuItems = [
    { id: 0, icon: 'person-sharp', label: 'Edit Profile' },
    { id: 1, icon: 'help-circle', label: 'FAQs' },
    { id: 2, icon: 'information-circle', label: 'Terms & Conditions' },
    { id: 3, icon: 'exit-outline', label: 'Sign Out' },
];
