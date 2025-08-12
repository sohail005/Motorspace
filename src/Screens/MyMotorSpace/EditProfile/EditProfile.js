import React from 'react';
import { View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from './EditProfileStyles';
import AppTouchable from '../../../components/AppTouchable';
import AppText from '../../../components/AppText';
import AppImage from '../../../components/AppImage';
import { AppColors } from '../../../constants/colors';
import AppHeader from '../../../components/AppHeader';
import { IMAGES } from '../../../assets/Images/ImagePath';
import ProfileCard from '../ProfileCard';

export default function EditProfile() {
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

            </ScrollView>
        </View>
    );
}

const menuItems = [
    { icon: 'person-sharp', label: 'Edit Profile' },
    { icon: 'help-circle', label: 'FAQs' },
    { icon: 'information-circle', label: 'Terms & Conditions' },
    { icon: 'exit-outline', label: 'Sign Out' },
];
