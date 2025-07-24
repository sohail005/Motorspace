import { StyleSheet } from "react-native";
import { FontSizes } from "../../../constants/fontsizes";
import DimensionsUtil from "../../../constants/Dimensions";
import { AppColors } from "../../../constants/colors";
import { Fonts } from "../../../constants/Fonts";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.white,
        height: DimensionsUtil.SCREEN_HEIGHT
    },
    loginHeading: {
        fontSize: FontSizes.ultraLarge,
        fontFamily:Fonts.bold,
        color: AppColors.primary,
        // marginTop: DimensionsUtil.SCREEN_WIDTH / 8,
        textAlign: 'center',
    },
    privately: {
        fontSize: FontSizes.xLarge,
        fontFamily:Fonts.bold,
        color: AppColors.primary,
        textAlign: 'center',
        width: DimensionsUtil.SCREEN_WIDTH / 1.6
    },
    mainItemsConatiner: {
        marginTop: DimensionsUtil.SCREEN_WIDTH / 16,
        paddingHorizontal: DimensionsUtil.SCREEN_WIDTH / 10,
    },
    ItemsConatiner: {
        backgroundColor: AppColors.lightGary,
        borderRadius: 12,
        marginTop: DimensionsUtil.SCREEN_WIDTH / 10,
        alignItems: 'center',

    },
    image: {
        width: DimensionsUtil.SCREEN_WIDTH / 4,
        height: DimensionsUtil.SCREEN_WIDTH / 4,
        marginVertical:15
    },
    confirmButton: {
        backgroundColor: AppColors.primary,
        width: DimensionsUtil.SCREEN_WIDTH / 2.3,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        height: DimensionsUtil.SCREEN_WIDTH / 9,
    },
    buttontext: {
        fontSize: FontSizes.medium,
        fontWeight: '500',
        color: AppColors.white,
        textAlign: 'center',
    },
    buttonContainer: { position: 'absolute', bottom: 30, right: 30 },
    selectedBorder: {
        borderWidth: 3,
        borderColor: AppColors.buttonOrange, // or use your brand color
        borderRadius: 10,

    },
    unSelectedBorder: {
        borderWidth: 3,
        borderColor: AppColors.white, // or use your brand color
        borderRadius: 10,
    }

});