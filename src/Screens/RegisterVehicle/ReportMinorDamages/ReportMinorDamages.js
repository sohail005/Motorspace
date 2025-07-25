import { View, SafeAreaView } from 'react-native';
import React from 'react';
import AppTouchable from '../../../components/AppTouchable';
import AppText from '../../../components/AppText';
import AppImage from '../../../components/AppImage';
import Icon from 'react-native-vector-icons/Ionicons'
import AppHeaderCommon from '../../../components/AppHeaderCommon';
import { styles } from './ReportMinorDamagesStyles';
const ReportMinorDamages = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <AppHeaderCommon title='' onLeftPress={() => navigation.goBack()} />
            <View style={styles.containerContent}>
                {/* Screen Title */}

                {/* Main Content Area */}
                <View style={styles.mainContent}>
                <AppText style={styles.screenTitle}>Report Minor Damages</AppText>

                    <View style={styles.AddButtonContainer}>
                        <AppTouchable
                            onPress={() => navigation.navigate("DamageReport")}
                            style={styles.addMotorButton}>
                            <Icon name="add" size={32} color="white" />
                        </AppTouchable>
                        <AppText style={styles.addMotorText}>Report Vehicle Damage</AppText>
                    </View>
                </View>

                {/* Bottom Action Buttons */}
                <View style={styles.bottomButtons}>
                    <AppTouchable onPress={() => navigation.navigate("DamageReport")}
                        style={styles.finishButton}>
                        <AppText style={styles.finishButtonText}>Finish</AppText>
                    </AppTouchable>
                </View>
            </View>
        </View>
    );
};

export default ReportMinorDamages;
