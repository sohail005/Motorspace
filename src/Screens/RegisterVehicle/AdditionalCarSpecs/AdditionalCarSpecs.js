import React, { useState } from 'react';
import {
  View,
  ScrollView,
  LayoutAnimation,
  Platform,
  UIManager,
  KeyboardAvoidingView,
} from 'react-native';
import AppHeaderCommon from '../../../components/AppHeaderCommon';
import AppText from '../../../components/AppText';
import AppTouchable from '../../../components/AppTouchable';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { AppColors } from '../../../constants/colors';
import { styles } from './AdditionalCarSpecsStyles';
import DynamicForm from './DynamicForm';
import { formConfig } from './formConfig';



const specSections = [
  'General',
  'Performance',
  'Tyres',
  'Vehicle Dimensions',
  'Weight & Capacities',
  'Engine & Drive Train', // ✅ matches config.title
  'Emissions',
  'Fuel Consumption',
];

const AdditionalCarSpecs = () => {
  const navigation = useNavigation();
  const [expandedItem, setExpandedItem] = useState(null);
  const [formData, setFormData] = useState({});

  const toggleExpand = (title) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedItem((prev) => (prev === title ? null : title));
  };

  const handleSubmit = () => {
    console.log('All Section Form Data:', formData);
    // navigation.goBack();
  };

  const handleSkip = () => {
    handleSubmit(); // Same behavior
  };

  const getFormConfigByTitle = (title) => {
    const key = title.toLowerCase().replace(/[\s&]/g, '');
    return Object.entries(formConfig).find(
      ([configKey]) => configKey.toLowerCase().replace(/[\s&]/g, '') === key
    )?.[1] || null;
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
    >
      <AppHeaderCommon title="" onLeftPress={navigation.goBack} />
      <View style={styles.contentContainer}>
       

        <ScrollView contentContainerStyle={styles.scrollContent}>
        <AppText style={styles.screenTitle}>Additional{'\n'}Car Specs</AppText>
          {specSections.map((title) => {
            
            const isExpanded = expandedItem === title;
            const sectionConfig = getFormConfigByTitle(title);
            console.log("sectionConfig:",sectionConfig);
            
            return (
              <View key={title}>
                <AppTouchable
                  style={[
                    styles.specItem,
                    {
                      borderBottomColor: isExpanded
                        ? AppColors.primary
                        : AppColors.Blue_Subtext,
                    },
                  ]}
                  onPress={() => toggleExpand(title)}
                >
                  <AppText
                    style={[
                      styles.specText,
                      {
                        color: isExpanded
                          ? AppColors.primary
                          : AppColors.Blue_Subtext,
                      },
                    ]}
                  >
                    {title}
                  </AppText>
                  <Icon
                    name={isExpanded ? 'chevron-down' : 'chevron-forward'}
                    size={20}
                    color={
                      isExpanded ? AppColors.primary : AppColors.Blue_Subtext
                    }
                  />
                </AppTouchable>

                <View
                  style={{
                    display: isExpanded ? 'flex' : 'none',
                  }}
                >
                  <View style={styles.expandedContent}>
                    <DynamicForm
                      sectionConfig={sectionConfig}
                      defaultValues={formData[title] || {}}
                      onSubmitForm={(data) => {
                        setFormData((prev) => ({
                          ...prev,
                          [title]: data,
                        }));
                      }}
                    />
                  </View>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>

      <View style={styles.bottomButtons}>
        <AppTouchable style={styles.skipButton} onPress={handleSkip}>
          <AppText style={styles.skipButtonText}>Skip</AppText>
        </AppTouchable>
        <AppTouchable style={styles.submitButton} onPress={handleSubmit}>
          <AppText style={styles.submitButtonText}>Submit</AppText>
        </AppTouchable>
      </View>
    </KeyboardAvoidingView>
  );
};

export default AdditionalCarSpecs;
