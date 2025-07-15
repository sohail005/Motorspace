import { StyleSheet } from "react-native";
import { AppColors } from "../../../constants/colors";
import DimensionsUtil from "../../../constants/Dimensions";
import { FontSizes } from "../../../constants/fontsizes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.white,
        height: DimensionsUtil.SCREEN_HEIGHT
    },
    OtpMaincontainer: {
        paddingHorizontal: DimensionsUtil.SCREEN_WIDTH / 16,
        alignItems: "center",
        marginTop: DimensionsUtil.SCREEN_WIDTH / 8
    },
    Heading: {
        fontSize: FontSizes.ultraLarge,
        fontWeight: '900',
        color: AppColors.primary,
        textAlign: 'left',
        paddingTop: 15,
        width: DimensionsUtil.SCREEN_WIDTH / 1.5,
        alignSelf: 'flex-start'
    },
    Heading2: {
        fontSize: FontSizes.ultraLarge,
        fontWeight: '900',
        color: AppColors.primary,
        textAlign: 'left',
        alignSelf: 'flex-start',

    },
    inboxConatiner: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
        width: DimensionsUtil.SCREEN_WIDTH / 1.2
    },
    inboxImage: {
        width: 60,
        height: 46,
        paddingLeft: 10,
    },
    otpNote: {
        fontSize: FontSizes.mediumLarge,
        fontWeight: '900',
        color: AppColors.primary,
        textAlign: 'left',
        paddingTop: 15,
        width: DimensionsUtil.SCREEN_WIDTH / 1.2,
        alignSelf: 'flex-start'
    },
    otpinputContainer: { marginTop: 25, width: DimensionsUtil.SCREEN_WIDTH / 1.2 },
    ConfirmationCodeText: {
        fontSize: FontSizes.medium,
        fontWeight: '700',
        marginBottom: 6,
        color: AppColors.textPrimary,
    },
    resendButtonConatiner: {
        alignItems: 'center',
        marginTop: DimensionsUtil.SCREEN_WIDTH / 10
    },
    resendButtonText: {
        fontSize: FontSizes.mediumLarge,
        fontWeight: '900',
        color: AppColors.buttonOrange,
        textAlign: 'center',
        width: DimensionsUtil.SCREEN_WIDTH / 1.2,

    },
    buttonContainer: {
        position: 'absolute',
        bottom: 30,
        right: 30
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
})