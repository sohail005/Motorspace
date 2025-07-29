import { StyleSheet } from 'react-native';
import { AppColors } from '../../../constants/colors';
import { FontSizes } from '../../../constants/fontsizes';
import { Fonts } from '../../../constants/Fonts';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.white,
    },
    mainConatiner: {
        paddingHorizontal: 25,
        alignItems: 'center',
        flex: 1
    },
    headerContainer: {
        marginTop: 10,
        alignSelf: 'center',
    },
    logoText: {
        fontSize: FontSizes.ultra,
        fontFamily: Fonts.bold,
        color: AppColors.white,
        backgroundColor: AppColors.primary,
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 6,
    },
    title: {
        fontSize: FontSizes.xLarge,
        color: AppColors.primary,
        marginTop: 6,
        alignSelf: 'center',
        fontFamily: Fonts.semiBold
    },
    termsScroll: {
        flex: 1,
        marginTop: 10,
        marginBottom: 20,
    },
    termItem: {
        fontSize: FontSizes.medium,
        color: AppColors.textPrimary,
        marginBottom: 12,
        lineHeight: 20,
    },
});
