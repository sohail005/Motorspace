import React, { useEffect, useState } from 'react';
import { View, ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';
import AppHeaderCommon from '../../../components/AppHeaderCommon';
import AppText from '../../../components/AppText';
import AppInput from '../../../components/AppInput';
import AppTouchable from '../../../components/AppTouchable';
import Icon from 'react-native-vector-icons/Ionicons';
import { AppColors } from '../../../constants/colors';
import { FontSizes } from '../../../constants/fontsizes';
import { useNavigation } from '@react-navigation/native';
import { styles } from './ConfirmYourInfoStyles';
import storageItem from '../../../utils/storageItem';

const ConfirmYourInfo = () => {
    const navigation = useNavigation();
    const [password, setPassword] = useState('password123');
    const [isTypePrivate, setIsTypePrivate] = useState(null);
    // Dummy data (replace with actual props or Redux state)
    const userInfo = {
        fullName: 'Thomas Lamb',
        businessName: 'Developemnt',
        email: 'tom@privatecarsales.co.uk',
        phone: '07987654321',
        address: '7 Charter-Point Way, Ashby–De–La–Zouch, Leicestershire, LE65 1NF',
        fileName: 'honda-civic_sales_invoice_112-receipt.pdf',
        description:
            'This implementation will give users clear visual feedback about which tab is currently active, with smooth animations between state changes. The active tab will be slightly larger, have a different background, and show its label in a more prominent style',
    };
    useEffect(() => {
        getStoragetData();
    }, []);
    const handleConfirm = () => {
        navigation.navigate("ApprovalPending")
    }
    const handleEditInfo = () => {
        navigation.navigate("EditInfo")
    }
    const getStoragetData = async () => {
        try {
            const savedData = await storageItem.getItem('isTypePrivate');
            if (savedData) {
                setIsTypePrivate(savedData);
            }
        } catch (error) {
            console.error('Failed to load user:', error);
        }
    };

    return (

        <View style={{ flex: 1 }}>
            <AppHeaderCommon title="" onLeftPress={() => navigation.goBack()} />
            <ScrollView
                contentContainerStyle={styles.container}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
            >
                <AppText style={styles.heading}>Check Your Info is Correct</AppText>
                <AppText style={styles.label}>Full Name</AppText>
                <AppText style={styles.value}>{userInfo.fullName}</AppText>
                {!isTypePrivate &&
                    <>
                        <AppText style={styles.label}>Business Name</AppText>
                        <AppText style={styles.value}>{userInfo.businessName}</AppText>
                    </>
                }

                <AppText style={styles.label}>{isTypePrivate ? 'Email Address' : 'Business Email Address'}</AppText>
                <AppText style={styles.value}>{userInfo.email}</AppText>

                <AppText style={styles.label}>Phone Number</AppText>
                <AppText style={styles.value}>{userInfo.phone}</AppText>

                <AppText style={styles.label}>Business Address</AppText>
                <AppText style={styles.value}>{userInfo.address}</AppText>

                <View style={{ marginTop: 20 }}>
                    <AppInput
                        label="Password"
                        value={password}
                        inputStyle={styles.passwordInput}
                        onChangeText={setPassword}
                        secureTextEntry
                        placeholder="Enter your password"
                    />
                </View>

                <AppText style={[styles.label, { marginTop: 0 }]}>Proof of Business Legitimacy</AppText>
                <View style={styles.fileBox}>
                    <Icon name="attach" size={20} color={AppColors.grayOverlay} />
                    <AppText style={styles.fileName} numberOfLines={1}>
                        {userInfo.fileName}
                    </AppText>
                </View>

                <AppText style={styles.label}>Tell us about you and your business</AppText>
                <AppText numberOfLines={4} style={styles.value}>
                    {userInfo.description}
                </AppText>


            </ScrollView>
            <View style={styles.buttonRow}>
                <AppTouchable
                    style={[styles.editButton, { opacity: 1 }]}
                    onPress={() => handleEditInfo()}>
                    <AppText style={styles.editText}>Edit Info</AppText>
                </AppTouchable>
                <AppTouchable
                    style={[styles.confirmButton, { opacity: 1 }]}
                    onPress={() => handleConfirm()}>
                    <AppText style={styles.confirmText}>Confirm</AppText>
                </AppTouchable>
            </View>
        </View>

    );

};

export default ConfirmYourInfo;

