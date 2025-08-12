import { StyleSheet } from "react-native";
import { AppColors } from "../../constants/colors";
import { FontSizes } from "../../constants/fontsizes";
import { Fonts } from "../../constants/Fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.defaultBackground
  },
  topBar: {
    backgroundColor: AppColors.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // padding: 16,
    alignItems: 'center'
  },
  mymotorsapcaeHeaderContainer: {
    backgroundColor: AppColors.white
  },
  topBarTitle: {
    color: AppColors.white,
    fontSize: FontSizes.ultraLarge,
    fontWeight: 'bold'
  },
  divider: {
    backgroundColor: AppColors.borderColor,
    height: 1,
    width: '95%',
    alignSelf: 'center',
    marginVertical: 16
  },
  scrollContent: {

  },
  screenTitle: {
    fontSize: FontSizes.ultraLarge,
    fontFamily: Fonts.bold,
    color: AppColors.primary,
    paddingLeft: 16
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: AppColors.defaultBackground,
    padding: 18,
    borderRadius: 10,
  },
  avatar: { width: 55, height: 55, borderRadius: 25, marginRight: 12 },
  name: { fontSize: FontSizes.xxLarge, fontWeight: 'bold', color: AppColors.primary },
  subText: { fontSize: FontSizes.mediumLarge, color: AppColors.buttonOrange, fontFamily: Fonts.semiBold },
  menuItem: {
    // flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: AppColors.white,
    margin: 12,
    borderRadius: 10,
    padding: 10,
    paddingVertical: 16
  },
  innercarditemsConatiner: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconLabelRow: {
    flexDirection: 'row', alignItems: 'center',
    paddingHorizontal: 5
  },
  menuLabel: {
    marginLeft: 10,
    fontSize: FontSizes.large,
    color: AppColors.primary,
    fontFamily: Fonts.semiBold

  },
  badge: {
    backgroundColor: 'red',
    borderRadius: 10,
    height: 20,
    width: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  badgeText: { color: AppColors.white, fontSize: 12, fontWeight: 'bold' }
});