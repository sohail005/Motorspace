import { StyleSheet } from 'react-native';
import { AppColors } from '../../../constants/colors';
import { FontSizes } from '../../../constants/fontsizes';
import { Fonts } from '../../../constants/Fonts';
import DimensionsUtil from '../../../constants/Dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.white,
  },
  scrollContainer: {
    padding: 20,
    alignItems: 'center',
    paddingBottom: 150, // Ensure enough space for the footer
  },
  imaegContainer: {
    marginTop: 20,
  },
  successImage: {
    width: 100,
    height: 100,
    marginVertical: 20,
  },
  title: {
    fontSize: FontSizes.ultraLarge,
    fontFamily: Fonts.bold,
    color: AppColors.primary,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: FontSizes.xLarge,
    fontFamily: Fonts.bold,
    color: AppColors.primary,
    textAlign: 'center',
    marginBottom: 30,
  },
  receiptCard: {
    width: '100%',
    backgroundColor: AppColors.defaultBackground,
    padding: 20,
    borderRadius: 15,
  },
  receiptTitle: {
    fontSize: FontSizes.xxLarge,
    fontFamily: Fonts.bold,
    color: AppColors.primary,
    marginBottom: 16,
  },
  rowStart: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 12,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 6,
  },
  name: {
    fontSize: FontSizes.large,
    fontFamily: Fonts.bold,
    color: AppColors.primary,
  },
  company: {
    fontSize: FontSizes.smallMedium,
    fontFamily: Fonts.semiBold,
    color: AppColors.buttonOrange,
  },
  divider: {
    height: 2,
    backgroundColor: AppColors.primary,
    marginVertical: 16,
  },
  dividerthin: {
    height: 0.5,
    backgroundColor: AppColors.primary,
    marginVertical: 8,
  },
  carTitle: {
    fontSize: FontSizes.large,
    fontFamily: Fonts.bold,
    color: AppColors.textPrimary,
  },
  carSubtitle: {
    fontSize: FontSizes.small,
    color: AppColors.textSecondary,
    marginBottom: 10,
  },
  regPlateContainer: {
    alignSelf: 'flex-start',
    marginBottom: 12,
  },
  plateBadge: {
    backgroundColor: AppColors.plateYellow,
    paddingHorizontal: 14,
    paddingVertical: 4,
    borderRadius: 4,
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
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backButton: {
    backgroundColor: AppColors.primary,
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginTop: 30,
  },
  backButtonText: {
    color: AppColors.white,
    fontFamily: Fonts.semiBold,
    fontSize: FontSizes.large,
  },
});
