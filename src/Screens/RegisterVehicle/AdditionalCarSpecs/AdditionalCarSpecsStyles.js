import { StyleSheet } from 'react-native';
import { AppColors } from '../../../constants/colors';
import { FontSizes } from '../../../constants/fontsizes';
import DimensionsUtil from '../../../constants/Dimensions';
import { Fonts } from '../../../constants/Fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.defaultBackground,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  screenTitle: {
    fontSize: FontSizes.ultraLarge,
    fontFamily: Fonts.bold,
    color: AppColors.primary,
    marginBottom: 16,
    marginTop: 10,
  },
  scrollContent: {
    paddingBottom: 80,
  },
  specItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: AppColors.Blue_Subtext,
    borderColor: AppColors.borderColor,
    paddingVertical: 18,
  },
  specText: {
    fontSize: FontSizes.large,
    fontFamily: Fonts.semiBold,
    color: AppColors.textPrimary,
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: AppColors.defaultBackground,
  },
  skipButton: {
    borderWidth: 1,
    borderColor: AppColors.primary,
    borderRadius: 8,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: DimensionsUtil.SCREEN_WIDTH / 2.5,
    height: DimensionsUtil.SCREEN_WIDTH / 9,
  },
  skipButtonText: {
    fontSize: FontSizes.medium,
    fontFamily: Fonts.semiBold,
    color: AppColors.primary,
  },
  submitButton: {
    backgroundColor: AppColors.primary,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: DimensionsUtil.SCREEN_WIDTH / 2.5,
    height: DimensionsUtil.SCREEN_WIDTH / 9,
  },
  submitButtonText: {
    color: AppColors.white,
    fontFamily: Fonts.semiBold,
    fontSize: FontSizes.medium,
  },
  expandedContent: {
    // paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: AppColors.lightGray || '#f5f5f5',
    borderBottomWidth: 1,
    borderBottomColor: AppColors.borderColor,
  },
  expandedText: {
    fontSize: 14,
    color: AppColors.textSecondary,
    fontFamily: Fonts.regular,
  },

});
