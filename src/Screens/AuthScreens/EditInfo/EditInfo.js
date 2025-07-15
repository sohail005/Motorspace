import React, { useState } from 'react';
import { View, ScrollView, Alert, TouchableWithoutFeedback, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import AppText from '../../../components/AppText';
import AppInput from '../../../components/AppInput';
import AppImage from '../../../components/AppImage';
import AppTouchable from '../../../components/AppTouchable';
import { IMAGES } from '../../../assets/Images/ImagePath';
import { launchImageLibrary } from 'react-native-image-picker';
import { requestGalleryPermission } from '../../../utils/permissions';
import AppHeaderCommon from '../../../components/AppHeaderCommon';
import { useNavigation } from '@react-navigation/native';
import { styles } from './EditInfoStyles';

const EditInfo = () => {
    const navigation = useNavigation();
    const [errors, setErrors] = useState({});
    const [form, setForm] = useState({
        photo: null,
        firstName: '',
        lastName: '',
        email: '',
        confirmEmail: '',
        phone: '',
        address1: '',
        address2: '',
        city: '',
        county: '',
        postcode: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (key, value) => {
        setForm({ ...form, [key]: value });

        if (errors[key]) {
            setErrors(prev => ({ ...prev, [key]: undefined }));
        }
    };

    const handleImagePick = async () => {
        const permissionStatus = await requestGalleryPermission();

        if (permissionStatus === 'granted') {
            launchImageLibrary(
                {
                    mediaType: 'photo',
                    quality: 0.7,
                },
                (response) => {
                    if (!response.didCancel && !response.errorCode && response.assets?.length) {
                        handleChange('photo', response.assets[0].uri);
                    }
                }
            );
        } else {
            Alert.alert(
                'Permission Denied',
                'Please allow photo access in settings to continue.'
            );
        }
    };

    const handleConfirm = () => {
        // navigation.navigate("OtpScreen");
        return
        const {
            firstName, lastName, email, confirmEmail, phone,
            address1, city, county, postcode, password, confirmPassword, photo
        } = form;

        const newErrors = {};

        if (!photo) newErrors.photo = 'Please upload your profile photo.';
        if (!firstName) newErrors.firstName = 'First name is required.';
        if (!lastName) newErrors.lastName = 'Last name is required.';
        if (!email) newErrors.email = 'Email is required.';
        if (!confirmEmail) newErrors.confirmEmail = 'Please confirm your email.';
        if (email && confirmEmail && email !== confirmEmail) newErrors.confirmEmail = 'Emails do not match.';
        if (!phone) newErrors.phone = 'Phone number is required.';
        if (!address1) newErrors.address1 = 'Address line 1 is required.';
        if (!city) newErrors.city = 'City is required.';
        if (!county) newErrors.county = 'County is required.';
        if (!postcode) newErrors.postcode = 'Postcode is required.';
        if (!password) newErrors.password = 'Password is required.';
        if (!confirmPassword) newErrors.confirmPassword = 'Please confirm your password.';
        if (password && confirmPassword && password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match.';

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            Alert.alert('Success', 'Form submitted!');
            // Submit logic
        }
    };


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0} // adjust offset as needed
            >
                <AppHeaderCommon
                    title=""
                    onLeftPress={() => navigation.goBack()}
                    onRightPress={() => console.log('Logo tapped')}
                />
                <ScrollView keyboardShouldPersistTaps={'handled'} contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>

                    <View style={styles.inputsMainCnatiner}>
                        <AppText style={styles.Heading}>Edit Info</AppText>
                        <AppText style={styles.label}>Profile Photo *</AppText>
                        <View style={styles.imageMainContainer}>
                            <AppTouchable onPress={handleImagePick} style={styles.imageContainer}>
                                <AppImage
                                    source={form.photo ? { uri: form.photo } : IMAGES.addImage}
                                    style={!form.photo ? styles.image : styles.selectedImage}
                                    resizeMode="cover"
                                />
                            </AppTouchable>
                        </View>
                        {errors.photo ? (
                            <AppText style={styles.error}>{errors.photo}</AppText>
                        ) :
                            <AppText style={styles.error}></AppText>
                        }
                        <AppInput
                            label="First Name *"
                            value={form.firstName}
                            onChangeText={(val) => handleChange('firstName', val)}
                            errorMessage={errors.firstName}
                        />

                        <AppInput
                            label="Last Name *"
                            value={form.lastName}
                            onChangeText={(val) => handleChange('lastName', val)}
                            errorMessage={errors.lastName}
                        />

                        <AppInput
                            label="Email Address *"
                            keyboardType="email-address"
                            value={form.email}
                            onChangeText={(val) => handleChange('email', val)}
                            errorMessage={errors.email}
                        />

                        <AppInput
                            label="Confirm Email Address *"
                            keyboardType="email-address"
                            value={form.confirmEmail}
                            onChangeText={(val) => handleChange('confirmEmail', val)}
                            errorMessage={errors.confirmEmail}
                        />

                        <AppInput label="Phone Number *" keyboardType="phone-pad" value={form.phone} onChangeText={(val) => handleChange('phone', val)} errorMessage={errors.phone} />
                        <AppInput label="1st Line of Address *" value={form.address1} onChangeText={(val) => handleChange('address1', val)} errorMessage={errors.address1} />
                        <AppInput label="2nd Line of Address" value={form.address2} onChangeText={(val) => handleChange('address2', val)} errorMessage={errors.address2} />
                        <AppInput label="Town/City *" value={form.city} onChangeText={(val) => handleChange('city', val)} errorMessage={errors.city} />
                        <AppInput label="County *" value={form.county} onChangeText={(val) => handleChange('county', val)} errorMessage={errors.county} />
                        <AppInput label="Postcode *" value={form.postcode} onChangeText={(val) => handleChange('postcode', val)} errorMessage={errors.postcode} />

                        <AppInput
                            label="Password *"
                            secureTextEntry
                            value={form.password}
                            onChangeText={(val) => handleChange('password', val)}
                            errorMessage={errors.password}
                        />
                        <AppInput
                            label="Confirm Password *"
                            secureTextEntry
                            value={form.confirmPassword}
                            onChangeText={(val) => handleChange('confirmPassword', val)}
                            errorMessage={errors.confirmPassword}
                        />

                        <View style={styles.buttonContainer}>
                            <AppTouchable style={styles.confirmButton} onPress={handleConfirm}>
                                <AppText style={styles.confirmText}>Apply Changes</AppText>
                            </AppTouchable>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
};

export default EditInfo;

