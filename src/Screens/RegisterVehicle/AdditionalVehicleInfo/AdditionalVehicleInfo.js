import React from 'react';
import { Keyboard, KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, View } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import AppHeaderCommon from '../../../components/AppHeaderCommon';
import AppInput from '../../../components/AppInput';
import AppText from '../../../components/AppText';
import AppTouchable from '../../../components/AppTouchable';
import { styles } from './AdditionalVehicleInfoStyles';

// Validation schema
const schema = yup.object().shape({
    mileage: yup.number().typeError('Only numbers are allowed.').required('This field is required.'),
    transmission: yup.string().required('This field is required.'),
    engineSize: yup.number().typeError('Only numbers are allowed.').required('This field is required.'),
    driveType: yup.string().required('This field is required.'),
    trim: yup.string().required('This field is required.'),
    doors: yup.number().typeError('Only numbers are allowed.').required('This field is required.'),
    seats: yup.number().typeError('Only numbers are allowed.').required('This field is required.'),
    lastService: yup.string().required('This field is required.'),
    mileageAtLastService: yup.number().typeError('Only numbers are allowed.').required('This field is required.'),
    fuelConsumption: yup.number().typeError('Only numbers are allowed.').required('This field is required.'),
    vehicleTax: yup.number().typeError('Only numbers are allowed.').required('This field is required.'),
    insuranceLevel: yup.number().typeError('Only numbers are allowed.').required('This field is required.'),
    previousOwners: yup
        .number()
        .typeError('Only numbers are allowed.')
        .nullable(),
    ulez: yup.string().nullable(),
});

// Field configuration
const fields = [
    { name: 'mileage', label: 'Registered Mileage', required: true, type: 'number' },
    { name: 'transmission', label: 'Transmission', required: true, type: 'text' },
    { name: 'engineSize', label: 'Engine Size', required: true, type: 'number' },
    { name: 'driveType', label: 'Drive Type', required: true, type: 'text' },
    { name: 'trim', label: 'Trim', required: true, type: 'text' },
    { name: 'doors', label: 'Doors', required: true, type: 'number' },
    { name: 'seats', label: 'Seats', required: true, type: 'number' },
    { name: 'lastService', label: 'Last Service', required: true, type: 'text' },
    { name: 'mileageAtLastService', label: 'Mileage at Last Service', required: true, type: 'number' },
    { name: 'fuelConsumption', label: 'Fuel Consumption', required: true, type: 'number' },
    { name: 'vehicleTax', label: 'Vehicle Tax', required: true, type: 'number' },
    { name: 'insuranceLevel', label: 'Insurance Level', required: true, type: 'number' },
    { name: 'previousOwners', label: 'Number of Previous Owners', required: false, type: 'number' },
    { name: 'ulez', label: 'ULEZ Compliant?', required: false, type: 'text' },
];

const AdditionalVehicleInfo = ({ navigation }) => {
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: fields.reduce((acc, f) => ({ ...acc, [f.name]: '' }), {}),
    });

    const onSubmit = (data) => {
        console.log('Form submitted:', data);
        navigation.navigate('AnyNotableDamage');
    };

    const renderFields = (fieldList) =>
        fieldList.map(({ name, label, required, type }) => (
            <Controller
                key={name}
                control={control}
                name={name}
                render={({ field: { onChange, value } }) => (
                    <AppInput
                        label={required ? `${label} *` : label}
                        placeholder={`Enter ${label}`}
                        value={value}
                        inputStyle={styles.input}
                        onChangeText={onChange}
                        errorMessage={errors[name]?.message}
                        keyboardType={type === 'number' ? 'numeric' : 'default'}
                    />
                )}
            />
        ));

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0} // adjust if you have header
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.container}>
                    <AppHeaderCommon title="" onLeftPress={() => navigation.goBack()} showBadge />

                    <ScrollView
                        contentContainerStyle={styles.scrollContent}
                        showsVerticalScrollIndicator={false}
                        keyboardShouldPersistTaps="handled"
                    >
                        <AppText style={styles.title}>Additional{"\n"}Vehicle Info</AppText>

                        <AppText style={styles.sectionTitle}>Mechanical Details</AppText>
                        {renderFields(fields.slice(0, 4))}

                        <AppText style={styles.sectionTitle}>Trim & Interior</AppText>
                        {renderFields(fields.slice(4, 7))}

                        <AppText style={styles.sectionTitle}>Service History</AppText>
                        {renderFields(fields.slice(7, 9))}

                        <AppText style={styles.sectionTitle}>Running Costs</AppText>
                        {renderFields(fields.slice(9, 12))}

                        <AppText style={styles.sectionTitle}>Helpful Extras</AppText>
                        {renderFields(fields.slice(12))}

                         <View style={styles.buttonConatainer}>
                        <AppTouchable style={styles.submitButton} onPress={handleSubmit(onSubmit)}>
                            <AppText style={styles.submitButtonText}>Submit</AppText>
                        </AppTouchable>
                    </View>
                    </ScrollView>

                   
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

export default AdditionalVehicleInfo;
