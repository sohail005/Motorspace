import { StyleSheet } from 'react-native';
import { AppColors } from '../../../constants/colors';
import { FontSizes } from '../../../constants/fontsizes';
import { Fonts } from '../../../constants/Fonts';
import DimensionsUtil from '../../../constants/Dimensions';

export const styles = StyleSheet.create({
  container: {
    // padding: 16,
    backgroundColor: AppColors.white,
  },
  scrollContainer: {
    padding: 25,
    paddingBottom: 200, // Ensure enough space for the footer
  },
  title: {
    fontSize: FontSizes.ultra,
    color: AppColors.primary,
    fontFamily: Fonts.bold,
    alignSelf: 'center',
    marginBottom: 20,
  },
  plateBadge: {
    backgroundColor: AppColors.plateYellow, // Yellow
    paddingHorizontal: 14,
    paddingVertical: 4,
    borderRadius: 4,
    marginRight: 10,
  },
  section: {
    marginBottom: 20,
    // borderBottomWidth: 1,
    borderBottomColor: AppColors.borderColor,
    // paddingBottom: 12,
  },
  divider: {
    height: 2,
    backgroundColor: AppColors.primary,
    marginBottom: 16,
  },
  dividerthin: {
    height: 0.5,
    backgroundColor: AppColors.primary,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: FontSizes.xLarge,
    color: AppColors.primary,
    fontFamily: Fonts.semiBold,
    marginTop: 12,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowStart: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  name: {
    fontSize: FontSizes.xLarge,
    fontFamily: Fonts.bold,
    color: AppColors.primary,
    width: DimensionsUtil.SCREEN_WIDTH / 1.4, // Adjusted for better fit
  },
  company: {
    fontSize: FontSizes.medium,
    color: AppColors.buttonOrange,
    fontFamily: Fonts.semiBold,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 5,
    marginRight: 10,
  },
  carTitle: {
    fontSize: FontSizes.large,
    fontFamily: Fonts.bold,
    color: AppColors.textPrimary,
    marginBottom: 4,
    width: DimensionsUtil.SCREEN_WIDTH / 1.2,
  },
  carSubtitle: {
    fontSize: FontSizes.smallMedium,
    color: AppColors.textSecondary,
    marginBottom: 8,
    width: DimensionsUtil.SCREEN_WIDTH / 1.2,
  },
  regPlateContainer: {
    alignSelf: 'flex-start',
    backgroundColor: AppColors.yellow,
    borderRadius: 4,
    // paddingHorizontal: 12,
    paddingVertical: 4,
    marginBottom: 10,
  },
  regPlate: {
    color: AppColors.black,
    fontSize: FontSizes.medium,
    fontFamily: Fonts.bold,
  },
  label: {
    fontSize: FontSizes.medium,
    fontFamily: Fonts.semiBold,
    color: AppColors.textPrimary,
  },
  price: {
    fontSize: FontSizes.xxxLarge,
    fontFamily: Fonts.bold,
    color: AppColors.textPrimary,
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    gap: 10,
  },
  contactButton: {
    backgroundColor: AppColors.primary,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    width: DimensionsUtil.SCREEN_WIDTH / 2.3,
  },
  contactText: {
    color: AppColors.white,
    fontFamily: Fonts.bold,
    fontSize: FontSizes.medium,
  },
  emailButton: {
    backgroundColor: AppColors.buttonOrange,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    width: DimensionsUtil.SCREEN_WIDTH / 2.3,
  },
  emailText: {
    color: AppColors.white,
    fontFamily: Fonts.bold,
    fontSize: FontSizes.medium,
  },
  proceedButtonContainer: {
    marginTop: 20,
    marginBottom: 50,
    alignItems: 'center',
    justifyContent: 'center',
    // flex: 1,
    width: DimensionsUtil.SCREEN_WIDTH, // Adjusted for better fit
    alignSelf: 'center',
  },
  proceedButton: {
    // flex:1,
    width: DimensionsUtil.SCREEN_WIDTH / 1.2,
    backgroundColor: AppColors.quickbuy,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    // marginTop: 30,
  },
  proceedText: {
    color: AppColors.white,
    fontSize: FontSizes.large,
    fontFamily: Fonts.bold,
  },
});
