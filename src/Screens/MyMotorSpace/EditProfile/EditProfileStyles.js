import { StyleSheet } from "react-native";
import { AppColors } from "../../../constants/colors";
import { FontSizes } from "../../../constants/fontsizes";
import { Fonts } from "../../../constants/Fonts";
import DimensionsUtil from "../../../constants/Dimensions";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.defaultBackground,
    },
    mymotorsapcaeHeaderContainer: {
        backgroundColor: AppColors.white,
    },
    scrollContent: {
        paddingBottom: 150,
    },
    mainContentContainer: {
        width: DimensionsUtil.SCREEN_WIDTH / 1.2,
        alignSelf: 'center',
    },
    screenTitle: {
        fontSize: FontSizes.ultra,
        fontFamily: Fonts.bold,
        color: AppColors.primary,
        padding: 10,
    },
    inputStyle: {
        backgroundColor: AppColors.white,
        borderRadius: 6,
        borderColor: AppColors.borderColor,
        paddingHorizontal: 12,
        paddingVertical: 10,
        fontSize: FontSizes.medium,
        fontFamily: Fonts.medium,
    },
    inputContainer: {
        marginTop: 10,
    },
    disabledInput: {
        backgroundColor: AppColors.grayBackground,
    },
    submitButton: {
        backgroundColor: AppColors.primary,
        paddingVertical: 15,
        borderRadius: 8,
        marginTop: 25,
        alignItems: 'center',
        width: DimensionsUtil.SCREEN_WIDTH / 2.5,
        alignSelf: 'flex-end'

    },
    submitButtonText: {
        color: AppColors.white,
        fontFamily: Fonts.semiBold,
        fontSize: 16,
    },
    inputNote: {
        fontSize: FontSizes.smallMedium,
        width: DimensionsUtil.SCREEN_WIDTH / 1.4
    },
    sectionLabel: {
        fontSize: FontSizes.medium,
        fontFamily: Fonts.medium,
        color: AppColors.black,
        marginBottom: 4,
    },
    toggleContainer: {
        flexDirection: 'row',
        marginVertical: 10,
    },
    toggleButton: {
        flex: 1,
        borderWidth: 1,
        borderColor: AppColors.primary,
        paddingVertical: 10,
        alignItems: 'center',
        borderRadius: 8,
        marginHorizontal: 5,
    },
    toggleButtonActive: {
        backgroundColor: AppColors.primaryLight,
        borderColor: AppColors.primary,
    },
    toggleText: {
        fontSize: 16,
        color: AppColors.textGray,
    },
    toggleTextActive: {
        fontWeight: 'bold',
        color: AppColors.primary,
    },
});
