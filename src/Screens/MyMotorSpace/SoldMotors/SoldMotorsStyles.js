import { StyleSheet } from "react-native";
import { AppColors } from "../../../constants/colors";
import { FontSizes } from "../../../constants/fontsizes";
import { Fonts } from "../../../constants/Fonts";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.defaultBackground,
    },
    scrollContent: {
        backgroundColor: AppColors.defaultBackground,
        marginHorizontal: 15

    },
    sectionTitle: {
        fontSize: FontSizes.ultra,
        color: AppColors.primary,
        fontFamily: Fonts.bold,
    },
    mainContent: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    addMotorButton: {
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: AppColors.buttonOrange,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 12,
    },
    addMotorText: {
        fontSize: FontSizes.xLarge,
        color: AppColors.buttonOrange || '#333333',
        fontFamily: Fonts.bold
    },
    titleConatiner: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10
    }
});