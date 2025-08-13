import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Modal, Portal } from 'react-native-paper';
import AppText from './AppText';
import AppTouchable from './AppTouchable';
import { FontSizes } from '../constants/fontsizes';
import { Fonts } from '../constants/Fonts';
import { AppColors } from '../constants/colors';
import DimensionsUtil from '../constants/Dimensions';

const SignoutPortal = ({
    visible,
    onDismiss,
    onCancel,
    onConfirmSignout,
}) => {
    return (
        <Portal>
            <Modal
                visible={visible}
                onDismiss={onDismiss}
                contentContainerStyle={styles.modal}
                style={styles.overlay}
            >
                <AppText style={styles.title}>Sign Out</AppText>

                <AppText style={styles.message}>
                    Are you sure you want to sign out{'\n'}from your account?
                </AppText>

                <View style={styles.buttonRow}>
                    <AppTouchable onPress={onCancel} style={styles.backBtn}>
                        <AppText style={styles.backText}>Cancel</AppText>
                    </AppTouchable>

                    <AppTouchable onPress={onConfirmSignout} style={styles.declineBtn}>
                        <AppText style={styles.declineText}>Sign Out</AppText>
                    </AppTouchable>
                </View>
            </Modal>
        </Portal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.3)',
    },
    modal: {
        marginHorizontal: 24,
        padding: 2,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: FontSizes.xLarge,
        fontFamily: Fonts.bold,
        color: AppColors.buttonOrange,
        marginVertical: 16,
    },
    message: {
        fontSize: FontSizes.large,
        color: AppColors.textPrimary,
        textAlign: 'center',
        marginBottom: 24,
        fontFamily: Fonts.medium,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: DimensionsUtil.SCREEN_WIDTH - 50,
    },
    backBtn: {
        paddingVertical: 18,
        backgroundColor: AppColors.defaultBackground,
        alignItems: 'center',
        width: (DimensionsUtil.SCREEN_WIDTH - 52) / 2,
        borderBottomLeftRadius: 10,
        justifyContent: 'center',
    },
    declineBtn: {
        paddingVertical: 18,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: AppColors.defaultBackground,
        width: (DimensionsUtil.SCREEN_WIDTH - 52) / 2,
        borderBottomRightRadius: 10,
    },
    backText: {
        color: AppColors.gobackButton,
        fontFamily: Fonts.bold,
        fontSize: FontSizes.medium,
        textAlign: 'center',
    },
    declineText: {
        color: AppColors.buttonOrange,
        fontFamily: Fonts.bold,
        fontSize: FontSizes.medium,
    },
});

export default SignoutPortal;
