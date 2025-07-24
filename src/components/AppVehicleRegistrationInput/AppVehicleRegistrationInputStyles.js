import { StyleSheet } from 'react-native';
import { FontSizes } from '../../constants/fontsizes';
import { AppColors } from '../../constants/colors';

export const styles = StyleSheet.create({
    plateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: AppColors.plateYellow, // Yellow plate
        borderColor: AppColors.greenLabel,     // Thin green border (from image outline)
        borderWidth: 2,
        borderRadius: 8,
        width: '70%',
        alignSelf: 'center',
        overflow: 'hidden',
        height:80
    },
    input: {
        flex: 1,
        fontSize: FontSizes.ultraLarge,
        // fontWeight: 'bold',
        color: '#000',
        letterSpacing: 4,
        textAlign: 'center',         // Centers text and cursor
        writingDirection: 'rtl',     // Ensures Left-To-Right input
        paddingHorizontal: 16,
        backgroundColor: 'transparent',
        fontFamily: 'UKNumberPlate'
    },
});
