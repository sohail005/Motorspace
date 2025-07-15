import React, { useState } from 'react';
import {
    View,
    StyleSheet,
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
import AppImage from '../../../components/AppImage';
import { IMAGES } from '../../../assets/Images/ImagePath'; // ensure you have a paperclip/upload icon
import { useNavigation } from '@react-navigation/native';
import { styles } from './ProfileApprovalStyles';
import { FontSizes } from '../../../constants/fontsizes';
import { AppColors } from '../../../constants/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { requestStoragePermission } from '../../../utils/permissions';
import DocumentPicker from '@react-native-documents/picker';
const ProfileApproval = () => {
    const navigation = useNavigation();
    const [fileName, setFileName] = useState('');
    const [description, setDescription] = useState('');

    const handleFileUpload = async () => {
        const hasPermission = await requestStoragePermission();

        if (!hasPermission) {
            return Alert.alert('Permission Denied', 'Storage permission is required.');
        }

        try {
            const result = await DocumentPicker.pick({
                type: ['application/pdf'],
                allowMultiSelection: false,
            });

            if (result?.length > 0) {
                setFileName(result[0]?.name || 'Unnamed.pdf');
                console.log('Picked file:', result[0]);
            }
        } catch (err) {
            if (!DocumentPicker.isCancel(err)) {
                console.error('File pick error:', err);
            }
        }
    };

    const handleSubmit = () => {
        // Add validation/submit logic here
        console.log('Submitted:', { fileName, description });
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
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

                        <AppTouchable style={styles.uploadBtn} onPress={handleFileUpload}>
                            <AppText style={styles.uploadText}>Upload File</AppText>
                        </AppTouchable>

                        <View style={styles.fileInputBox}>
                            <Icon name="attach" size={FontSizes.xLarge} color={AppColors.grayOverlay} />
                            <AppText style={styles.fileName}>{fileName || 'No file selected'}</AppText>
                        </View>

                        <AppText style={styles.label}>Tell us about you and your business</AppText>
                        <AppInput
                            value={description}
                            onChangeText={setDescription}
                            multiline
                            numberOfLines={5}
                            placeholder="Type here..."
                            inputStyle={styles.textArea}
                        />

                        <AppTouchable style={styles.submitButton} onPress={handleSubmit}>
                            <AppText style={styles.submitText}>Submit</AppText>
                        </AppTouchable>
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
};

export default ProfileApproval;
