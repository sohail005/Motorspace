import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Modal, Portal } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

import AppText from '../../../components/AppText';
import AppTouchable from '../../../components/AppTouchable';
import { AppColors } from '../../../constants/colors';
import { Fonts } from '../../../constants/Fonts';
import { FontSizes } from '../../../constants/fontsizes';
import DimensionsUtil from '../../../constants/Dimensions';

const ArchiveListingPortal = ({ visible, onDismiss, onConfirm }) => {
    return (
        <Portal>
            <Modal visible={visible} onDismiss={onDismiss} contentContainerStyle={styles.modalContainer}>
                <AppTouchable onPress={onDismiss} style={styles.closeIcon}>
                    <Icon name="close" size={34} color={AppColors.borderColor} />
                </AppTouchable>
                <View style={styles.content}>


                    <AppText style={styles.title}>Archive Listing?</AppText>

                    <AppText style={styles.message}>
                        This listing will be removed from the marketplace and stored in
                    </AppText>

                    <AppText style={styles.highlight}>My Motors</AppText>
                    <AppText style={styles.subMessage}>
                        You can access this listing anytime and even re-list it back onto the marketplace again.
                    </AppText>
                </View>
                <View style={styles.buttonRow}>
                        <AppTouchable onPress={onDismiss} style={styles.cancelButton}>
                            <AppText style={styles.cancelText}>Go Back</AppText>
                        </AppTouchable>

                        <AppTouchable onPress={onConfirm} style={styles.archiveButton}>
                            <AppText style={styles.archiveText}>Archive</AppText>
                        </AppTouchable>
                    </View>
            </Modal>
        </Portal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        alignSelf: 'center',
        backgroundColor: AppColors.white,
        borderRadius: 12,
        width: DimensionsUtil.SCREEN_WIDTH - 40,
        // padding: 24,
    },
    content: {
        padding: 24,
    },
    closeIcon: {
        position: 'absolute',
        right: 0,
        top: 0,
        padding: 8,
    },
    title: {
        fontSize: FontSizes.xxLarge,
        fontFamily: Fonts.bold,
        color: AppColors.primary,
        marginTop: 12,
        marginBottom: 12,
        textAlign: 'center',
    },
    message: {
        fontSize: FontSizes.mediumLarge,
        fontFamily: Fonts.semiBold,
        color: AppColors.textPrimary,
        textAlign: 'center',
    },
    highlight: {
        fontSize: FontSizes.xxLarge,
        fontFamily: Fonts.bold,
        color: AppColors.primary,
        marginVertical: 16,
        textAlign: 'center',
    },
    subMessage: {
        fontSize: FontSizes.mediumLarge,
        fontFamily: Fonts.semiBold,
        color: AppColors.textPrimary,
        textAlign: 'center',
        marginBottom: 24,
    },
    buttonRow: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
    },
    cancelButton: {
        borderColor: AppColors.borderColor,
                paddingVertical: 16,
        alignItems: 'center',
        backgroundColor: AppColors.defaultBackground,
        width: (DimensionsUtil.SCREEN_WIDTH - 44)/2,
        borderBottomLeftRadius: 12,
    },
    cancelText: {
        fontFamily: Fonts.bold,
        fontSize: FontSizes.medium,
        color: AppColors.textPrimary,
    },
    archiveButton: {
        paddingVertical: 16,
        alignItems: 'center',
        backgroundColor: AppColors.defaultBackground,
        width: (DimensionsUtil.SCREEN_WIDTH - 44)/2,
borderBottomRightRadius: 12,
    },
    archiveText: {
        fontFamily: Fonts.bold,
        fontSize: FontSizes.medium,
        color: AppColors.primary,
    },
});

export default ArchiveListingPortal;
