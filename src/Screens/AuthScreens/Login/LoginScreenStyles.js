import { StyleSheet } from 'react-native';
import DimensionsUtil from '../../../constants/Dimensions';
import { AppColors } from '../../../constants/colors';
import { FontSizes } from '../../../constants/fontsizes';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: DimensionsUtil.SCREEN_WIDTH / 8,
        backgroundColor: AppColors.white,
        justifyContent: 'center',
    },
    logo: {
        width: DimensionsUtil.SCREEN_WIDTH / 4.5,
        height: DimensionsUtil.SCREEN_WIDTH / 4.5,
        alignSelf: 'center',
    },
    loginHeading: {
        fontSize: FontSizes.ultraLarge,
        fontWeight: '900',
        color: AppColors.primary,
        marginTop: DimensionsUtil.SCREEN_WIDTH / 4.5,
        marginBottom: 24,

    },
    signInButton: {
        height: DimensionsUtil.SCREEN_WIDTH / 9,
        width: DimensionsUtil.SCREEN_WIDTH / 2.3,
        borderRadius: 8,
        backgroundColor: AppColors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 16,
        // marginBottom: height / 4,
    },
    signInText: {
        color: AppColors.white,
        fontSize: FontSizes.medium,
        fontWeight: '600',

    },
    footer: {
        // padding: width / 8,
        // position: 'absolute',
        // bottom: 10,
        marginTop: DimensionsUtil.SCREEN_HEIGHT / 12
    },
    newText: {
        width: '100%',
        fontSize: FontSizes.ultraLarge,
        fontWeight: '900',
        color: AppColors.primary,
    },
    brandText: {
        width: '100%',
        fontSize: FontSizes.ultraLarge,
        fontWeight: '900',
        color: AppColors.primary,
        marginBottom: 12,
    },
    joinButton: {
        height: DimensionsUtil.SCREEN_WIDTH / 9,
        width: DimensionsUtil.SCREEN_WIDTH / 2.3,
        borderRadius: 8,
        backgroundColor: AppColors.buttonOrange,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 32,
    },
    joinText: {
        color: AppColors.white,
        fontSize: FontSizes.medium,
        fontWeight: '600',
    },
});