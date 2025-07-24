import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import AppHeaderCommon from '../../../components/AppHeaderCommon';
import AppInput from '../../../components/AppInput';
import AppText from '../../../components/AppText';
import AppTouchable from '../../../components/AppTouchable';
import { styles } from './AdditionalVehicleInfoStyles';

const initialForm = {
    mileage: '',
    transmission: '',
    engineSize: '',
    driveType: '',
    trim: '',
    doors: '',
    seats: '',
    lastService: '',
    mileageAtLastService: '',
    fuelConsumption: '',
    vehicleTax: '',
    insuranceLevel: '',
    previousOwners: '',
    ulez: '',
};

const numericFields = [
    'mileage',
    'engineSize',
    'doors',
    'seats',
    'mileageAtLastService',
    'fuelConsumption',
    'vehicleTax',
    'insuranceLevel',
    'previousOwners',
];

const optionalFields = ['previousOwners', 'ulez'];

const AdditionalVehicleInfo = ({ navigation }) => {
    const [form, setForm] = useState(initialForm);
    const [formErrors, setFormErrors] = useState({});

    const validateField = (field, value) => {
        if (!optionalFields.includes(field) && !value.trim()) {
            return 'This field is required.';
        }
        if (numericFields.includes(field) && value.trim() && !/^\d+(\.\d+)?$/.test(value)) {
            return 'Only numbers are allowed.';
        }
        return '';
    };

    const handleChange = (field, value) => {
        setForm(prev => ({ ...prev, [field]: value }));
        const error = validateField(field, value);
        setFormErrors(prev => ({ ...prev, [field]: error }));
    };

    const validateForm = () => {
        const errors = {};
        Object.entries(form).forEach(([field, value]) => {
            const error = validateField(field, value);
            if (error) errors[field] = error;
        });
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            console.log('Form submitted:', form);
            // Handle submit
        }
    };

    const renderInput = (field, label, required = true) => (
        <View style={styles.inputWrapper}>
            <AppInput
                label={label}
                placeholder={`Enter ${label}`}
                value={form[field]}
                onChangeText={(text) => handleChange(field, text)}
                errorMessage={formErrors[field]}
            />
            {/* {formErrors[field] && <AppText style={styles.errorText}>{formErrors[field]}</AppText>} */}
        </View>
    );

    return (
        <View style={styles.container}>
            <AppHeaderCommon
                title=""
                onLeftPress={() => navigation.goBack()}
                showBadge
            />

            <ScrollView
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
            >
                <AppText style={styles.title}>Additional{"\n"}Vehicle Info</AppText>
                {/* Mechanical Details */}
                <AppText style={styles.sectionTitle}>Mechanical Details</AppText>
                {renderInput('mileage', 'Registered Mileage')}
                {renderInput('transmission', 'Transmission')}
                {renderInput('engineSize', 'Engine Size')}
                {renderInput('driveType', 'Drive Type')}

                {/* Trim & Interior */}
                <AppText style={styles.sectionTitle}>Trim & Interior</AppText>
                {renderInput('trim', 'Trim')}
                {renderInput('doors', 'Doors')}
                {renderInput('seats', 'Seats')}

                {/* Service History */}
                <AppText style={styles.sectionTitle}>Service History</AppText>
                {renderInput('lastService', 'Last Service')}
                {renderInput('mileageAtLastService', 'Mileage at Last Service')}

                {/* Running Costs */}
                <AppText style={styles.sectionTitle}>Running Costs</AppText>
                {renderInput('fuelConsumption', 'Fuel Consumption')}
                {renderInput('vehicleTax', 'Vehicle Tax')}
                {renderInput('insuranceLevel', 'Insurance Level')}

                {/* Helpful Extras */}
                <AppText style={styles.sectionTitle}>Helpful Extras</AppText>
                {renderInput('previousOwners', 'Number of Previous Owners', false)}
                {renderInput('ulez', 'ULEZ Compliant?', false)}
            </ScrollView>
            <View style={styles.buttonConatainer}>
                <AppTouchable style={styles.submitButton} onPress={handleSubmit}>
                    <AppText style={styles.submitButtonText}>Submit</AppText>
                </AppTouchable>
            </View>

        </View>
    );
};

export default AdditionalVehicleInfo;
