import React from 'react';
import { View } from 'react-native';
import AppText from './AppText'; // Reusable text component
import { StyleSheet } from 'react-native';
import { FontSizes } from '../constants/fontsizes';
import { Fonts } from '../constants/Fonts';
import { AppColors } from '../constants/colors';

const InfoRow = ({ label, value, bold = false }) => {
    return (
        <View style={styles.row}>
            <AppText style={styles.label}>{label}</AppText>
            <AppText style={[styles.boldValue]}>{value}</AppText>
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        marginBottom: 12,
    },
    label: {
        fontSize: FontSizes.medium,
        color: AppColors.textPrimary,
    },

    boldValue: {
        fontFamily: Fonts.semiBold,
        fontSize: FontSizes.mediumLarge,
        color: AppColors.primary
    },
});

export default InfoRow;
