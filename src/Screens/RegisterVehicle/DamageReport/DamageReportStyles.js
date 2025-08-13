import { StyleSheet } from "react-native";
import { AppColors } from "../../../constants/colors";
import { FontSizes } from "../../../constants/fontsizes";
import { Fonts } from "../../../constants/Fonts";
import DimensionsUtil from "../../../constants/Dimensions";

export const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: AppColors.white },
    containerContent: {
        paddingHorizontal: 25
    },
    screen: {
        flex: 1
    },
    heading: {
        fontSize: FontSizes.ultraLarge,
        fontFamily: Fonts.bold,
        color: AppColors.primary,
        marginVertical: 16,
        textAlign: 'center',
    },
    photoFieldContainer: {
        marginBottom: 16,
    },
    input: {
        color: AppColors.textPrimary,
        fontSize: FontSizes.medium,
        fontFamily: Fonts.medium,
        borderWidth: 1,
        borderColor: AppColors.borderColor
    },
    label: {
        fontSize: FontSizes.mediumLarge,
        color: AppColors.primaryText, // Use your dark blue color
        marginBottom: 8,
    },

    requiredMark: {
        color: AppColors.primary,
    },

    photoRow: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: AppColors.borderColor,
        borderRadius: 12,
        overflow: 'hidden',
        alignItems: 'center',
        minHeight: 55
    },

    selectBtn: {
        backgroundColor: AppColors.primary, // dark blue
        paddingHorizontal: 25,
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 55,
        height: '100%'
    },

    selectText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },

    photoPreview: {
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: 'center',
    },

    placeholder: {
        color: '#999',
        fontSize: 14,
    },

    imageThumb: {
        width: DimensionsUtil.SCREEN_WIDTH / 1.5,
        height: DimensionsUtil.SCREEN_WIDTH / 2,
        marginVertical: 5
    },

    diagramBtn: {
        borderWidth: 1,
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 16,
        minHeight: 50,
        justifyContent: 'center',
        fontFamily: Fonts.semiBold,
        width: DimensionsUtil.SCREEN_WIDTH / 2.5
    },
    CompleteButtonContainer: {
        width: DimensionsUtil.SCREEN_WIDTH / 2.5

    },
    submitButton: {
        marginTop: 20,
        paddingVertical: 14,
        borderRadius: 10,
        alignItems: 'center',
    },
    submitText: {
        color: AppColors.white,
        fontFamily: Fonts.bold,
    },
    errorText: {
        color: 'red',
        marginBottom: 8,
        fontSize: 12,
    },
    photofieldConatiner: {
        marginBottom: 15
    }
});