import { StyleSheet } from "react-native";
import { AppColors } from "../../../constants/colors";
import DimensionsUtil from "../../../constants/Dimensions";
import { FontSizes } from "../../../constants/fontsizes";
import { Fonts } from "../../../constants/Fonts";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColors.white,
    },
    inputsMainCnatiner: {
        paddingHorizontal: DimensionsUtil.SCREEN_WIDTH / 16,
    },
    input: {
        color: AppColors.textPrimary,
        fontSize: FontSizes.medium,
        fontFamily: Fonts.medium,
        borderWidth: 1,
        borderColor: AppColors.borderColor
    },
    Heading: {
        fontSize: FontSizes.ultraLarge,
        fontWeight: '900',
        color: AppColors.primary,
        textAlign: 'left',
        paddingVertical: 15,
        width: DimensionsUtil.SCREEN_WIDTH / 1.5
    },
    label: {
        marginBottom: 6,
        fontWeight: '600',
        fontSize: FontSizes.smallMedium,
        color: AppColors.black,
    },
    imageContainer: {
        alignSelf: 'center',
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: AppColors.borderColor,
        width: DimensionsUtil.SCREEN_WIDTH / 4,
        height: DimensionsUtil.SCREEN_WIDTH / 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageMainContainer: {
        width: DimensionsUtil.SCREEN_WIDTH / 4,
        height: DimensionsUtil.SCREEN_WIDTH / 4,
        alignItems: "center",
        justifyContent: 'center',
        alignSelf: 'center'
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 8,
    },
    selectedImage: {
        width: DimensionsUtil.SCREEN_WIDTH / 4,
        height: DimensionsUtil.SCREEN_WIDTH / 4,
    },
    buttonContainer: {
        marginVertical: 20,
        alignItems: 'flex-end',
    },
    confirmButton: {
        backgroundColor: AppColors.primary,
        width: DimensionsUtil.SCREEN_WIDTH / 2.3,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        height: DimensionsUtil.SCREEN_WIDTH / 9,
    },
    confirmText: {
        fontSize: FontSizes.medium,
        fontWeight: '500',
        color: AppColors.white,
        textAlign: 'center',
    },
    error: {
        color: 'red', marginTop: 6, textAlign: "center", fontSize: FontSizes.small,
    }
});
