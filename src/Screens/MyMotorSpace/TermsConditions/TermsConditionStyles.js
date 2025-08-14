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
        paddingVertical: 10,
        alignSelf: 'flex-start',
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
        fontSize: FontSizes.ultra,
        color: AppColors.primary,
        marginTop: 6,
        alignSelf: 'center',
        fontFamily: Fonts.bold,
        textAlign: 'left'
    },
    termsScroll: {
        flex: 1,
        // marginTop: 10,
        paddingBottom: 100,
    },
    termItem: {
        fontSize: FontSizes.medium,
        color: AppColors.textPrimary,
        marginBottom: 12,
        fontFamily: Fonts.regular,
        textAlign: 'justify',
    },
    blankSpace: {
        height: 150
    }
});
