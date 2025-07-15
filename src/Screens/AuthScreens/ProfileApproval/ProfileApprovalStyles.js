import { StyleSheet } from 'react-native';
import { AppColors } from '../../../constants/colors';
import { FontSizes } from '../../../constants/fontsizes';
import DimensionsUtil from '../../../constants/Dimensions';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContainer: {
        paddingHorizontal: 24,
        paddingBottom: 40,
    },
    heading: {
        fontSize: FontSizes.ultraLarge,
        fontWeight: '900',
        color: AppColors.primary,
        marginTop: 24,
        marginBottom: 12,
    },
    description: {
        fontSize: FontSizes.mediumLarge,
        color: AppColors.primary,
        marginBottom: 12,
        fontWeight: '500'
    },
    bulletSection: {
        marginBottom: 24,
    },
    bullet: {
        fontSize: FontSizes.mediumLarge,
        color: AppColors.primary,
        marginVertical: 2,
        fontWeight: '700',
    },
    uploadBtn: {
        borderWidth: 1,
        borderColor: AppColors.primary,
        borderRadius: 8,
        paddingVertical: 10,
        alignItems: 'center',
        marginBottom: 12,
        width: DimensionsUtil.SCREEN_WIDTH / 3
    },
    uploadText: {
        color: AppColors.primary,
        fontWeight: '600',
    },
    fileInputBox: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: AppColors.borderColor,
        borderRadius: 12,
        padding: 12,
        marginBottom: 24,
    },
    attachmentIcon: {
        width: 20,
        height: 20,
        marginRight: 8,
    },
    fileName: {
        color: AppColors.textGray,
        fontSize: FontSizes.medium,
        paddingHorizontal:10
    },
    label: {
        fontSize: FontSizes.medium,
        fontWeight: '600',
        marginBottom: 8,
    },
    textArea: {
        minHeight: 100,
        textAlignVertical: 'top',
    },
    submitButton: {
        backgroundColor: AppColors.primary,
        borderRadius: 10,
        paddingVertical: 14,
        alignItems: 'center',
        marginTop: 24,
    },
    submitText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: FontSizes.medium,
    },
});
