import { StyleSheet } from "react-native";
import { AppColors } from "../../../constants/colors";
import DimensionsUtil from "../../../constants/Dimensions";
import { Fonts } from "../../../constants/Fonts";
import { FontSizes } from "../../../constants/fontsizes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.defaultBackground,
    },
    scrollContent: {
        paddingHorizontal: 16,
        paddingBottom: 30
    },
    sectionTitle: {
        fontSize: FontSizes.ultra,
        color: AppColors.primary,
        fontFamily: Fonts.bold,
    },
    locationText: {
        fontFamily: FontSizes.medium,
        color: AppColors.link,
        paddingLeft: 5
    },
    locationContiner: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10
    },
    topListConatiner: {
        marginBottom: 10
    },
    viewmoreButton: {
        marginVertical: 10
    },
    viewmore: {
        fontSize: FontSizes.large,
        textAlign: 'center',
        fontFamily: Fonts.semiBold,
        color: AppColors.primary
    },
    bottomListConatiner: {
        marginBottom: 100
    },
    searchbardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        // width: DimensionsUtil.SCREEN_WIDTH / 1.2,
        height: DimensionsUtil.SCREEN_WIDTH / 9,
        marginVertical: 20,
    },
    inputConatainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        backgroundColor: AppColors.white,
        borderRadius: 10
    },
    iconConatiner: {
        paddingHorizontal: 15
    },
    fillterButton: {
        backgroundColor: AppColors.white,
        marginLeft: 10,
        height: DimensionsUtil.SCREEN_WIDTH / 9,
        width: DimensionsUtil.SCREEN_WIDTH / 9,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    searchInput: {
        borderWidth: 0,
        fontSize: FontSizes.mediumLarge,
        height: DimensionsUtil.SCREEN_WIDTH / 9,
        borderRadius: 10,
        paddingVertical: 15,
        color: AppColors.textPrimary,
        flex: 1,
    }
});
