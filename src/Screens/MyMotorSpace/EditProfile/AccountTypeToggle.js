import React, { useRef, useEffect } from 'react';
import { View, TouchableOpacity, Animated, StyleSheet } from 'react-native';
import AppText from '../../../components/AppText';
import { AppColors } from '../../../constants/colors';
import { Fonts } from '../../../constants/Fonts';
import { FontSizes } from '../../../constants/fontsizes';

export default function AccountTypeToggle({ accountType, setAccountType }) {
    const animation = useRef(new Animated.Value(accountType === 'Private' ? 0 : 1)).current;

    useEffect(() => {
        Animated.spring(animation, {
            toValue: accountType === 'Private' ? 0 : 1,
            useNativeDriver: false,
        }).start();
    }, [accountType]);

    const translateX = animation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0%', '100%'],
    });

    return (
        <View style={styles.toggleContainer}>
            {/* Background track */}
            <View style={styles.track} />

            {/* Sliding indicator */}
            <Animated.View
                style={[
                    styles.slider,
                    { transform: [{ translateX }] }
                ]}
            />

            {/* Buttons */}
            {['Private', 'Business'].map((type, index) => (
                <TouchableOpacity
                    key={type}
                    style={styles.option}
                    onPress={() => setAccountType(type)}
                    activeOpacity={0.8}
                >
                    <AppText
                        style={[
                            styles.toggleText,
                            accountType === type && styles.toggleTextActive
                        ]}
                    >
                        {type}
                    </AppText>
                </TouchableOpacity>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    toggleContainer: {
        flexDirection: 'row',
        position: 'relative',
        borderRadius: 8,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: AppColors.borderColor,
        width: '60%',
        height: 45,
    },
    track: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#fff',
    },
    slider: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: '50%',
        backgroundColor: '#fff',
        borderWidth: 2.5,
        borderColor: AppColors.buttonOrange,
        borderRadius: 8,
    },
    option: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    toggleText: {
        fontSize: FontSizes.medium,
        fontFamily: Fonts.semiBold,
        color: AppColors.textPrimary,
        lineHeight: FontSizes.medium * 1.5,
    },
    toggleTextActive: {
        fontFamily: Fonts.bold,
        color: AppColors.buttonOrange,
        // paddingTop:5,
        fontSize: FontSizes.mediumLarge,
        lineHeight: FontSizes.mediumLarge * 1.5,

    },
})
