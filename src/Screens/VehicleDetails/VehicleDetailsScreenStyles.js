import { StyleSheet } from 'react-native';
import { AppColors } from '../../constants/colors';
import DimensionsUtil from '../../constants/Dimensions';
import { FontSizes } from '../../constants/fontsizes';
import { Fonts } from '../../constants/Fonts';

export const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: AppColors.white,
        margin: 15,
        borderRadius: 12,
        elevation: 5,
        shadowColor: AppColors.textPrimary,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        padding: 15,

    },
    declineOffer: {
        backgroundColor: AppColors.redLabel,
        marginRight: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: DimensionsUtil.SCREEN_WIDTH / 9,
        width: DimensionsUtil.SCREEN_WIDTH / 2.4,
    },


    statusRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 6,
    },

    statusLabel: {
        fontFamily: Fonts.bold,
        color: AppColors.textPrimary,
        fontSize: FontSizes.medium,
    },

    statusValue: {
        color: AppColors.quickbuy,
        fontFamily: Fonts.bold,
        fontSize: FontSizes.mediumLarge,
    },

    capLabel: {
        color: AppColors.textSecondary,
        fontSize: FontSizes.small,
        fontFamily: Fonts.semiBold,
    },

    capStrike: {
        textDecorationLine: 'line-through',
        color: AppColors.textSecondary,
        fontFamily: Fonts.semiBold,
    },

    statusPill: {
        backgroundColor: AppColors.successgb,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 8,
        alignSelf: 'center',
        marginVertical: 10,
        borderWidth: 1,
        borderColor: AppColors.success,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    statusPillText: {
        color: AppColors.quickbuy,
        fontFamily: Fonts.bold,
        fontSize: FontSizes.medium,
        paddingTop: 5,
    },

    timestamp: {
        color: AppColors.quickbuy,
        fontFamily: Fonts.bold,
        fontSize: FontSizes.medium,
        paddingTop: 5,
    },

    overlay: {
  flex: 1,
  backgroundColor: 'rgba(0,0,0,0.5)',  // bring this back
  justifyContent: 'center',
  alignItems: 'center',
},

    content: {
        paddingVertical: 10,
        paddingBottom:150
    },
    title: {
        fontSize: FontSizes.xxxLarge,
        fontFamily: Fonts.bold,
        width: '80%',
    },
    subtitle: {
        color: AppColors.Blue_Subtext,
        fontSize: 14,
        marginBottom: 8,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
        justifyContent: 'space-between',
    },
    plateBox: {
        backgroundColor: AppColors.plateYellow,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
        marginRight: 10,
    },
    plateText: {
        fontWeight: '900',
        color: AppColors.textPrimary,
        fontSize: FontSizes.medium,
    },
    conditionText: {
        color: AppColors.likeNew,
        fontWeight: '700',
    },
    dealerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginBottom: 8,
    },
    dealerName: {
        color: AppColors.textGrey,
        paddingLeft: 5,
        fontWeight: '700',
        maxWidth: DimensionsUtil.SCREEN_WIDTH / 4,
    },
    timeListed: {
        marginLeft: 'auto',
        fontSize: FontSizes.small,
        color: AppColors.textSecondary,
        fontFamily: Fonts.semiBold,
    },
    price: {
        fontWeight: '900',
        fontSize: FontSizes.large,
        marginLeft: 'auto',
        color: AppColors.quickbuy,
    },
    divider: {
        marginVertical: 10,
        backgroundColor: AppColors.textSecondary,
    },
    sectionTitle: {
        fontFamily: Fonts.semiBold,
        marginBottom: 6,
        fontSize: FontSizes.xLarge,
    },
    infoGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    infoItem: {
        width: '48%',
        marginBottom: 6,
        flexDirection: 'row',
    },
    infoLabel: {
        fontFamily: Fonts.bold,
        fontSize: FontSizes.medium,
        color: AppColors.textPrimary,
        width: DimensionsUtil.SCREEN_WIDTH / 6,
    },
    infoValue: {
        color: AppColors.textGrey,
        fontSize: FontSizes.smallMedium,
        fontFamily: Fonts.semiBold,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 8,
        flex: 1,
    },
    button: {
        flex: 1,
        // marginHorizontal: 4,
        borderWidth: 1,
        borderColor: AppColors.primary,
        // padding: 12,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: DimensionsUtil.SCREEN_WIDTH / 2.5,
        height: DimensionsUtil.SCREEN_WIDTH / 9,
    },
    sellerRow: {
        marginBottom: 6,
        flexDirection: 'row',
    },
    sellerLabel: {
        fontFamily: Fonts.bold,
        fontSize: FontSizes.medium,
        color: AppColors.textPrimary,
        width: DimensionsUtil.SCREEN_WIDTH / 3.4,
    },
    sellerValue: {
        color: AppColors.textPrimary,
        width: DimensionsUtil.SCREEN_WIDTH / 2,
        fontSize: FontSizes.smallMedium,
        fontFamily: Fonts.semiBold,
    },
    bottomButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    sendOffer: {
        backgroundColor: AppColors.link,
        width: DimensionsUtil.SCREEN_WIDTH / 3.3,
        borderRadius: 10,
    },
    buyNow: {
        backgroundColor: AppColors.quickbuy,
        width: DimensionsUtil.SCREEN_WIDTH / 1.9,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    sendOfferText: {
        color: AppColors.white,
        fontSize: FontSizes.medium,
        fontFamily: Fonts.semiBold,
        textAlign: 'center',
        height: DimensionsUtil.SCREEN_WIDTH / 9,
        textAlignVertical: 'center',
        paddingVertical: 14,
    },
    EditDetailsButtonText: {
        color: AppColors.primary,
        fontSize: FontSizes.medium,
        fontFamily: Fonts.semiBold,
        textAlign: 'center',
    },
    EditDetailsButton: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: AppColors.primary,
        height: DimensionsUtil.SCREEN_WIDTH / 9,
        width: DimensionsUtil.SCREEN_WIDTH / 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ArchiveListingButtontext: {
        color: AppColors.white,
        fontSize: FontSizes.medium,
        fontFamily: Fonts.semiBold,
        textAlign: 'center',
    },
    ArchiveListingButton: {
        height: DimensionsUtil.SCREEN_WIDTH / 9,
        width: DimensionsUtil.SCREEN_WIDTH / 3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: AppColors.primary,
        borderRadius: 10,
    },
    offerDeclineButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
    },
    deleteButton: {
        alignItems: 'center',
        backgroundColor: AppColors.redLabel,
        borderRadius: 10,
        height: DimensionsUtil.SCREEN_WIDTH / 9,
        width: DimensionsUtil.SCREEN_WIDTH / 7,
        justifyContent: 'center',
    },
    ReportanIssueButton: {
        backgroundColor: AppColors.redLabel,
        height: DimensionsUtil.SCREEN_WIDTH / 9,
        width: DimensionsUtil.SCREEN_WIDTH / 2.8,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    ReportanIssueButtonText: {
        color: AppColors.white,
        fontSize: FontSizes.medium,
        fontFamily: Fonts.semiBold,
        textAlign: 'center',
    },
    CompleteSaleButton: {
        backgroundColor: AppColors.quickbuy,
        height: DimensionsUtil.SCREEN_WIDTH / 9,
        width: DimensionsUtil.SCREEN_WIDTH / 2.2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    viewOffer: {
        backgroundColor: AppColors.quickbuy,
        borderRadius: 10,
        justifyContent: 'center', // vertical centering
        alignItems: 'center',     // horizontal centering
        height: DimensionsUtil.SCREEN_WIDTH / 9,
        width: DimensionsUtil.SCREEN_WIDTH / 2.4,
    },

    CompleteSaleButtontext: {
        color: AppColors.white,
        fontSize: FontSizes.medium,
        fontFamily: Fonts.semiBold,
        textAlign: 'center',
        // REMOVE: height and textAlignVertical
    },


});
