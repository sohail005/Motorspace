import React from 'react';
import { View } from 'react-native';
import AppText from '../../../components/AppText';
import AppImage from '../../../components/AppImage';
import AppTouchable from '../../../components/AppTouchable';
import { IMAGES } from '../../../assets/Images/ImagePath';
import { styles } from './WelcomeStyles';
import ProfileCard from '../../MyMotorSpace/ProfileCard';

const WelcomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <AppText style={styles.welcomeText}>Welcome to</AppText>
            <AppText style={styles.appName}>MOTORSPACE</AppText>
            <View style={styles.profilecardConatiner}>
                <ProfileCard
                    imageSource={IMAGES.MotospaceCar}
                    name="Thomas Lamb"
                    subtitle="Motorspace Testing"
                    onSettingsPress={() => console.log("Settings Pressed")}
                />
            </View>
            <AppTouchable onPress={() => navigation.navigate('TermsScreen')} style={styles.button}>
                <AppText style={styles.buttonText}>Let’s Go</AppText>
            </AppTouchable>
        </View>
    );
};

export default WelcomeScreen;
