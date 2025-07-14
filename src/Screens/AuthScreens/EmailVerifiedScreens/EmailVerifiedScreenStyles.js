import { StyleSheet } from "react-native";
import { AppColors } from "../../../constants/colors";
import DimensionsUtil from "../../../constants/Dimensions";
import { FontSizes } from "../../../constants/fontsizes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.white,
        alignItems: "center",
        justifyContent: 'center',
    },
    cehckMainConatiner: {
        alignItems: "center",
        justifyContent: 'center',
    },
    Heading: {
        fontSize: FontSizes.ultraLarge,
        fontWeight: '900',
        color: AppColors.primary,
        textAlign: 'center',
        width: DimensionsUtil.SCREEN_WIDTH / 1.5,
    },
    cehckImage: {
        width: DimensionsUtil.SCREEN_WIDTH / 7,
        height: DimensionsUtil.SCREEN_WIDTH / 7
    },
    confirmButton: {
        backgroundColor: AppColors.primary,
        width: DimensionsUtil.SCREEN_WIDTH / 3,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        height: DimensionsUtil.SCREEN_WIDTH / 9,
        marginTop: DimensionsUtil.SCREEN_WIDTH / 10
    },
    confirmText: {
        fontSize: FontSizes.medium,
        fontWeight: '500',
        color: AppColors.white,
        textAlign: 'center',
    }

})