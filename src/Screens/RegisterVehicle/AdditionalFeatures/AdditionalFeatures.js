import React, { useState } from 'react';
import {
  View,
  FlatList,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import AppHeaderCommon from '../../../components/AppHeaderCommon';
import AppText from '../../../components/AppText';
import AppTouchable from '../../../components/AppTouchable';
import AppInput from '../../../components/AppInput';
import Icon from 'react-native-vector-icons/Ionicons';
import { AppColors } from '../../../constants/colors';
import { useNavigation } from '@react-navigation/native';
import { styles } from './AdditionalFeaturesStyles';

const AdditionalFeatures = () => {
  const navigation = useNavigation();

  const [feature, setFeature] = useState('');
  const [featuresList, setFeaturesList] = useState([]);

  const handleAddFeature = () => {
    const trimmed = feature.trim();
    if (trimmed.length > 0) {
      setFeaturesList((prev) => [...prev, trimmed]);
      setFeature('');
    }
  };

  const handleRemoveFeature = (index) => {
    setFeaturesList((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    if (featuresList.length > 0) {
      console.log('Submitted features:', featuresList);
      // Optionally store features
    }
    navigation.goBack();
  };

  const handleSkip = () => {
    navigation.navigate("AdditionalCarSpecs")
    //handleSubmit();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}
    >
      {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
        <View style={styles.innerContainer}>
          <AppHeaderCommon title="" onLeftPress={navigation.goBack} />

          <ScrollView
            contentContainerStyle={styles.contentContainer}
            keyboardShouldPersistTaps="handled"
          >
            <AppText style={styles.title}>Additional Features</AppText>
            <AppText style={styles.subtitle}>
              Does this vehicle have any unique or custom features that would help sell it to buyers? (Eg. Heated seats)
            </AppText>

            <View style={styles.inputRow}>
              <AppInput
                label=""
                value={feature}
                 inputStyle={styles.input}
                onChangeText={setFeature}
                placeholder="Type Feature"
                // style={styles.input}
              />
              <AppTouchable onPress={handleAddFeature} style={styles.addButton}>
                <Icon name="add" size={22} color={AppColors.primary} />
              </AppTouchable>
            </View>

            {featuresList.length === 0 ? (
              <AppText style={styles.placeholderText}>No features added yet.</AppText>
            ) : (
              featuresList.map((item, index) => (
                <View style={styles.featureItem} key={`${item}-${index}`}>
                  <AppTouchable onPress={() => handleRemoveFeature(index)}>
                    <Icon name="close" size={32} color={AppColors.borderColor} />
                  </AppTouchable>
                  <AppText style={styles.featureText}>{item}</AppText>
                </View>
              ))
            )}

            <View style={styles.spacer} />
          </ScrollView>

          <View style={styles.bottomButtons}>
            <AppTouchable style={styles.skipButton} onPress={handleSkip}>
              <AppText style={styles.skipButtonText}>Skip</AppText>
            </AppTouchable>
            <AppTouchable
              style={[
                styles.submitButton,
                {
                  backgroundColor: featuresList.length
                    ? AppColors.primary
                    : AppColors.buttonDisabled,
                },
              ]}
              onPress={handleSubmit}
              disabled={featuresList.length === 0}
            >
              <AppText style={styles.submitButtonText}>Submit</AppText>
            </AppTouchable>
          </View>
        </View>
      {/* </TouchableWithoutFeedback> */}
    </KeyboardAvoidingView>
  );
};

export default AdditionalFeatures;
