// components/ReportIssuePortal.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Portal, Modal } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

import AppText from '../../../components/AppText';
import AppTouchable from '../../../components/AppTouchable';
import { AppColors } from '../../../constants/colors';
import { Fonts } from '../../../constants/Fonts';
import { FontSizes } from '../../../constants/fontsizes';
import DimensionsUtil from '../../../constants/Dimensions';

const WIDTH = DimensionsUtil.SCREEN_WIDTH - 40;

const ReportIssuePortal = ({
    visible,
    onDismiss,
    onCancelSale,
    onReportBuyer,
    onSupport,
}) => {
    const handle = (cb) => {
        if (typeof cb === 'function') cb();
        if (typeof onDismiss === 'function') onDismiss();
    };

    return (
        <Portal>
            <Modal
                visible={visible}
                onDismiss={onDismiss}
                contentContainerStyle={styles.modalContainer}
                dismissable
            >
                <View style={styles.card}>
                    {/* Header */}
                    <View style={styles.header}>
                        <View style={styles.headerContent}>
                            <AppText style={styles.title}>Report an Issue</AppText>
                            <AppTouchable style={{ paddingVertical: 16, marginRight: 10 }} onPress={onDismiss}>
                                <Icon name="close-outline" size={32} color={AppColors.textSecondary} />
                            </AppTouchable>
                        </View>
                        <AppTouchable
                            onPress={onDismiss}
                            accessibilityLabel="Close"
                            style={styles.closeTouch}
                        >
                            <Icon name="close" size={20} color={AppColors.textSecondary} />
                        </AppTouchable>
                    </View>

                    {/* Options */}
                    <AppTouchable
                        onPress={() => handle(onCancelSale)}
                        accessibilityRole="button"
                        accessibilityLabel="Cancel Sale"
                        style={styles.option}
                        ripple
                    >
                        <AppText style={styles.optionText}>Cancel Sale</AppText>
                    </AppTouchable>

                    <View style={styles.divider} />

                    <AppTouchable
                        onPress={() => handle(onReportBuyer)}
                        accessibilityRole="button"
                        accessibilityLabel="Report Buyer"
                        style={styles.option}
                        ripple
                    >
                        <AppText style={styles.optionText}>Report Buyer</AppText>
                    </AppTouchable>

                    <View style={styles.divider} />

                    <AppTouchable
                        onPress={() => handle(onSupport)}
                        accessibilityRole="button"
                        accessibilityLabel="Motorspace Support"
                        style={styles.option}
                        ripple
                    >
                        <AppText style={styles.optionText}>Motorspace Support</AppText>
                    </AppTouchable>
                </View>
            </Modal>
        </Portal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    headerContent: { flexDirection: 'row', justifyContent: 'space-between', backgroundColor: AppColors.defaultBackground },
    card: {
        width: WIDTH,
        borderRadius: 12,
        backgroundColor: AppColors.white,
        overflow: 'hidden',
    },

    header: {
        // paddingVertical: 16,
        // paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: AppColors.defaultBackground,
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        fontSize: FontSizes.large,
        fontFamily: Fonts.bold,
        color: AppColors.error, // red title as in design
        textAlign: 'center',
        flex: 1,
        paddingVertical: 16,
        // paddingHorizontal: 20,
    },


    closeTouch: {
        position: 'absolute',
        right: 12,
        top: 12,
        padding: 6,
        borderRadius: 20,
    },

    option: {
        paddingVertical: 14,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: AppColors.white,
    },

    optionText: {
        fontSize: FontSizes.medium,
        fontFamily: Fonts.semiBold,
        color: AppColors.textPrimary,
        paddingVertical: 8,
        textAlign: 'center',
    },

    divider: {
        height: 2,
        backgroundColor: AppColors.defaultBackground,
    },
});

export default ReportIssuePortal;
