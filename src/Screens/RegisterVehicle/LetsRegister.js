import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppTouchable from '../../components/AppTouchable';
import AppImage from '../../components/AppImage';
import AppText from '../../components/AppText';
import { IMAGES } from '../../assets/Images/ImagePath';
import { styles } from './LetsRegisterStyles';
import AppHeaderCommon from '../../components/AppHeaderCommon';

const LetsRegister = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* Header */}
            <AppHeaderCommon title='' onLeftPress={() => navigation.goBack()} />
            <View style={styles.containerContent}>
                {/* Title */}
                <AppText style={styles.title}>
                    Next,{"\n"}Let’s Register{"\n"}Your Motors
                </AppText>

                {/* Car Icons */}
                <View style={styles.carRow}>
                    {Array(4).fill(null).map((_, idx) => (
                        <AppImage
                            key={idx}
                            source={IMAGES.MotospaceCar}
                            style={styles.carIcon}
                            resizeMode="contain"
                            placeholder
                        />
                    ))}
                </View>

                {/* Primary Button */}
                <AppTouchable onPress={()=>navigation.navigate("RegisterYourFirstMotor")} style={styles.primaryButton}>
                    <AppText style={styles.primaryButtonText}>Continue</AppText>
                </AppTouchable>

                <View style={styles.bottomView}>
                    {/* Secondary Actions */}
                    <AppText style={styles.question}>Not selling any?</AppText>

                    <AppTouchable style={styles.secondaryButton}>
                        <AppText style={styles.secondaryButtonText}>Skip this part</AppText>
                    </AppTouchable>

                    <AppText style={styles.hintText}>(You can register motors later)</AppText>
                </View>
            </View>
        </View>
    );
};

export default LetsRegister;
