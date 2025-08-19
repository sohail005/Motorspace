// src/components/AppHeader.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AppColors } from '../constants/colors';
import Icon from 'react-native-vector-icons/Octicons';
import AppText from './AppText';
import { FontSizes } from '../constants/fontsizes';
import AppTouchable from './AppTouchable';
import { useNavigation } from '@react-navigation/native';
import { goBack } from '../navigation/NavigationService';
const AppHeader = ({
    title = 'MOTORSPACE',
    leftIcon,
    rightIcon,
    onLeftPress,
    onRightPress = () => {
        console.log('Right icon pressed');
    },
}) => {
    const handleLeftPress = () => {
        if (leftIcon != undefined) {
           goBack();
        }
    };

    const handleRightPress = () => {
        onRightPress();
    };

    return (
        <View style={[styles.container, {}]}>
            <AppTouchable style={styles.iconContainer} onPress={handleLeftPress}>
                {leftIcon && <Icon name="chevron-left" size={FontSizes.xxLarge} color={AppColors.white} />}
            </AppTouchable>

            <View style={styles.titleContainer}>
                <AppText style={styles.title}>{title}</AppText>
            </View>

            <AppTouchable style={styles.iconContainer} onPress={handleRightPress}>
                {rightIcon && (
                    <View style={styles.iconWithBadge}>
                        <Icon name="bell-fill" size={FontSizes.xLarge} color={AppColors.white} />
                        <View style={styles.redDot} />
                    </View>
                )}
            </AppTouchable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: AppColors.primary,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: AppColors.borderColor,
    },
    iconContainer: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 24,
        height: 24,
    },
    titleContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        alignItems: 'center',
    },
    title: {
        fontSize: FontSizes.mediumLarge,
        fontWeight: '900',
        color: AppColors.white,

    },
    iconWithBadge: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
    },
    redDot: {
        position: 'absolute',
        top: -2,
        right: -2,
        width: 10,
        height: 10,
        borderRadius: 100,
        backgroundColor: 'red',
    },

});

export default AppHeader;
