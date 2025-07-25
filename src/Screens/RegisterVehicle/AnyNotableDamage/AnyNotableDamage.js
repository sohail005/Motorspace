import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import AppHeaderCommon from '../../../components/AppHeaderCommon';
import AppText from '../../../components/AppText';
import AppImage from '../../../components/AppImage';
import AppTouchable from '../../../components/AppTouchable';

import { IMAGES } from '../../../assets/Images/ImagePath';
import { AppColors } from '../../../constants/colors';
import storageItem from '../../../utils/storageItem';
import { styles } from './AnyNotableDamageStyles';

const AnyNotableDamage = () => {
    const navigation = useNavigation();
    const [selectedType, setSelectedType] = useState(null); // 'private' | 'business' | null

    const handleConfirm = () => {
        if (selectedType === 'NoDamage') {
            // navigation.navigate('PrivateDetails');
        } else if (selectedType === 'MinorDamages') {
            navigation.navigate('ReportMinorDamages');
        }
    };
    const setSelectedOption = (type) => {
        const hasNoDamage = type === 'NoDamage';
        console.log("type:", type, hasNoDamage);
        storageItem.setItem('hasNoDamage', hasNoDamage);
        setSelectedType(type);
    };
    const renderOption = (type, label, imageSource) => {
        const isSelected = selectedType === type;
        return (
            <AppTouchable
                onPress={() => setSelectedOption(type)}
                style={[
                    styles.ItemsConatiner,
                    isSelected ? styles.selectedBorder : styles.unSelectedBorder,
                ]}
            >
                <AppImage source={imageSource} resizeMode="contain" style={styles.image} />
                <AppText style={styles.privately}>{label}</AppText>
            </AppTouchable>
        );
    };

    return (
        <View style={styles.container}>
            <AppHeaderCommon
                title=""
                onLeftPress={navigation.goBack}
                onRightPress={() => console.log('Logo tapped')}
            />

            <AppText style={styles.loginHeading}>Any Notable Damage?</AppText>

            <View style={styles.mainItemsConatiner}>
                {renderOption('NoDamage', 'No Damage to Report', IMAGES.NoDamage)}
                {renderOption('MinorDamages', 'Report Minor Damages', IMAGES.Damage)}
            </View>

            <View style={styles.buttonContainer}>
                <AppTouchable
                    disabled={!selectedType}
                    onPress={handleConfirm}
                    style={[
                        styles.confirmButton,
                        {
                            backgroundColor: selectedType
                                ? AppColors.primary
                                : AppColors.buttonDisabled,
                        },
                    ]}
                >
                    <AppText style={styles.buttontext}>Submit</AppText>
                </AppTouchable>
            </View>
        </View>
    );
};

export default AnyNotableDamage;
