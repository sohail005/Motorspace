import { StyleSheet } from "react-native";
import { AppColors } from "../../constants/colors";
import { FontSizes } from "../../constants/fontsizes";
import DimensionsUtil from "../../constants/Dimensions";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.white,
        paddingHorizontal: 24,
        alignItems: 'center',
    },
    heading: {
        fontSize: FontSizes.ultraLarge,
        fontWeight: '700',
        color: AppColors.primary,
        marginTop: 20,
        textAlign: 'center',
    },
    icon: {
        width: 100,
        height: 100,
        marginVertical: 30,
    },
    subtext: {
        fontSize: FontSizes.large,
        color: AppColors.primary,
        textAlign: 'center',
        lineHeight: 22,
    },
    boldText: {
        fontSize: FontSizes.large,
        fontWeight: '700',
        color: AppColors.primary,
        marginTop: 8,
        marginBottom: 40,
        textAlign: 'center',
    },
    disabledButton: {
        backgroundColor: AppColors.primary,
        width: DimensionsUtil.SCREEN_WIDTH / 1.2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        height: DimensionsUtil.SCREEN_WIDTH / 9,
    },
    disabledButtonText: {
        color: AppColors.white,
        fontWeight: '500',
        fontSize: FontSizes.medium,
    },
    viewmotorsButtonConatiner: {
        marginTop: 30,
    },
    viewMotorsBtn: {
        borderWidth: 1,
        borderColor: AppColors.primary,
        paddingVertical: 14,
        paddingHorizontal: 24,
        borderRadius: 8,
        // marginTop:30,
    },
    viewMotorsText: {
        color: AppColors.primary,
        fontSize: FontSizes.medium,
        fontWeight: '700',
    },
});
