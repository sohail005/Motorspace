import { StyleSheet } from "react-native";
import { AppColors } from "../../constants/colors";
import { FontSizes } from "../../constants/fontsizes";
import DimensionsUtil from "../../constants/Dimensions";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.white,
        // paddingHorizontal: 16,
    },
    containerMain: {
        flex: 1,
        backgroundColor: AppColors.defaultBackground,
        paddingHorizontal: 16,
        // paddingTop: 20,
    },
    heading: {
        fontSize: FontSizes.ultraLarge,
        fontWeight: 'bold',
        color: AppColors.primary,
        marginBottom: 16,
    },
    listHeaderContainer: {
        backgroundColor: AppColors.white
    },
    confirmButton: {
        backgroundColor: AppColors.secondary,
        width: DimensionsUtil.SCREEN_WIDTH / 1.1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        height: DimensionsUtil.SCREEN_WIDTH / 9,
        alignSelf:'center',
       position:'absolute',
       bottom:20
    },
    confirmText: {
        fontSize: FontSizes.medium,
        fontWeight: '500',
        color: AppColors.white,
        textAlign: 'center',
    },
});