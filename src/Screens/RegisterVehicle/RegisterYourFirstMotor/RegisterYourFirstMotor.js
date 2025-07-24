import { View, SafeAreaView } from 'react-native';
import React from 'react';
import { styles } from './RegisterYourFirstMotorStyles';
import AppTouchable from '../../../components/AppTouchable';
import AppText from '../../../components/AppText';
import AppImage from '../../../components/AppImage';
import Icon from 'react-native-vector-icons/Ionicons'
import AppHeaderCommon from '../../../components/AppHeaderCommon';
import { opacity } from 'react-native-reanimated/lib/typescript/Colors';
const RegisterYourFirstMotor = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <AppHeaderCommon onLeftPress={() => navigation.goBack()} />
            <View style={styles.containerContent}>
                {/* Screen Title */}
                <AppText style={styles.screenTitle}>Register Motors</AppText>

                {/* Main Content Area */}
                <View style={styles.mainContent}>
                    <AppTouchable style={styles.addMotorButton}>
                        <Icon name="add" size={32} color="white" />
                    </AppTouchable>
                    <AppText style={styles.addMotorText}>Register a Motor</AppText>
                </View>

                {/* Bottom Action Buttons */}
                <View style={styles.bottomButtons}>
                    <AppTouchable style={[styles.editButton,{opacity:0.5}]}>
                        <AppText style={styles.editButtonText}>Edit Motors</AppText>
                    </AppTouchable>

                    <AppTouchable onPress={()=>navigation.navigate("InputVehicleRegistration")} style={styles.finishButton}>
                        <AppText style={styles.finishButtonText}>Finish</AppText>
                    </AppTouchable>
                </View>
            </View>
        </View>
    );
};

export default RegisterYourFirstMotor;
