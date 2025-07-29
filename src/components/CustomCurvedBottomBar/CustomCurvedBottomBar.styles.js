import { StyleSheet } from 'react-native';
import { AppColors } from '../../constants/colors';
import { FontSizes } from '../../constants/fontsizes';
import DimensionsUtil from '../../constants/Dimensions';
import { Fonts } from '../../constants/Fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.white,
  },
  content: {
    flex: 1,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    width: DimensionsUtil.SCREEN_WIDTH,
    height: 90,
  },
  svgContainer: {
    position: 'absolute',
    bottom: 0,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 90,
    width: DimensionsUtil.SCREEN_WIDTH,
    // paddingHorizontal: 10,
  },
  tabLabel: {
    fontSize: FontSizes.smallMedium,
    color: AppColors.white,
    // marginTop: 4,
    marginBottom: 26,
  },
  activeTabLabel: {
    fontFamily: Fonts.bold,
    fontSize: FontSizes.smallMedium,
  },
  activeIconContainer: {
    backgroundColor: AppColors.buttonOrange,
    borderRadius: 100,
    padding: 10,
    top: -14,
  },
  inactiveIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 8,
  },
  activeIconText: {
    fontSize: 10,
    color: AppColors.white,
    textAlign: 'center',
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: DimensionsUtil.SCREEN_WIDTH / 3,
  },
  tabContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
