import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppImage from '../../components/AppImage';
import AppText from '../../components/AppText';
import { AppColors } from '../../constants/colors';
import DimensionsUtil from '../../constants/Dimensions';
import { FontSizes } from '../../constants/fontsizes';
import { Fonts } from '../../constants/Fonts';

export default function ProfileCard({
    imageSource,
    name,
    subtitle,
    onSettingsPress,
    style
}) {
    return (
        <View style={[styles.card, style]}>
            <AppImage source={imageSource} style={styles.avatar} />
            <View style={{ flex: 1 }}>
                <AppText style={styles.name}>{name}</AppText>
                <AppText style={styles.subText}>{subtitle}</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        paddingVertical: 12,
    },
    avatar: {
        width: DimensionsUtil.SCREEN_WIDTH / 3.5,
        height: DimensionsUtil.SCREEN_WIDTH / 3.5,
        borderRadius: 5,
        // marginRight: 12
    },
    name: { fontSize: FontSizes.xxLarge, fontWeight: 'bold', color: AppColors.primary },
    subText: { fontSize: FontSizes.mediumLarge, color: AppColors.buttonOrange, fontFamily: Fonts.semiBold },
});
