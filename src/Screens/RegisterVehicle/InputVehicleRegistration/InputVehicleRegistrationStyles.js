import { StyleSheet } from 'react-native';
import { FontSizes } from '../../../constants/fontsizes';
import { AppColors } from '../../../constants/colors';
import DimensionsUtil from '../../../constants/Dimensions';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentWrapper: {
        flex: 1,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: FontSizes.ultraLarge,
        fontWeight: '900',
        color: AppColors.primaryText || '#001F5B',
        marginTop: 20,
    },
    subtitle: {
        fontSize: FontSizes.mediumLarge,
        color: AppColors.primary || '#444',
        marginTop: 10,
        lineHeight: 20,
    },
    plateWrapper: {
        alignItems: 'center',
        marginVertical: 32,
    },
    successText: {
        textAlign: 'center',
        color: AppColors.greenLabel,
        fontSize: 14,
        marginBottom: 32,
    },
    confirmButton: {
        backgroundColor: AppColors.primary || '#001F5B',
        paddingVertical: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 40,
        width: DimensionsUtil.SCREEN_WIDTH / 2.5,
        alignSelf: 'center'
    },
    confirmButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    dvlaLogo: {
        width:  DimensionsUtil.SCREEN_WIDTH/2.3,
        height:  DimensionsUtil.SCREEN_WIDTH/4.5,
    },
    bottomView: {
        position: 'absolute',
        bottom: 50,
        width: DimensionsUtil.SCREEN_WIDTH
    }
});
