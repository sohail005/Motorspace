import { StyleSheet } from 'react-native';
import DimensionsUtil from '../../../constants/Dimensions';
import { AppColors } from '../../../constants/colors';
import { FontSizes } from '../../../constants/fontsizes';
import { Fonts } from '../../../constants/Fonts';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.white,
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    header: {
        fontSize: FontSizes.ultra,
        color: AppColors.white,
        backgroundColor: AppColors.primary,
        padding: 10,
        borderRadius: 6,
        fontFamily: Fonts.semiBold
    },
    topContainer: {
        alignItems: 'center'
    },
    subHeader: {
        fontSize: FontSizes.xxLarge,
        fontFamily: Fonts.semiBold,
        color: AppColors.primary,
        marginTop: 10,
    },
    instruction: {
        fontSize: FontSizes.large,
        fontFamily: Fonts.semiBold,
        color: AppColors.primary,
        marginTop: 8,
    },
    termsList: {
        marginTop: 16,
        marginBottom: 10,
        flex: 1,
    },
    termItem: {
        fontSize: FontSizes.medium,
        color: '#333333',
        marginBottom: 8,
        lineHeight: 20,
    },
    linkButton: {
        alignSelf: 'flex-end',
        marginTop: 4,
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: AppColors.primary,
        borderRadius: 6,
    },
    linkButtonText: {
        fontSize: 14,
        color: AppColors.primary,
        fontWeight: '600',
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginTop: 20,
    },
    checkboxText: {
        flex: 1,
        fontSize: 13,
        color: '#777777',
        marginLeft: 10,
        lineHeight: 18,
    },
    continueButton: {
        marginTop: 30,
        backgroundColor: AppColors.primary,
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: 'center',
    },
    continueButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    bottomContainer: {
        position: 'absolute',
        bottom: 0,
        width: DimensionsUtil.SCREEN_WIDTH,
        padding: 25
    }
});
