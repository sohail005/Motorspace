import React, { useState } from 'react';
import {
    View,
    Image,
    Keyboard,
    TouchableWithoutFeedback,
    ScrollView,
} from 'react-native';
import AppInput from '../../../components/AppInput';
import AppTouchable from '../../../components/AppTouchable';
import AppHeaderCommon from '../../../components/AppHeaderCommon';
import AppText from '../../../components/AppText';
import { launchImageLibrary } from 'react-native-image-picker';
import { AppColors } from '../../../constants/colors';
import { styles } from './DamageReportStyles';
import { FontSizes } from '../../../constants/fontsizes';
import { useRoute } from '@react-navigation/native';
import storageItem from '../../../utils/storageItem';

const DamageReport = ({ navigation }) => {
    const route = useRoute();
    console.log('route:', route.params);

    const [form, setForm] = useState({
        location: '',
        description: '',
        photo: null,
        diagramComplete: false,
    });

    const [formErrors, setFormErrors] = useState({});

    const handleChange = (field, value) => {
        setForm(prev => ({ ...prev, [field]: value }));
        setFormErrors(prev => ({ ...prev, [field]: '' }));
    };

    const isFormValid = () =>
        form.location && form.description && form.photo && form.diagramComplete;

    const validateForm = () => {
        const errors = {};
        if (!form.location.trim()) errors.location = 'Location is required';
        if (!form.description.trim()) errors.description = 'Description is required';
        if (!form.photo) errors.photo = 'Photo is required';
        if (!form.diagramComplete) errors.diagramComplete = 'Diagram completion is required';
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handlePhotoPick = () => {
        launchImageLibrary({ mediaType: 'photo', selectionLimit: 1 }, response => {
            const uri = response?.assets?.[0]?.uri;
            if (uri) {
                Keyboard.dismiss();
                setTimeout(() => {
                    handleChange('photo', uri);
                    navigateToDamageDiagram(uri);
                }, 30);

            }
        });
    };

    const navigateToDamageDiagram = uri => {
        navigation.navigate('DamageDiagramScreen', {
            imageSource: uri,
            initialMarker: { x: 100, y: 200 },
            readOnly: false,
            onComplete: (isPlaced, result) => {
                if (isPlaced && result) {
                    handleChange('photo', { uri: result.uri });
                    console.log('Marker coordinates:', result.markerCoordinates);
                } else {
                    console.log('User did not place a marker.');
                }
            },
        });
    };

    const handleSubmit = () => {
        if (!validateForm()) return;

        const newEntry = { ...form, id: Date.now() };
        const existing = storageItem.getItem('damageReports') || [];
        const updated = [...existing, newEntry];
        storageItem.setItem('damageReports', updated);
        console.log('Saved to storage:', updated);
        navigation.goBack();
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
                <AppHeaderCommon title="" onLeftPress={navigation.goBack} />

                <ScrollView contentContainerStyle={styles.containerContent} keyboardShouldPersistTaps="handled">
                    <AppText style={styles.heading}>Damage Report</AppText>

                    {/* Location Input */}
                    <AppInput
                        label="Location of Damage"
                        value={form.location}
                        inputStyle={styles.input}
                        onChangeText={text => handleChange('location', text)}
                        errorMessage={formErrors.location}
                        required
                        labelStyle={{ fontSize: FontSizes.mediumLarge, fontWeight: '400' }}
                    />

                    {/* Description Input */}
                    <AppInput
                        label="Description of Damage"
                        value={form.description}
                        inputStyle={styles.input}
                        onChangeText={text => handleChange('description', text)}
                        multiline
                        errorMessage={formErrors.description}
                        required
                        labelStyle={{ fontSize: FontSizes.mediumLarge, fontWeight: '400' }}
                    />

                    {/* Photo Input */}
                    <View style={styles.photoFieldContainer}>
                        <AppText style={styles.label}>
                            Provide a Photo <AppText style={styles.requiredMark}>*</AppText>
                        </AppText>

                        <AppTouchable onPress={handlePhotoPick} style={styles.photoRow}>
                            <View style={styles.selectBtn}>
                                <AppText style={styles.selectText}>Select</AppText>
                            </View>
                            <View style={styles.photoPreview}>
                                {form.photo?.uri ? (
                                    <Image resizeMode="contain" source={{ uri: form.photo.uri || form.photo }} style={styles.imageThumb} />
                                ) : (
                                    <AppText style={styles.placeholder}>No File Selected</AppText>
                                )}
                            </View>
                        </AppTouchable>

                        {formErrors.photo && <AppText style={styles.errorText}>{formErrors.photo}</AppText>}
                    </View>

                    {/* Diagram Completion */}
                    <AppText style={styles.label}>
                        Complete Damage Diagram <AppText style={{ color: AppColors.primary }}>*</AppText>
                    </AppText>

                    <View style={styles.CompleteButtonContainer}>
                        <AppTouchable
                            onPress={() => handleChange('diagramComplete', !form.diagramComplete)}
                            style={[
                                styles.diagramBtn,
                                {
                                    borderColor: form.diagramComplete ? AppColors.greenLabel : AppColors.borderColor,
                                    backgroundColor: form.diagramComplete ? AppColors.greenLabel : AppColors.borderColor,
                                },
                            ]}
                        >
                            <AppText
                                style={{
                                    color: form.diagramComplete ? AppColors.white : AppColors.grayOverlay,
                                    fontWeight: 'bold',
                                }}
                            >
                                {form.diagramComplete ? 'Complete' : 'Incomplete'}
                            </AppText>
                        </AppTouchable>
                    </View>

                    {formErrors.diagramComplete && <AppText style={styles.errorText}>{formErrors.diagramComplete}</AppText>}

                    {/* Submit Button */}
                    <AppTouchable
                        style={[
                            styles.submitButton,
                            { backgroundColor: isFormValid() ? AppColors.primary : AppColors.buttonDisabled },
                        ]}
                        onPress={handleSubmit}
                        disabled={!isFormValid()}
                    >
                        <AppText style={styles.submitText}>Submit</AppText>
                    </AppTouchable>
                </ScrollView>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default DamageReport;
