import React from 'react';
import { View } from 'react-native';
import AppText from '../../../components/AppText';
import AppImage from '../../../components/AppImage';
import AppTouchable from '../../../components/AppTouchable';
import { IMAGES } from '../../../assets/Images/ImagePath';
import { styles } from './WelcomeStyles';

const WelcomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <AppText style={styles.welcomeText}>Welcome to</AppText>
            <AppText style={styles.appName}>MOTORSPACE</AppText>

            <View style={styles.userDetailscontainer}>
                <AppImage
                    source={IMAGES.private} // Replace with actual image
                    style={styles.profileImage}
                    resizeMode="cover"
                    placeholder
                />

                <AppText style={styles.name}>Thomas Lamb</AppText>
                <AppText style={styles.role}>Motorspace Testing</AppText>
            </View>
            <AppTouchable onPress={() => navigation.navigate('TermsScreen')} style={styles.button}>
                <AppText style={styles.buttonText}>Let’s Go</AppText>
            </AppTouchable>
        </View>
    );
};

export default WelcomeScreen;
