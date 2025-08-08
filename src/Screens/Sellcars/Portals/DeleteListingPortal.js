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

const DeleteListingPortal = ({ visible, onDismiss, onConfirm }) => {
    return (
        <Portal>
            <Modal visible={visible} onDismiss={onDismiss} contentContainerStyle={styles.modalContainer}>
                <AppTouchable onPress={onDismiss} style={styles.closeIcon}>
                    <Icon name="close" size={34} color={AppColors.borderColor} />
                </AppTouchable>
                <View style={styles.content}>


                    <AppText style={styles.title}>Delete Listing?</AppText>

                    <AppText style={styles.subMessage}>
                        If you delete this listing it will no
                        longer be visible to buyers.
                    </AppText>
                    <AppText style={styles.subMessage}>
                        If you decide to sell this vehicle
                        later, you will need to re-list
                        it from scratch.
                    </AppText>

                    <AppText style={styles.subMessage}>
                        Why not
                        <AppText style={styles.archiveText}> Archive </AppText>
                        the listing instead?
                        This way you can reactivate it later.
                    </AppText>
                </View>
                <View style={styles.buttonRow}>
                    <AppTouchable onPress={onDismiss} style={styles.archiveButton}>
                        <AppText style={styles.archiveText}>Archive</AppText>
                    </AppTouchable>

                    <AppTouchable onPress={onConfirm} style={styles.deleteButton}>
                        <AppText style={styles.deleteText}>Delete</AppText>
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
        color: AppColors.redLabel,
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
    deleteButton: {
        paddingVertical: 16,
        alignItems: 'center',
        backgroundColor: AppColors.defaultBackground,
        width: (DimensionsUtil.SCREEN_WIDTH - 44) / 2,
        borderBottomRightRadius: 12,

    },
    deleteText: {
        fontFamily: Fonts.bold,
        fontSize: FontSizes.medium,
        color: AppColors.redLabel,
    },
    archiveButton: {
        paddingVertical: 16,
        alignItems: 'center',
        backgroundColor: AppColors.defaultBackground,
        width: (DimensionsUtil.SCREEN_WIDTH - 44) / 2,
        borderBottomLeftRadius: 12,

    },
    archiveText: {
        fontFamily: Fonts.bold,
        fontSize: FontSizes.medium,
        color: AppColors.primary,
    },
});

export default DeleteListingPortal;
