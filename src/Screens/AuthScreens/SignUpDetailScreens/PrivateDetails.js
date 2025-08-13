import React from 'react';
import {
    View,
    ScrollView,
    Alert,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    Platform,
    Keyboard,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { launchImageLibrary } from 'react-native-image-picker';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import AppText from '../../../components/AppText';
import AppInput from '../../../components/AppInput';
import AppImage from '../../../components/AppImage';
import AppTouchable from '../../../components/AppTouchable';
import AppHeaderCommon from '../../../components/AppHeaderCommon';

import { IMAGES } from '../../../assets/Images/ImagePath';
import { requestGalleryPermission } from '../../../utils/permissions';
import { styles } from './PrivateDetailsStyles';
import { navigate } from '../../../navigation/NavigationService';

// ✅ Yup Validation Schema
const schema = yup.object().shape({
    photo: yup.string().required('Please upload your profile photo.'),
    firstName: yup.string().required('First name is required.'),
    lastName: yup.string().required('Last name is required.'),
    email: yup.string().email('Enter a valid email').required('Email is required.'),
    confirmEmail: yup
        .string()
        .oneOf([yup.ref('email')], 'Emails do not match.')
        .required('Please confirm your email.'),
    phone: yup.string().required('Phone number is required.'),
    address1: yup.string().required('Address line 1 is required.'),
    address2: yup.string(), // optional
    city: yup.string().required('City is required.'),
    county: yup.string().required('County is required.'),
    postcode: yup.string().required('Postcode is required.'),
    password: yup.string().required('Password is required.'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'Passwords do not match.')
        .required('Please confirm your password.'),
});

const PrivateDetails = () => {
    const navigation = useNavigation();

    const {
        control,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            photo: '',
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
        },
    });

    const handleImagePick = async () => {
        const permissionStatus = await requestGalleryPermission();
        if (permissionStatus === 'granted') {
            launchImageLibrary(
                { mediaType: 'photo', quality: 0.7 },
                (response) => {
                    if (!response.didCancel && !response.errorCode && response.assets?.length) {
                        setValue('photo', response.assets[0].uri, { shouldValidate: true });
                    }
                }
            );
        } else {
            Alert.alert('Permission Denied', 'Please allow photo access in settings to continue.');
        }
    };

    const onSubmit = (data) => {
        navigate("OtpScreen")
        return
        Alert.alert('Success', 'Form submitted!');
        console.log('Form Data:', data);
        // API call here
    };

    const inputFields = [
        { key: 'firstName', label: 'First Name *' },
        { key: 'lastName', label: 'Last Name *' },
        { key: 'email', label: 'Email Address *', keyboardType: 'email-address' },
        { key: 'confirmEmail', label: 'Confirm Email Address *', keyboardType: 'email-address' },
        { key: 'phone', label: 'Phone Number *', keyboardType: 'phone-pad' },
        { key: 'address1', label: '1st Line of Address *' },
        { key: 'address2', label: '2nd Line of Address' },
        { key: 'city', label: 'Town/City *' },
        { key: 'county', label: 'County *' },
        { key: 'postcode', label: 'Postcode *' },
        { key: 'password', label: 'Password *', secureTextEntry: true },
        { key: 'confirmPassword', label: 'Confirm Password *', secureTextEntry: true },
    ];

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}
            >
                <AppHeaderCommon
                    title=""
                    onLeftPress={() => navigation.goBack()}
                    onRightPress={() => console.log('Logo tapped')}
                />

                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={styles.container}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.inputsMainCnatiner}>
                        <AppText style={styles.Heading}>Tell Us a Bit About You</AppText>

                        {/* Profile Photo */}
                        <AppText style={styles.label}>Profile Photo *</AppText>
                        <View style={styles.imageMainContainer}>
                            <AppTouchable onPress={handleImagePick} style={styles.imageContainer}>
                                <Controller
                                    control={control}
                                    name="photo"
                                    render={({ field: { value } }) => (
                                        <AppImage
                                            source={value ? { uri: value } : IMAGES.addImage}
                                            style={!value ? styles.image : styles.selectedImage}
                                            resizeMode="cover"
                                        />
                                    )}
                                />
                            </AppTouchable>
                        </View>
                        <AppText style={styles.error}>{errors.photo?.message || ''}</AppText>

                        {/* Dynamic Inputs */}
                        {inputFields.map(({ key, ...props }) => (
                            <Controller
                                key={key}
                                control={control}
                                name={key}
                                render={({ field: { onChange, value } }) => (
                                    <AppInput
                                        {...props}
                                        value={value}
                                        inputStyle={styles.input}
                                        onChangeText={onChange}
                                        errorMessage={errors[key]?.message}
                                    />
                                )}
                            />
                        ))}

                        {/* Confirm Button */}
                        <View style={styles.buttonContainer}>
                            <AppTouchable
                                style={styles.confirmButton}
                                onPress={handleSubmit(onSubmit)}
                            >
                                <AppText style={styles.confirmText}>Confirm</AppText>
                            </AppTouchable>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
};

export default PrivateDetails;
