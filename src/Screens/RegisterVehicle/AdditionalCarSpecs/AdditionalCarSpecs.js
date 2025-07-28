import React, { useState } from 'react';
import {
  View,
  ScrollView,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import AppHeaderCommon from '../../../components/AppHeaderCommon';
import AppText from '../../../components/AppText';
import AppTouchable from '../../../components/AppTouchable';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { AppColors } from '../../../constants/colors';
import { styles } from './AdditionalCarSpecsStyles';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const specSections = [
  'General',
  'Performance',
  'Tyres',
  'Vehicle Dimensions',
  'Weight & Capacities',
  'Engine & Drive Train',
  'Emissions',
  'Fuel Consumption',
];

const AdditionalCarSpecs = () => {
  const navigation = useNavigation();
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleExpand = (title) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedItem((prev) => (prev === title ? null : title));
  };

  const handleSubmit = () => {
    navigation.goBack();
  };

  const handleSkip = () => {
    handleSubmit(); // Same behavior
  };

  return (
    <View style={styles.container}>
      <AppHeaderCommon title="" onLeftPress={navigation.goBack} />
      <View style={styles.contentContainer}>
        <AppText style={styles.screenTitle}>Additional{'\n'}Car Specs</AppText>

        <ScrollView contentContainerStyle={styles.scrollContent}>
          {specSections.map((title) => {
            const isExpanded = expandedItem === title;

            return (
              <View key={title}>
                <AppTouchable
                  style={[styles.specItem, { borderBottomColor: isExpanded ? AppColors.primary : AppColors.Blue_Subtext }]}
                  onPress={() => toggleExpand(title)}
                >
                  <AppText style={[styles.specText, { color: isExpanded ? AppColors.primary : AppColors.Blue_Subtext }]}>{title}</AppText>
                  <Icon
                    name={isExpanded ? 'chevron-down' : 'chevron-forward'}
                    size={20}
                    color={isExpanded ? AppColors.primary : AppColors.Blue_Subtext}
                  />
                </AppTouchable>

                {isExpanded && (
                  <View style={styles.expandedContent}>
                    <AppText style={styles.expandedText}>
                      {/* Replace this with actual form/input component later */}
                      Enter {title} specifications here...
                    </AppText>
                  </View>
                )}
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
    </View>
  );
};

export default AdditionalCarSpecs;
