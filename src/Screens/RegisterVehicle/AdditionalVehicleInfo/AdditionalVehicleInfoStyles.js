import { StyleSheet } from 'react-native';
import { AppColors } from '../../../constants/colors';
import DimensionsUtil from '../../../constants/Dimensions';
import { FontSizes } from '../../../constants/fontsizes';
import { Fonts } from '../../../constants/Fonts';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.white,
    },
    scrollContent: {
        padding: 16,
        paddingBottom: 100, // space for button
    },
    title: {
        fontSize: FontSizes.ultraLarge,
        color: AppColors.primaryText || '#001F5B',
        // marginTop: 20,
        fontFamily: Fonts.bold
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: AppColors.primary,
        marginTop: 24,
        marginBottom: 8,
    },
    inputWrapper: {
        marginBottom: 0,
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginTop: 4,
        marginLeft: 4,
    },
    inputErrorBorder: {
        borderColor: 'red',
        borderWidth: 1,
    },
    buttonConatainer: {
        position: 'absolute',
        bottom: 20,
        width: DimensionsUtil.SCREEN_WIDTH - 20,
        alignItems: 'flex-end'
    },
    submitButton: {
        alignSelf: 'center',
        backgroundColor: AppColors.primary,
        paddingHorizontal: 40,
        paddingVertical: 14,
        borderRadius: 10,
        width: DimensionsUtil.SCREEN_WIDTH / 2.5,
        height: DimensionsUtil.SCREEN_WIDTH / 9
    },
    submitButtonText: {
        color: AppColors.white,
        fontSize: FontSizes.medium,
        textAlign: 'center',
        fontFamily: Fonts.semiBold,
        marginTop: 4
    },
});
