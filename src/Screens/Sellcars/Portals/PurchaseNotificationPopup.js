import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    Easing,
    runOnJS,
} from 'react-native-reanimated';
import AppTouchable from '../../../components/AppTouchable';
import AppText from '../../../components/AppText';
import { AppColors } from '../../../constants/colors';
import FillterIcon from 'react-native-vector-icons/Octicons';

const PurchaseNotificationPopup = ({
    visible,
    onClose,
    title = '',
    message = '',
}) => {
    const translateY = useSharedValue(-100);
    const isAccepted = title.includes('Accepted');
    useEffect(() => {
        if (visible) {
            translateY.value = withTiming(0, {
                duration: 400,
                easing: Easing.out(Easing.ease),
            });

            const timeout = setTimeout(() => {
                translateY.value = withTiming(
                    -100,
                    {
                        duration: 400,
                        easing: Easing.in(Easing.ease),
                    },
                    (finished) => {
                        if (finished) runOnJS(onClose)();
                    }
                );
            }, 3000);

            return () => clearTimeout(timeout);
        }
    }, [visible]);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: translateY.value }],
    }));

    if (!visible) return null;

    return (
        <Animated.View style={[[styles.popupContainer,{backgroundColor:isAccepted?AppColors.popupbg:AppColors.notificationbg}], animatedStyle]}>
            <View style={styles.popupContent}>
                <AppTouchable onPress={onClose}>
                    <FillterIcon name="x" size={24} color={AppColors.white} />
                </AppTouchable>
                <View style={styles.textContainer}>
                    <AppText style={styles.popupTitle}>{title}</AppText>
                    <AppText style={styles.popupText}>{message}</AppText>
                </View>
            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    popupContainer: {
        position: 'absolute',
        top: 0,
        left: 16,
        right: 16,
        backgroundColor: AppColors.notificationbg || '#D92D20', // Fallback red if errorBg not defined
        padding: 14,
        borderRadius: 12,
        marginTop: 50,
        zIndex: 1000,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 5,
    },
    popupContent: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    textContainer: {
        marginLeft: 16,
        flex: 1,
    },
    popupTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: AppColors.white,
        marginBottom: 4,
    },
    popupText: {
        fontSize: 14,
        color: AppColors.white,
    },
});

export default PurchaseNotificationPopup;
