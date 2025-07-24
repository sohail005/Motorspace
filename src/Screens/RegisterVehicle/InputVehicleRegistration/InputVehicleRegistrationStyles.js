import { StyleSheet } from 'react-native';
import { FontSizes } from '../../../constants/fontsizes';
import { AppColors } from '../../../constants/colors';
import DimensionsUtil from '../../../constants/Dimensions';
import { Fonts } from '../../../constants/Fonts';


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
        color: AppColors.primaryText || '#001F5B',
        marginTop: 20,
        fontFamily:Fonts.bold
    },
    subtitle: {
        fontSize: FontSizes.mediumLarge,
        color: AppColors.primary || '#444',
        marginTop: 10,
        lineHeight: 20,
        fontFamily:Fonts.regular
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
    ErrorText:{
        textAlign: 'center',
        color: AppColors.errorText,
        fontSize: 14,
        marginBottom: 32,
    },
    confirmButtonContainer:{
        width: DimensionsUtil.SCREEN_WIDTH / 2.5,
        alignSelf:'center'
    },
    confirmButton: {
        backgroundColor: AppColors.primary,
        paddingVertical: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 40,
        width: DimensionsUtil.SCREEN_WIDTH / 2.5,
        alignSelf: 'center',
        height:DimensionsUtil.SCREEN_WIDTH/9,
        justifyContent:'center'
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
