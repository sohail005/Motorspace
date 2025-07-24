import { StyleSheet } from "react-native";
import { AppColors } from "../../constants/colors";
import { FontSizes } from "../../constants/fontsizes";
import DimensionsUtil from "../../constants/Dimensions";
import { Fonts } from "../../constants/Fonts";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.white,
        //   paddingTop: 60,
        //   paddingHorizontal: 24,
    },
    containerContent: {
        paddingHorizontal: 24,
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    icon: {
        width: 24,
        height: 24,
    },
    logo: {
        width: 32,
        height: 32,
    },
    title: {
        fontSize: FontSizes.ultraLarge,
        color: AppColors.primary,
        fontFamily:Fonts.bold,
        marginTop: 20,
        // marginBottom: 24,
    },
    carRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 48,
        paddingHorizontal: 20
    },
    carIcon: {
        width: DimensionsUtil.SCREEN_WIDTH / 5.4,
        height: DimensionsUtil.SCREEN_WIDTH / 5.4,
        // marginHorizontal: 4,
    },
    primaryButton: {
        backgroundColor: AppColors.primary,
        paddingVertical: 14,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 24,
        width: DimensionsUtil.SCREEN_WIDTH / 2.5,
        alignSelf: 'center',
        height:DimensionsUtil.SCREEN_WIDTH/9,
        justifyContent:'center'
    },
    primaryButtonText: {
        color: AppColors.white,
        fontSize: FontSizes.medium,
        fontFamily:Fonts.semiBold,
        marginTop:2
    },
    question: {
        textAlign: 'center',
        color: AppColors.primary,
        fontSize: FontSizes.large,
        marginBottom: 8,
        fontFamily: 'Poppins-Regular',
    },
    secondaryButton: {
        borderColor: AppColors.primary,
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 12,
        alignItems: 'center',
        marginVertical: 15,
        width: DimensionsUtil.SCREEN_WIDTH / 2.5,
        alignSelf: 'center',
        height:DimensionsUtil.SCREEN_WIDTH/9,
        justifyContent:'center'
    },
    secondaryButtonText: {
        color: AppColors.primary,
        fontSize: 15,
        fontFamily:Fonts.semiBold,
        marginTop:2
    },
    bottomView: {
        position: 'absolute',
        bottom: 50,
        alignItems: 'center',
        width: DimensionsUtil.SCREEN_WIDTH
    },
    hintText: {
        fontSize: FontSizes.small,
        color: AppColors.primary,
        textAlign: 'center',
        fontFamily: 'Poppins-Regular',
    },
});
