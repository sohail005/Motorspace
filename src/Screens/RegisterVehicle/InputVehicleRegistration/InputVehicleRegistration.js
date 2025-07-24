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
import { AppColors } from '../../../constants/colors';

const InputVehicleRegistration = ({ navigation }) => {
    const [regNumber, setRegNumber] = useState('');

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
                {/* Top Reusable Header */}
                <AppHeaderCommon title='' onLeftPress={() => navigation.goBack()} />

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
                            style={{ borderColor: regNumber.length <= 6 ? AppColors.errorText : AppColors.greenLabel }}
                        />
                    </View>

                    {/* Success Message */}
                    {regNumber.length > 6 ?
                        <AppText style={styles.successText}>
                            Vehicle registration identified successfully!{"\n"}Click confirm to continue registration.
                        </AppText>
                        :
                        <AppText style={styles.ErrorText}>
                            Vehicle registration does not exist.{"\n"}Please try again.
                        </AppText>
                    }
                    {/* Confirm Button */}
                    <View style={styles.confirmButtonContainer}>
                        <AppTouchable
                            onPress={() => navigation.navigate("ConfirmVehicleInfo")}
                            disabled={regNumber.length < 6}
                            style={[styles.confirmButton, { opacity: regNumber.length > 6 ? 1 : 0.5 }]}>
                            <AppText style={styles.confirmButtonText}>Confirm</AppText>
                        </AppTouchable>
                    </View>
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
