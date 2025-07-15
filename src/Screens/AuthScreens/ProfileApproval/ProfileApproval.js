import React, { useState } from 'react';
import {
    View,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
} from 'react-native';
import AppHeaderCommon from '../../../components/AppHeaderCommon';
import AppText from '../../../components/AppText';
import AppInput from '../../../components/AppInput';
import AppTouchable from '../../../components/AppTouchable';
import { useNavigation } from '@react-navigation/native';
import { styles } from './ProfileApprovalStyles';
import { FontSizes } from '../../../constants/fontsizes';
import { AppColors } from '../../../constants/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { pick, types } from '@react-native-documents/picker';

const ProfileApproval = () => {
    const navigation = useNavigation();
    const [fileName, setFileName] = useState('');
    const [selectedFile, setSelectedFile] = useState({});
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState({});

    const handleFileUploasssd = async () => {
        try {
            const results = await pick({ type: [types.pdf] });
            if (results?.length > 0) {
                console.log("results[0]:", results[0]);
                setSelectedFile(results[0])
                setFileName(results[0].name);
            }
        } catch (err) {
            if (err?.code === 'DOCUMENT_PICKER_CANCELED') {
                // Cancelled by user
            } else {
                console.error('Picker Error:', err);
                Alert.alert('Error', 'Unable to pick a document.');
            }
        }
    };
    const handleSubmit = () => {
        const newErrors = {};

        if (!fileName) {
            newErrors.file = 'Please upload a PDF file.';
        }

        if (!description.trim()) {
            newErrors.description = 'Description is required.';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            // Submit logic
            console.log('Submitted:', { fileName, description });
            Alert.alert('Success', 'Your profile has been submitted.');
        }
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : -50}
                style={{ flex: 1 }}
            >
                <View style={styles.container}>
                    <AppHeaderCommon
                        title=""
                        leftIcon={""}
                    // onLeftPress={() => navigation.goBack()}
                    // onRightPress={() => console.log('Logo tapped')}
                    />

                    <ScrollView
                        contentContainerStyle={styles.scrollContainer}
                        keyboardShouldPersistTaps="handled"
                        showsVerticalScrollIndicator={false}
                    >
                        <AppText style={styles.heading}>Profile Approval</AppText>
                        <AppText style={styles.description}>
                            To prove your legitimacy and help us fast track your profile for approval,
                            please provide at least one of the following documents:
                        </AppText>

                        <View style={styles.bulletSection}>
                            <AppText style={styles.bullet}>• Motor Trade Insurance Certificate</AppText>
                            <AppText style={styles.bullet}>• VAT Registration Certificate</AppText>
                            <AppText style={styles.bullet}>• A Recent Trade Invoice or Receipt</AppText>
                        </View>

                        <AppTouchable style={styles.uploadBtn} onPress={handleFileUploasssd}>
                            <AppText style={styles.uploadText}>Upload File</AppText>
                        </AppTouchable>
                        <View style={styles.fileinputcontainer}>
                            <View style={styles.fileInputBox}>
                                <Icon name="attach" size={FontSizes.xLarge} color={AppColors.grayOverlay} />
                                <AppText style={styles.fileName}>{fileName || 'No file selected'}</AppText>
                            </View>
                            {errors.file ? <AppText style={styles.error}>{errors.file}</AppText>
                                :
                                <AppText style={styles.error}></AppText>
                            }
                        </View>
                        <AppText style={styles.label}>Tell us about you and your business</AppText>
                        <AppInput
                            value={description}
                            onChangeText={(text) => {
                                setDescription(text);
                                if (errors.description) {
                                    setErrors((prev) => ({ ...prev, description: undefined }));
                                }
                            }}
                            multiline
                            numberOfLines={5}
                            placeholder="Write your comment here..."
                            inputStyle={[styles.textArea]}  // Apply height here
                            errorMessage={errors.description}
                        />

                    </ScrollView>
                    <View style={styles.buttonContainer}>
                        <AppTouchable
                            style={[styles.confirmButton, { opacity: 1 }]}
                            onPress={handleSubmit}>
                            <AppText style={styles.confirmText}>Submit</AppText>
                        </AppTouchable>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
};

export default ProfileApproval;
