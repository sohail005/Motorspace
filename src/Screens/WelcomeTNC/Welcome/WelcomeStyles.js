// WelcomeStyles.js
import { StyleSheet } from 'react-native';
import { AppColors } from '../../../constants/colors';
import { FontSizes } from '../../../constants/fontsizes';
import { Fonts } from '../../../constants/Fonts';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        backgroundColor: 'white',
    },
    welcomeText: {
        fontSize: FontSizes.ultraLarge,
        fontFamily: Fonts.bold,
        color: AppColors.primary,
    },
    userDetailscontainer: {
        marginVertical: 80,
        alignItems: 'center'

    },
    appName: {
        fontSize: FontSizes.xxxLarge,
        fontFamily: Fonts.bold,
        color: 'white',
        backgroundColor: AppColors.primary,
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 6,
        marginTop: 6,
    },
    profileImage: {
        height: 80,
        width: 80,
        borderRadius: 40,
    },
    name: {
        fontSize: 18,
        fontFamily: Fonts.bold,
        color: AppColors.primary,
        marginTop: 12,
    },
    role: {
        fontSize: 14,
        color: AppColors.buttonOrange,
        marginTop: 4,
    },
    button: {
        marginTop: 30,
        backgroundColor: AppColors.primary,
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 8,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontFamily: Fonts.bold,
    },
});
