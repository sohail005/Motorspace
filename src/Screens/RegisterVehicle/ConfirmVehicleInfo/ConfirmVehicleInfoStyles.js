import { StyleSheet } from 'react-native';
import { AppColors } from '../../../constants/colors'; // Your color constants
import { Fonts } from '../../../constants/Fonts';
import { FontSizes } from '../../../constants/fontsizes';
import DimensionsUtil from '../../../constants/Dimensions';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.white,
    },
    scrollContent: {
        padding: 20,
        paddingBottom: 100,
    },
    title: {
        fontSize: FontSizes.ultraLarge,
        fontFamily: Fonts.bold,
        color: AppColors.primary,
        marginBottom: 20,
    },
    buttonConteiner: {
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
        width: DimensionsUtil.SCREEN_WIDTH / 1.1,
        alignItems: 'flex-end'
    },
    confirmButton: {
        backgroundColor: AppColors.primary,
        borderRadius: 10,
        paddingVertical: 14,
        alignItems: 'center',
        width: DimensionsUtil.SCREEN_WIDTH / 2.5,
        height: DimensionsUtil.SCREEN_WIDTH / 9
    },
    confirmButtonText: {
        color: '#fff',
        fontSize: 16,
       fontFamily:Fonts.semiBold,
       marginTop:2
    },
});
