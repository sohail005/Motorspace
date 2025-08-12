import React, { useEffect, useState } from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import AppText from './AppText';
import AppTouchable from './AppTouchable';
import FillterIcon from 'react-native-vector-icons/Octicons';
import { AppColors } from '../constants/colors';
import { Fonts } from '../constants/Fonts';
import { FontSizes } from '../constants/fontsizes';

const OfferSentPopup = ({ data, onDismiss }) => {
    const { visible, title, content } = data;
    const slideAnim = useState(new Animated.Value(-150))[0];

    useEffect(() => {
        if (visible) {
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 400,
                useNativeDriver: true,
            }).start(() => {
                // Auto-dismiss after a delay
                const timer = setTimeout(() => {
                    handleDismiss();
                }, 3000);
                return () => clearTimeout(timer); // Cleanup timer
            });
        }
    }, [visible, slideAnim]);

    const handleDismiss = () => {
        Animated.timing(slideAnim, {
            toValue: -150,
            duration: 400,
            useNativeDriver: true,
        }).start(() => {
            onDismiss();
        });
    };

    if (!visible) {
        return null;
    }

    return (
        <Animated.View style={[styles.offerPopup, { transform: [{ translateY: slideAnim }] }]}>
            <View style={styles.offerContent}>
                <AppTouchable onPress={handleDismiss}>
                    <FillterIcon name="x" size={26} color={AppColors.white} />
                </AppTouchable>
                <View style={{ marginLeft: 20, flex: 1 }}>
                    <AppText style={styles.offerTitle}>{title}</AppText>
                    <AppText style={styles.offerText}>{content}</AppText>
                </View>
            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    offerPopup: {
        position: 'absolute',
        top: 10,
        left: 10,
        right: 10,
        zIndex: 1000, // Ensure it's on top
        backgroundColor: AppColors.popupbg,
        borderRadius: 12,
        padding: 14,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 6,
        elevation: 6,
    },
    offerContent: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    offerTitle: {
        color: AppColors.white,
        fontFamily: Fonts.bold,
        fontSize: FontSizes.medium,
    },
    offerText: {
        color: AppColors.white,
        fontFamily: Fonts.regular,
        fontSize: FontSizes.medium,
        marginTop: 4,
    },
});

export default React.memo(OfferSentPopup); // Memoize the component