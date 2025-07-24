import React, { useState } from 'react';
import {
    View,
    Keyboard,
    TouchableWithoutFeedback
} from 'react-native';
import AppText from '../../../components/AppText';
import AppTouchable from '../../../components/AppTouchable';
import AppHeaderCommon from '../../../components/AppHeaderCommon';
import AppImage from '../../../components/AppImage';
import { IMAGES } from '../../../assets/Images/ImagePath';
import { styles } from './InputVehicleRegistrationStyles';
import AppVehicleRegistrationInput from '../../../components/AppVehicleRegistrationInput/AppVehicleRegistrationInput';

const InputVehicleRegistration = ({ navigation }) => {
    const [regNumber, setRegNumber] = useState('');

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
                {/* Top Reusable Header */}
                <AppHeaderCommon onLeftPress={() => navigation.goBack()} />

                {/* Main Content Wrapper */}
                <View style={styles.contentWrapper}>
                    {/* Title and Description */}
                    <AppText style={styles.title}>Input Your Vehicle’s Registration</AppText>
                    <AppText style={styles.subtitle}>
                        This way, we can securely retrieve all of your vehicle’s details directly from the official DVLA database.
                    </AppText>

                    {/* Registration Plate */}
                    <View style={styles.plateWrapper}>
                        <AppVehicleRegistrationInput
                            value={regNumber}
                            onChangeText={setRegNumber}
                        />
                    </View>

                    {/* Success Message */}
                    <AppText style={styles.successText}>
                        Vehicle registration identified successfully!{"\n"}Click confirm to continue registration.
                    </AppText>

                    {/* Confirm Button */}
                    <AppTouchable disabled={regNumber.length < 6}
                        style={[styles.confirmButton, { opacity: regNumber.length > 6 ? 1 : 0.5 }]}>
                        <AppText style={styles.confirmButtonText}>Confirm</AppText>
                    </AppTouchable>

                    {/* Bottom DVLA Logo */}
                    <View style={styles.bottomView}>
                        <AppImage

                            source={IMAGES.dvla_logo}
                            resizeMode="contain"
                            style={styles.dvlaLogo}
                        />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default InputVehicleRegistration;
