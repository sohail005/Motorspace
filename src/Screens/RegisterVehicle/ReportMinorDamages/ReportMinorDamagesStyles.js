// src/screens/YourScreenFolder/RegisterYourFirstMotorStyles.js
import { StyleSheet, Dimensions } from 'react-native';
import { AppColors } from '../../../constants/colors'; // Adjust the path if needed
import { FontSizes } from '../../../constants/fontsizes';
import DimensionsUtil from '../../../constants/Dimensions';
import { Fonts } from '../../../constants/Fonts';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.defaultBackground,

    },
    containerContent: {
        flex: 1,
        alignItems: 'center',
    },
    // Title
    screenTitle: {
        fontSize: FontSizes.ultraLarge,
        color: AppColors.primary || '#000000',
        textAlign: 'center',
        fontFamily: Fonts.bold
    },
    AddButtonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: DimensionsUtil.SCREEN_HEIGHT / 8,
        alignContent: 'center',
        width: DimensionsUtil.SCREEN_WIDTH / 1.1,

    },
    // Main Content
    mainContent: {
        alignItems: 'center',
        flex: 1,

    },
    addMotorButton: {
        width: 60,
        height: 60,
        borderRadius: 36,
        backgroundColor: AppColors.buttonOrange,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 12,
    },
    addMotorText: {
        fontSize: FontSizes.large,
        color: AppColors.buttonOrange || '#333333',
        fontFamily: Fonts.bold,
        textAlign: 'center',
        width: DimensionsUtil.SCREEN_WIDTH / 1.1,
    },

    // Bottom Buttons
    bottomButtons: {
        position: 'absolute',
        bottom: 20,
        right: 20
    },
    editButton: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: AppColors.primary,
        width: DimensionsUtil.SCREEN_WIDTH / 2.5,
        height: DimensionsUtil.SCREEN_WIDTH / 9,
        alignItems: 'center',
        justifyContent: 'center'
    },
    editButtonText: {
        color: AppColors.primary || '#000',
        fontSize: FontSizes.medium,
        fontFamily: Fonts.semiBold,
        padding: 12,
        textAlign: 'center'
    },
    finishButton: {
        marginLeft: 8,
        paddingVertical: 14,
        backgroundColor: AppColors.primary || '#007bff',
        borderRadius: 8,
        alignItems: 'center',
        width: DimensionsUtil.SCREEN_WIDTH / 2.5,
        alignItems: 'center',
        justifyContent: 'center',
        height: DimensionsUtil.SCREEN_WIDTH / 9,
        alignSelf: 'flex-end'
    },
    finishButtonText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: Fonts.semiBold,
    },
    listContainer: {
        width: DimensionsUtil.SCREEN_WIDTH / 1.1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    damageItemContainer: {
        width: '100%',
        borderWidth: 2,
        borderColor: AppColors.buttonOrange,
        borderRadius: 10,
        padding: 10,
        justifyContent: 'center',
        backgroundColor: AppColors.white,
        marginTop: 15,
        width: DimensionsUtil.SCREEN_WIDTH / 1.1,
    },
    damageItemHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    damageTitle: {
        fontSize: FontSizes.mediumLarge,
        fontFamily: Fonts.semiBold,
        color: AppColors.textPrimary,
        paddingLeft: 10,
        width: DimensionsUtil.SCREEN_WIDTH / 1.4,
        textAlignVertical: 'center',
    },
    itemTitleConatiner: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    damageItemDetails: {
        paddingHorizontal: 32,
        borderTopColor: AppColors.borderColor || '#ccc',
        paddingTop: 15
    },

    damageDetailText: {
        fontSize: FontSizes.medium,
        color: AppColors.textPrimary,
        fontWeight: '500'
    },
    damageDetailImage: {
        width: DimensionsUtil.SCREEN_WIDTH / 1.4,
        height: DimensionsUtil.SCREEN_WIDTH / 2,
        borderRadius: 8,
        margin: 8,
    },
    flatlistConatiner: {
        alignItems: 'center',
    }

});
