import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    Keyboard,
    TouchableWithoutFeedback,
    ScrollView
} from 'react-native';
import AppInput from '../../../components/AppInput';
import AppTouchable from '../../../components/AppTouchable';
import AppHeaderCommon from '../../../components/AppHeaderCommon';
import AppText from '../../../components/AppText';
import { launchImageLibrary } from 'react-native-image-picker';
import { AppColors } from '../../../constants/colors';
import { styles } from './DamageReportStyles';
import { FontSizes } from '../../../constants/fontsizes';
import DamageDiagram from './DamageDiagramScreen';
import { useRoute } from '@react-navigation/native';

const isFormValid = (form) =>
    !!form.location && !!form.description && !!form.photo && !!form.diagramComplete;

const DamageReport = ({ navigation }) => {
    const [form, setForm] = useState({
        location: '',
        description: '',
        photo: null,
        diagramComplete: false,
    });
    const route = useRoute();
    console.log("route:", route.params);

    const [formErrors, setFormErrors] = useState({});

    const handleChange = (field, value) => {
        setForm((prev) => ({ ...prev, [field]: value }));
        setFormErrors((prev) => ({ ...prev, [field]: '' }));

    };

    const validateForm = () => {
        let errors = {};
        if (!form.location.trim()) errors.location = 'Location is required';
        if (!form.description.trim()) errors.description = 'Description is required';
        if (!form.photo) errors.photo = 'Photo is required';
        if (!form.diagramComplete) errors.diagramComplete = 'Diagram completion is required';

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handlePhotoPick = () => {
        launchImageLibrary({ mediaType: 'photo', selectionLimit: 1 }, (response) => {
            if (!response.didCancel && !response.errorCode && response.assets?.[0]) {
                handleChange('photo', response.assets[0].uri);
                navigateToDamageDiagram(response.assets[0].uri)
            }
        });
    };
    const navigateToDamageDiagram = (uri) => {
        console.log("response.assets[0].uri:", uri);
        navigation.navigate('DamageDiagramScreen', {
            imageSource: uri,
            initialMarker: { x: 100, y: 200 },
            readOnly: false,
            onComplete: (isPlaced, result) => {
                if (isPlaced && result) {
                    console.log('Image path>>>>>>>>>>>>>>>>>>>>>>:', result.uri);
                    handleChange('photo', { uri: result.uri });
                    console.log('Marker coordinates:', result.markerCoordinates);
                    // Save to state if needed
                } else {
                    console.log('User did not place a marker.');
                }
            },
        });
    };
    const handleSubmit = () => {
        if (validateForm()) {
            console.log('Submitting:', form);
            // Submit form here
        }
    };


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
                <AppHeaderCommon title="" onLeftPress={navigation.goBack} />
                <ScrollView contentContainerStyle={styles.containerContent} keyboardShouldPersistTaps="handled">
                    <AppText style={styles.heading}>Damage Report</AppText>

                    <AppInput
                        label="Location of Damage"
                        value={form.location}
                        onChangeText={(text) => handleChange('location', text)}
                        errorMessage={formErrors.location}
                        required
                        labelStyle={{ fontSize: FontSizes.mediumLarge, fontWeight: '400' }}
                    />

                    <AppInput
                        label="Description of Damage"
                        value={form.description}
                        onChangeText={(text) => handleChange('description', text)}
                        multiline
                        errorMessage={formErrors.description}
                        required
                        labelStyle={{ fontSize: FontSizes.mediumLarge, fontWeight: '400' }}
                    />

                    <View style={styles.photoFieldContainer}>
                        <AppText style={styles.label}>
                            Provide a Photo <AppText style={styles.requiredMark}>*</AppText>
                        </AppText>

                        <AppTouchable onPress={handlePhotoPick} style={styles.photoRow}>
                            <View style={styles.selectBtn} >
                                <AppText style={styles.selectText}>Select</AppText>
                            </View>
                            <View style={styles.photoPreview}>
                                {form.photo?.uri ? (
                                    <Image resizeMode='contain' source={{ uri: form.photo.uri }} style={styles.imageThumb} />
                                ) : (
                                    <AppText style={styles.placeholder}>No File Selected</AppText>
                                )}
                            </View>
                        </AppTouchable>

                        {!!formErrors.photo && (
                            <AppText style={styles.errorText}>{formErrors.photo}</AppText>
                        )}
                    </View>
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
                                    backgroundColor: form.diagramComplete ? AppColors.greenLabel : AppColors.borderColor
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
                    {!!formErrors.diagramComplete && (
                        <AppText style={styles.errorText}>{formErrors.diagramComplete}</AppText>
                    )}

                    <AppTouchable
                        style={[
                            styles.submitButton,
                            {
                                backgroundColor: isFormValid(form)
                                    ? AppColors.primary
                                    : AppColors.buttonDisabled,
                            },
                        ]}
                        onPress={handleSubmit}
                        disabled={!isFormValid(form)}
                    >
                        <AppText style={styles.submitText}>Submit</AppText>
                    </AppTouchable>
                </ScrollView>
            </View>
        </TouchableWithoutFeedback>
    )

};

export default DamageReport;
