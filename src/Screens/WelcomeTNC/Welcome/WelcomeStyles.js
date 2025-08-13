// WelcomeStyles.js
import { StyleSheet } from 'react-native';
import { AppColors } from '../../../constants/colors';
import { FontSizes } from '../../../constants/fontsizes';
import { Fonts } from '../../../constants/Fonts';
import DimensionsUtil from '../../../constants/Dimensions';

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 24,
        backgroundColor: AppColors.white,
        flex: 1,
        justifyContent: 'center'

    },
    welcomeText: {
        fontSize: FontSizes.ultraLarge,
        fontFamily: Fonts.bold,
        color: AppColors.primary,
    },
    appName: {
        fontSize: FontSizes.xxxLarge,
        fontFamily: Fonts.bold,
        color: AppColors.white,
        backgroundColor: AppColors.primary,
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 6,
        marginTop: 6,
    },
    profilecardConatiner: {
        height: DimensionsUtil.SCREEN_HEIGHT / 4
    },
    button: {
        marginTop: 30,
        backgroundColor: AppColors.primary,
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 8,
        height:DimensionsUtil.SCREEN_WIDTH/9,
        width:DimensionsUtil.SCREEN_WIDTH/3,
        alignItems:'center',
        justifyContent:'center'
    },
    buttonText: {
        color: AppColors.white,
        fontSize: FontSizes.mediumLarge,
        fontFamily: Fonts.semiBold,
    },
});
