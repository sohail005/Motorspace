import { StyleSheet } from 'react-native';
import { AppColors } from '../../../constants/colors';
import { FontSizes } from '../../../constants/fontsizes';
import { Fonts } from '../../../constants/Fonts';
import DimensionsUtil from '../../../constants/Dimensions';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.defaultBackground,
    },
    contentContainer: {
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    innerContainer: {
        flex: 1,
    },
    spacer: {
        height: 100, // ensures space for bottom buttons when scrolling
    },
    title: {
        fontSize: FontSizes.ultraLarge,
        fontFamily: Fonts.bold,
        color: AppColors.primary,
        marginBottom: 10,
    },
    subtitle: {
        fontSize: FontSizes.medium,
        fontFamily: Fonts.regular,
        color: AppColors.textSecondary,
        marginBottom: 20,
    },
    inputRow: {
        flexDirection: 'row',
        height: 50,
        marginBottom: 15,
        alignItems:'center'
    },
    input: {
        borderRadius: 8,
        fontSize: FontSizes.medium,
        width: DimensionsUtil.SCREEN_WIDTH / 1.25,
        borderWidth: 1,
        borderColor:AppColors.borderColor
    },
    addButton: {
        width: 50,
        height: 50,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: AppColors.borderColor,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10
    },
    featureItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: AppColors.cardBackground,
        borderWidth: 1,
        borderColor: AppColors.borderColor,
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
        width: DimensionsUtil.SCREEN_WIDTH / 1.25,
        alignItems: 'center'
    },
    featureText: {
        fontSize: FontSizes.medium,
        fontFamily: Fonts.regular,
        color: AppColors.textPrimary,
        flex: 1,
        paddingLeft: 10
    },
    placeholderText: {
        fontSize: FontSizes.medium,
        fontFamily: Fonts.regular,
        color: AppColors.grayOverlay,
        textAlign: 'center',
        marginTop: 30,
    },
    bottomButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: 0,
        width: DimensionsUtil.SCREEN_WIDTH,
        padding: 20,
        backgroundColor: AppColors.white
    },
    skipButton: {
        borderWidth: 1,
        borderColor: AppColors.primary,
        borderRadius: 8,
        width: DimensionsUtil.SCREEN_WIDTH / 2.5,
        height: DimensionsUtil.SCREEN_WIDTH / 9,
        justifyContent: 'center',
        alignItems: 'center',
    },
    skipButtonText: {
        color: AppColors.primary,
        fontFamily: Fonts.semiBold,
        fontSize: FontSizes.medium,
    },
    submitButton: {
        borderRadius: 8,
        backgroundColor: AppColors.primary,
        height: DimensionsUtil.SCREEN_WIDTH / 9,
        justifyContent: 'center',
        alignItems: 'center',
        width: DimensionsUtil.SCREEN_WIDTH / 2.5
    },
    submitButtonText: {
        color: AppColors.white,
        fontFamily: Fonts.semiBold,
        fontSize: FontSizes.medium,
    },
});
