import { StyleSheet } from 'react-native';
import { AppColors } from '../../constants/colors';
import { FontSizes } from '../../constants/fontsizes';
import DimensionsUtil from '../../constants/Dimensions';

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
    height: 70,
  },
  svgContainer: {
    position: 'absolute',
    bottom: 0,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 70,
    width: DimensionsUtil.SCREEN_WIDTH
    // paddingHorizontal: 10,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
  },
  tabContent: {
    alignItems: 'center',
  },
  activeTabItem: {},
  tabLabel: {
    fontSize: FontSizes.smallMedium,
    color: AppColors.white,
    // marginTop: 4,
    marginBottom: 15
  },
  activeTabLabel: {
    fontWeight: 'bold',
  },
  activeIconContainer: {
    backgroundColor: AppColors.buttonOrange,
    borderRadius: 100,
    padding: 8,
    top: -20,
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
    width:DimensionsUtil.SCREEN_WIDTH/3
  },
  tabContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
