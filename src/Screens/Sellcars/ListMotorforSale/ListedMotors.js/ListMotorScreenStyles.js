import { StyleSheet } from "react-native";
import { AppColors } from "../../../../constants/colors";
import { Fonts } from "../../../../constants/Fonts";
import { FontSizes } from "../../../../constants/fontsizes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.defaultBackground,
    },
    header: {
        backgroundColor: AppColors.primaryDark,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 14,
        paddingVertical: 12,
    },
    headerTitle: {
        fontSize: FontSizes.medium,
        fontFamily: Fonts.bold,
        color: AppColors.white,
    },
    scroll: {
        paddingHorizontal: 16,
        paddingTop: 20,
        paddingBottom: 40,
    },
    pageTitle: {
        fontSize: FontSizes.ultra,
        color: AppColors.primary,
        fontFamily: Fonts.bold,
    },
    card: {
        backgroundColor: AppColors.white,
        borderRadius: 12,
        padding: 14,
        marginBottom: 14,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 6,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: FontSizes.large,
        fontFamily: Fonts.bold,
        color: AppColors.textPrimary,
    },
    subtitle: {
        fontSize: FontSizes.small,
        fontFamily: Fonts.regular,
        color: AppColors.textSecondary,
        marginBottom: 8,
    },
    regBox: {
        backgroundColor: AppColors.warning,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
        marginRight: 8,
    },
    regText: {
        fontSize: FontSizes.small,
        fontFamily: Fonts.semiBold,
        color: AppColors.textPrimary,
    },
    infoRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    status: {
        fontSize: FontSizes.small,
        marginRight: 8,
        fontFamily: Fonts.regular,
    },
    statusValue: {
        fontFamily: Fonts.semiBold,
    },
    added: {
        fontSize: FontSizes.small,
        fontFamily: Fonts.regular,
    },
    addedValue: {
        fontFamily: Fonts.semiBold,
        color: AppColors.textSecondary,
    },
    price: {
        fontSize: FontSizes.large,
        fontFamily: Fonts.bold,
        color: AppColors.primary,
    },
    registerBtn: {
        alignItems: 'center',
        marginTop: 24,
    },
    plusCircle: {
        backgroundColor: AppColors.accent,
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 8,
    },
    registerText: {
        fontSize: FontSizes.medium,
        fontFamily: Fonts.semiBold,
        color: AppColors.accent,
    },
    cardContainer: {
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
        backgroundColor: AppColors.white
    },
    title: {
        fontFamily: Fonts.bold,
        fontSize: FontSizes.large,
        color: AppColors.black,
    },
    subtitle: {
        fontFamily: Fonts.regular,
        fontSize: FontSizes.medium,
        color: AppColors.Blue_Subtext,
        marginBottom: 10,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rowBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 4,
    },
    regText: {
        fontFamily: Fonts.bold,
        fontSize: FontSizes.small,
        color: AppColors.black,
    },
    statusText: {
        fontFamily: Fonts.semiBold,
        fontSize: FontSizes.medium,
        color: AppColors.textPrimary
    },
    capLabel: {
        fontFamily: Fonts.regular,
        fontSize: FontSizes.small,
        color: AppColors.gobackButton,
    },
    capStrike: {
        fontFamily: Fonts.regular,
        fontSize: FontSizes.small,
        color: AppColors.gobackButton,
        textDecorationLine: 'line-through',
        // marginLeft: 4,
    },
    capStrike1: {
        fontFamily: Fonts.bold,
        fontSize: FontSizes.smallMedium,
        color: AppColors.textPrimary,
        textDecorationLine: 'line-through',
        textDecorationColor: AppColors.redLabel,
    },
    dateAdded: {
        fontFamily: Fonts.regular,
        fontSize: FontSizes.medium,
        color: AppColors.gobackButton,
    },
    price: {
        fontFamily: Fonts.bold,
        fontSize: FontSizes.xLarge,
        color: AppColors.textPrimary,
    },
    badge: {
        backgroundColor: AppColors.plateYellow,
        paddingHorizontal: 6,
        borderRadius: 5,
        alignSelf: 'flex-start',
        // marginTop: 12
    },
    badgeText: {
        fontSize: FontSizes.mediumLarge,
        color: AppColors.textPrimary,
        fontFamily: Fonts.UKNumberPlate,
        paddingHorizontal: 4,
        paddingVertical: 8,
    },
    mainContent: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        marginTop: 40
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
        fontFamily: Fonts.bold,
        width:'100%',
        textAlign: 'center',
    },
});