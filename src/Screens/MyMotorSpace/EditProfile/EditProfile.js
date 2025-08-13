import React, { useState } from 'react';
import { View, ScrollView, Platform, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { styles } from './EditProfileStyles';
import { IMAGES } from '../../../assets/Images/ImagePath';
import AppHeader from '../../../components/AppHeader';
import AppText from '../../../components/AppText';
import ProfileCard from '../ProfileCard';
import AppInput from '../../../components/AppInput';
import AppTouchable from '../../../components/AppTouchable';
import { AppColors } from '../../../constants/colors';
import AppCircleCheckbox from '../../../components/AppCircleCheckbox';
import AccountTypeToggle from './AccountTypeToggle';

// ✅ Validation Schema
const schema = yup.object().shape({
    firstName: yup.string().required('First Name is required'),
    lastName: yup.string().required('Last Name is required'),
    // email: yup.string().email('Invalid email').required('Email Address is required'),
    phone: yup.string().required('Phone Number is required'),

    accountType: yup.string().oneOf(['Private', 'Business']).required(),

    businessName: yup.string().when('accountType', {
        is: (val) => val !== 'Private',
        then: (schema) => schema.trim().required('Business Name is required'),
        otherwise: (schema) => schema.nullable().notRequired(),
    }),

    businessEmail: yup.string().when('accountType', {
        is: (val) => val !== 'Private',
        then: (schema) => schema.email('Invalid email').required('Business Email Address is required'),
        otherwise: (schema) => schema.nullable().notRequired(),
    }),

    businessPhone: yup.string().when('accountType', {
        is: (val) => val !== 'Private',
        then: (schema) =>
            schema
                .matches(/^\d+$/, 'Phone number must contain only digits')
                .required('Business Phone Number is required'),
        otherwise: (schema) => schema.nullable().notRequired(),
    }),

    businessWebsite: yup.string().url('Invalid website URL').nullable(),

    addressLine1: yup.string().required('1st Line of Address is required'),
    townCity: yup.string().required('Town/City is required'),
    county: yup.string().required('County is required'),
    postcode: yup.string().required('Postcode is required'),
});


export default function EditProfile() {
    const [accountType, setAccountType] = useState('Private');

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            accountType: 'Private',

            businessName: '',
            businessEmail: '',
            primaryEmail: false,
            businessPhone: '',
            primaryPhone: false,
            businessWebsite: '',
            addressLine1: '',
            addressLine2: '',
            townCity: '',
            county: '',
            postcode: '',
        },
    });

    const onSubmit = (data) => {
        console.log('Updated Profile:', { ...data, accountType });
    };



    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
        >
            <View style={styles.container}>
                <AppHeader leftIcon rightIcon={IMAGES.home} />

                <ScrollView
                    contentContainerStyle={styles.scrollContent}
                    keyboardShouldPersistTaps="handled"
                >
                    <View style={styles.mymotorsapcaeHeaderContainer}>
                        <AppText style={styles.screenTitle}>Edit Profile</AppText>
                    </View>

                    <View style={styles.mainContentContainer}>
                        {/* Profile Card */}
                        <ProfileCard
                            imageSource={IMAGES.MotospaceCar}
                            name="Thomas Lamb"
                            subtitle="Motorspace Testing"
                            onSettingsPress={() => console.log("Settings Pressed")}
                        />

                        {/* ===== Personal Details from image ===== */}
                        <Controller
                            control={control}
                            name="firstName"
                            render={({ field: { onChange, value } }) => (
                                <AppInput
                                    label="First Name *"
                                    placeholder="Enter first name"
                                    inputStyle={styles.inputStyle}
                                    containerStyle={styles.inputContainer}
                                    value={value}
                                    onChangeText={onChange}
                                    errorMessage={errors.firstName?.message}
                                />
                            )}
                        />

                        <Controller
                            control={control}
                            name="lastName"
                            render={({ field: { onChange, value } }) => (
                                <AppInput
                                    label="Last Name *"
                                    placeholder="Enter last name"
                                    inputStyle={styles.inputStyle}
                                    containerStyle={styles.inputContainer}
                                    value={value}
                                    onChangeText={onChange}
                                    errorMessage={errors.lastName?.message}
                                />
                            )}
                        />

                        <Controller
                            control={control}
                            name="email"
                            render={({ field: { onChange, value } }) => (
                                <AppInput
                                    label="Email Address *"
                                    placeholder="Enter email"
                                    keyboardType="email-address"
                                    inputStyle={[styles.inputStyle, { backgroundColor: '#eee' }]}
                                    editable={false} // disabled as in image
                                    containerStyle={styles.inputContainer}
                                    value={value}
                                    onChangeText={onChange}
                                    errorMessage={errors.email?.message}
                                />
                            )}
                        />

                        <Controller
                            control={control}
                            name="phone"
                            render={({ field: { onChange, value } }) => (
                                <AppInput
                                    label="Phone Number *"
                                    placeholder="Enter phone number"
                                    keyboardType="phone-pad"
                                    inputStyle={styles.inputStyle}
                                    containerStyle={styles.inputContainer}
                                    value={value}
                                    onChangeText={onChange}
                                    errorMessage={errors.phone?.message}
                                />
                            )}
                        />

                        <AppText style={styles.sectionLabel}>Buying and Selling as</AppText>
                        <AccountTypeToggle
                            accountType={accountType}
                            setAccountType={setAccountType}
                        />

                        {/* ===== Existing Business Fields ===== */}
                        {accountType != "Private" &&
                            <>
                                <Controller
                                    control={control}
                                    name="businessName"
                                    render={({ field: { onChange, value } }) => (
                                        <AppInput
                                            label="Business Name"
                                            required
                                            placeholder="Enter business name"
                                            inputStyle={styles.inputStyle}
                                            containerStyle={styles.inputContainer}
                                            value={value}
                                            onChangeText={onChange}
                                            errorMessage={errors.businessName?.message}
                                        />
                                    )}
                                />

                                <Controller
                                    control={control}
                                    name="businessEmail"
                                    render={({ field: { onChange, value } }) => (
                                        <AppInput
                                            label="Business Email Address"
                                            required
                                            placeholder="Enter business email"
                                            keyboardType="email-address"
                                            inputStyle={styles.inputStyle}
                                            containerStyle={styles.inputContainer}
                                            value={value}
                                            onChangeText={onChange}
                                            errorMessage={errors.businessEmail?.message}
                                        />
                                    )}
                                />

                                {/* Primary Email Checkbox */}
                                <Controller
                                    control={control}
                                    name="primaryEmail"
                                    render={({ field: { onChange, value } }) => (
                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                                            <AppCircleCheckbox
                                                checked={value}
                                                onPress={() => onChange(!value)}
                                                size={25}
                                                borderColor={AppColors.borderColor}
                                                checkedColor="green"
                                                uncheckedColor="#f0f0f0"
                                                borderWidth={2}
                                                iconName="done"
                                                iconColor="yellow"
                                                paddingWhenChecked={3}
                                                style={{ marginRight: 10, marginLeft: 5 }}
                                            />
                                            <AppText style={styles.inputNote}>
                                                Set this as my primary contact email for buyers and sellers who want to contact me.
                                            </AppText>
                                        </View>
                                    )}
                                />

                                <Controller
                                    control={control}
                                    name="businessPhone"
                                    render={({ field: { onChange, value } }) => (
                                        <AppInput
                                            label="Business Phone Number"
                                            required
                                            placeholder="Enter business phone"
                                            keyboardType="phone-pad"
                                            inputStyle={styles.inputStyle}
                                            containerStyle={styles.inputContainer}
                                            value={value}
                                            onChangeText={onChange}
                                            errorMessage={errors.businessPhone?.message}
                                        />
                                    )}
                                />

                                {/* Primary Phone Checkbox */}
                                <Controller
                                    control={control}
                                    name="primaryPhone"
                                    render={({ field: { onChange, value } }) => (
                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                                            <AppCircleCheckbox
                                                checked={value}
                                                onPress={() => onChange(!value)}
                                                size={25}
                                                borderColor={AppColors.borderColor}
                                                checkedColor="green"
                                                uncheckedColor="#f0f0f0"
                                                borderWidth={2}
                                                iconName="done"
                                                iconColor="yellow"
                                                paddingWhenChecked={3}
                                                style={{ marginRight: 10, marginLeft: 5 }}
                                            />
                                            <AppText style={styles.inputNote}>
                                                Set this as my primary phone number for buyers and sellers who want to contact me.
                                            </AppText>
                                        </View>
                                    )}
                                />

                                <Controller
                                    control={control}
                                    name="businessWebsite"
                                    render={({ field: { onChange, value } }) => (
                                        <AppInput
                                            label="Business Website"
                                            placeholder="Enter business website"
                                            keyboardType="url"
                                            inputStyle={styles.inputStyle}
                                            containerStyle={styles.inputContainer}
                                            value={value}
                                            onChangeText={onChange}
                                            errorMessage={errors.businessWebsite?.message}
                                        />
                                    )}
                                />
                            </>
                        }
                        <Controller
                            control={control}
                            name="addressLine1"
                            render={({ field: { onChange, value } }) => (
                                <AppInput
                                    label="1st Line of Address"
                                    required
                                    placeholder="Enter address line 1"
                                    inputStyle={styles.inputStyle}
                                    containerStyle={styles.inputContainer}
                                    value={value}
                                    onChangeText={onChange}
                                    errorMessage={errors.addressLine1?.message}
                                />
                            )}
                        />

                        <Controller
                            control={control}
                            name="addressLine2"
                            render={({ field: { onChange, value } }) => (
                                <AppInput
                                    label="2nd Line of Address"
                                    placeholder="Enter address line 2"
                                    inputStyle={styles.inputStyle}
                                    containerStyle={styles.inputContainer}
                                    value={value}
                                    onChangeText={onChange}
                                />
                            )}
                        />

                        <Controller
                            control={control}
                            name="townCity"
                            render={({ field: { onChange, value } }) => (
                                <AppInput
                                    label="Town/City"
                                    required
                                    placeholder="Enter town or city"
                                    inputStyle={styles.inputStyle}
                                    containerStyle={styles.inputContainer}
                                    value={value}
                                    onChangeText={onChange}
                                    errorMessage={errors.townCity?.message}
                                />
                            )}
                        />

                        <Controller
                            control={control}
                            name="county"
                            render={({ field: { onChange, value } }) => (
                                <AppInput
                                    label="County"
                                    required
                                    placeholder="Enter county"
                                    inputStyle={styles.inputStyle}
                                    containerStyle={styles.inputContainer}
                                    value={value}
                                    onChangeText={onChange}
                                    errorMessage={errors.county?.message}
                                />
                            )}
                        />

                        <Controller
                            control={control}
                            name="postcode"
                            render={({ field: { onChange, value } }) => (
                                <AppInput
                                    label="Postcode"
                                    required
                                    placeholder="Enter postcode"
                                    inputStyle={styles.inputStyle}
                                    containerStyle={[styles.inputContainer, { width: '50%' }]}
                                    value={value}
                                    onChangeText={onChange}
                                    errorMessage={errors.postcode?.message}
                                />
                            )}
                        />

                        <AppTouchable style={styles.submitButton} onPress={handleSubmit(onSubmit)}>
                            <AppText style={styles.submitButtonText}>Save Changes</AppText>
                        </AppTouchable>
                    </View>
                </ScrollView>
            </View>
        </KeyboardAvoidingView>
    );
}
