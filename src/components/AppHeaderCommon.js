import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { AppColors } from '../constants/colors';
import { FontSizes } from '../constants/fontsizes';
import { IMAGES } from '../assets/Images/ImagePath';

import AppTouchable from './AppTouchable';
import AppImage from './AppImage';
import AppText from './AppText';
import DimensionsUtil from '../constants/Dimensions';

const AppHeaderCommon = ({
    title = 'MOTORSPACE',
    leftIcon = 'arrow-left',
    rightIcon = null, // for future extensibility
    onLeftPress = () => { },
    onRightPress = () => { },
    showTitle = true,
}) => {
    return (
        <View style={styles.container}>
            {/* Left Icon */}
            <AppTouchable style={styles.iconContainer} onPress={onLeftPress}>
                <Icon name={leftIcon} size={FontSizes.xxxLarge} color={AppColors.primary} />
            </AppTouchable>

            {/* Title (Centered Absolutely) */}
            {showTitle && (
                <View style={styles.titleContainer}>
                    <AppText style={styles.title}>{title}</AppText>
                </View>
            )}

            {/* Right Icon (e.g. logo or settings) */}
            <AppTouchable style={styles.iconContainer} onPress={onRightPress}>
                <AppImage
                    source={IMAGES.logo}
                    resizeMode="contain"
                    style={{ width: 50, height: 50 }}
                />
            </AppTouchable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: DimensionsUtil.SCREEN_WIDTH,
        paddingHorizontal: 20,
        paddingVertical: 12,
        backgroundColor: AppColors.white,
    },
    iconContainer: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight:10
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
        color: AppColors.primary,
    },
});

export default AppHeaderCommon;
