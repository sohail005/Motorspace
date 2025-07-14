import React, { useRef, useState } from 'react';
import {
    View,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    ScrollView
} from 'react-native';
import AppHeaderCommon from '../../../components/AppHeaderCommon';
import { useNavigation } from '@react-navigation/native';
import AppText from '../../../components/AppText';
import AppImage from '../../../components/AppImage';
import { IMAGES } from '../../../assets/Images/ImagePath';
import { styles } from './OtpScreenStyles'; // ✅ correct default import
import OtpInput from '../../../components/OtpInput';
import AppTouchable from '../../../components/AppTouchable';

const OtpScreen = () => {
    const otpRef = useRef(null);
    const [isResend, setIsResend] = useState(false);
    const [otp, setOtp] = useState(false);
    const navigation = useNavigation();
    const handleOtpComplete = code => {
        console.log(code);
        setOtp(code)
    };
    const handleResend = () => {
        setIsResend(true)
        setOtp("");
        otpRef.current?.clear(); // clear OTP input
    }
    const handleSubmit = () => {
        navigation.navigate("EmailVerifiedScreen")
    }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}
            >
                <ScrollView
                    contentContainerStyle={{ flex: 1 }}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                >
                    <AppHeaderCommon
                        title=""
                        onLeftPress={() => navigation.goBack()}
                        onRightPress={() => console.log('Logo tapped')}
                    />

                    <View style={styles.OtpMaincontainer}>

                        <AppText style={styles.Heading}>Check Your</AppText>
                        <View style={styles.inboxConatiner}>
                            <AppText style={styles.Heading2}>Inbox</AppText>
                            <AppImage
                                source={IMAGES.inbox}
                                style={styles.inboxImage}
                                resizeMode="contain"
                            />
                        </View>

                        <AppText style={styles.otpNote}>
                            We’ve sent a one-time passcode (OTP) to the email address you provided.
                        </AppText>

                        {/* You can place OTP inputs and a confirm button here if needed */}
                        <View style={styles.otpinputContainer}>
                            <AppText style={styles.ConfirmationCodeText}>
                                Confirmation Code
                            </AppText>
                            <OtpInput ref={otpRef} length={6} onComplete={handleOtpComplete} />
                        </View>

                        <View style={styles.resendButtonConatiner}>
                            <AppTouchable disabled={isResend} onPress={handleResend}>
                                <AppText style={[styles.resendButtonText, { opacity: isResend ? 0.3 : 1 }]}>
                                    Resend One-Time Passcode
                                </AppText>
                            </AppTouchable>
                        </View>
                        {isResend &&
                            <View style={styles.resendButtonConatiner}>
                                <AppText style={styles.resendButtonText}>
                                    One-Time Passcode resent!
                                </AppText>
                                <AppText style={styles.resendButtonText}>
                                    (Remember to check your spam)
                                </AppText>
                            </View>
                        }


                    </View>
                </ScrollView>
                <View style={styles.buttonContainer}>
                    <AppTouchable disabled={otp?.length != 6}
                        style={[styles.confirmButton, { opacity: otp?.length == 6 ? 1 : 0.4 }]}
                        onPress={handleSubmit}>
                        <AppText style={styles.confirmText}>Submit</AppText>
                    </AppTouchable>
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
};

export default OtpScreen;
