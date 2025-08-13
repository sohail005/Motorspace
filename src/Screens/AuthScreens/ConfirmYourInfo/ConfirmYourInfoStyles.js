import { StyleSheet } from "react-native";
import { AppColors } from "../../../constants/colors";
import { FontSizes } from "../../../constants/fontsizes";
import DimensionsUtil from "../../../constants/Dimensions";
import { Fonts } from "../../../constants/Fonts";

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        paddingBottom: 30,
        // flex: 1,
        backgroundColor: AppColors.white,
        flexGrow: 1,
    },
    passwordInput:{
fontSize:FontSizes.medium,
fontFamily:Fonts.medium,
borderColor:AppColors.borderColor,
color:AppColors.textPrimary
    },
    heading: {
        fontSize: FontSizes.ultraLarge,
        fontWeight: '900',
        color: AppColors.primary,
        marginTop: 24,
        marginBottom: 12,
    },
    label: {
        color: AppColors.textPrimary,
        fontSize: FontSizes.smallMedium,
        marginTop: 20,
        marginBottom: 4,
        fontWeight: '500',
    },
    value: {
        fontSize: FontSizes.medium,
        color: AppColors.primary,
        fontWeight: 'bold',
    },
    fileBox: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: AppColors.borderColor,
        borderRadius: 8,
        paddingHorizontal: 12,
        height: 48,
      
    },
    fileName: {
        marginLeft: 8,
        fontSize: FontSizes.smallMedium,
        flex: 1,
        color: AppColors.textPrimary,
    },
    comment: {
        fontSize: FontSizes.smallMedium,
        color: AppColors.primary,
        fontWeight: '500',
       
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: AppColors.white,
        padding: 24
    },
    editButton: {
        flex: 1,
        borderWidth: 1.5,
        borderColor: AppColors.primary,
        paddingVertical: 12,
        marginRight: 10,
        // backgroundColor: AppColors.primary,
        width: DimensionsUtil.SCREEN_WIDTH / 2.3,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        height: DimensionsUtil.SCREEN_WIDTH / 9,
    },
    editText: {
        fontSize: FontSizes.medium,
        color: AppColors.primary,
        fontWeight: '600',
    },
    confirmText: {
        fontSize: FontSizes.medium,
        color: AppColors.white,
        fontWeight: '600',
    },
    buttonContainer: {
        width: DimensionsUtil.SCREEN_WIDTH / 2.5
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
});
