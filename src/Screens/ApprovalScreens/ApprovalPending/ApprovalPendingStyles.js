import { StyleSheet } from "react-native";
import { AppColors } from "../../../constants/colors";
import { FontSizes } from "../../../constants/fontsizes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.white,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  heading: {
    fontSize: FontSizes.heading,
    fontWeight: '700',
    color: AppColors.textPrimary,
    marginTop: 20,
    textAlign: 'center',
  },
  icon: {
    width: 100,
    height: 100,
    marginVertical: 30,
  },
  subtext: {
    fontSize: FontSizes.medium,
    color: AppColors.textPrimary,
    textAlign: 'center',
    lineHeight: 22,
  },
  boldText: {
    fontSize: FontSizes.medium,
    fontWeight: '700',
    color: AppColors.textPrimary,
    marginTop: 8,
    marginBottom: 40,
    textAlign: 'center',
  },
  disabledButton: {
    backgroundColor: AppColors.grayLight,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 16,
  },
  disabledButtonText: {
    color: AppColors.gray,
    fontWeight: '500',
    fontSize: FontSizes.medium,
  },
  viewMotorsBtn: {
    borderWidth: 1,
    borderColor: AppColors.primary,
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  viewMotorsText: {
    color: AppColors.primary,
    fontSize: FontSizes.medium,
    fontWeight: '500',
  },
});
