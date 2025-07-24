// src/screens/YourScreenFolder/RegisterYourFirstMotorStyles.js
import { StyleSheet, Dimensions } from 'react-native';
import { AppColors } from '../../../constants/colors'; // Adjust the path if needed
import { FontSizes } from '../../../constants/fontsizes';
import DimensionsUtil from '../../../constants/Dimensions';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.defaultBackground,
        // paddingHorizontal: 16,
        // paddingTop: 16,
    },
    containerContent: {
        flex: 1,
        // paddingHorizontal: 16,
    },
    // Navigation Bar
    navigationBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 24,
    },
    backButton: {
        padding: 8,
    },
    logoButton: {
        padding: 8,
    },

    // Title
    screenTitle: {
        fontSize: FontSizes.ultraLarge,
        fontWeight: 'bold',
        color: AppColors.primary || '#000000',
        textAlign: 'center',
        marginBottom: 32,
    },

    // Main Content
    mainContent: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    addMotorButton: {
        width: 72,
        height: 72,
        borderRadius: 36,
        backgroundColor: AppColors.buttonOrange,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 12,
    },
    addMotorText: {
        fontSize: FontSizes.xLarge,
        color: AppColors.buttonOrange || '#333333',
        fontWeight: '500'
    },

    // Bottom Buttons
    bottomButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: AppColors.white,
        padding: 20,
        justifyContent: 'space-around'
    },
    editButton: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: AppColors.primary,
        width: DimensionsUtil.SCREEN_WIDTH / 2.5
    },
    editButtonText: {
        color: AppColors.primary || '#000',
        fontSize: FontSizes.medium,
        fontWeight: '500',
        padding: 12,
        textAlign: 'center'
    },
    finishButton: {
        flex: 1,
        marginLeft: 8,
        paddingVertical: 14,
        backgroundColor: AppColors.primary || '#007bff',
        borderRadius: 8,
        alignItems: 'center',
        width: DimensionsUtil.SCREEN_WIDTH / 2.5
    },
    finishButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});
