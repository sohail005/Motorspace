import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AppText from '../../../components/AppText';
import AppTouchable from '../../../components/AppTouchable';
import { styles } from './TermsStyles';
import { AppColors } from '../../../constants/colors';
import AppCircleCheckbox from '../../../components/AppCircleCheckbox';

const TermsScreen = ({ navigation }) => {
    const [accepted, setAccepted] = useState(false);

    return (
        <View style={styles.container}>



            <ScrollView style={styles.termsList}>
                <View style={styles.topContainer}>
                    <AppText style={styles.header}>MOTORSPACE</AppText>
                    <AppText style={styles.subHeader}>Terms & Conditions</AppText>
                    <AppText style={styles.instruction}>You must read and agree to continue</AppText>
                </View>
                <AppText style={styles.termItem}>1. Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.</AppText>
                <AppText style={styles.termItem}>2. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.</AppText>
                <AppText style={styles.termItem}>3. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Laculis massa nisl malesuada lacinia integer nunc posuere.</AppText>
                <AppText style={styles.termItem}>4. Ut hendrerit semper vel class aptent taciti sociosqu.</AppText>
                <AppText style={styles.termItem}>5. Ad litora torquent per conubia nostra inceptos himenaeos.</AppText>
                <AppText style={styles.termItem}>6. Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.</AppText>
                <AppText style={styles.termItem}>7. Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.</AppText>
                <AppText style={styles.termItem}>8. Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.</AppText>
                <AppText style={styles.termItem}>9. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Laculis massa nisl malesuada lacinia integer nunc posuere.</AppText>



            </ScrollView>
            <View style={styles.bottomContainer}>
                <AppTouchable onPress={() => navigation.navigate('TermsFullView')} style={styles.linkButton}>
                    <AppText style={styles.linkButtonText}>Click for Full T&Cs</AppText>
                </AppTouchable>

                <View style={styles.checkboxContainer}>

                    <AppCircleCheckbox
                        checked={accepted}
                        onPress={() => setAccepted(!accepted)}
                        size={28}
                        borderColor={AppColors.textPrimary}
                        checkedColor={AppColors.quickbuy}
                        uncheckedColor={AppColors.white}
                        borderWidth={2}
                        iconName="done"
                        iconColor="yellow"
                        paddingWhenChecked={3}
                        style={{ marginRight: 10, marginLeft: 5 }}
                    />
                    <AppText style={styles.checkboxText}>
                        By ticking this, you agree to have read and acknowledged the Motorspace webapp’s terms & conditions.
                    </AppText>
                </View>

                <AppTouchable
                    disabled={!accepted}
                    onPress={() => navigation.navigate('NextScreen')} // replace with your screen
                    style={[styles.continueButton, { opacity: accepted ? 1 : 0.5 }]}
                >
                    <AppText style={styles.continueButtonText}>Continue</AppText>
                </AppTouchable>
            </View>

        </View>
    );
};

export default TermsScreen;
