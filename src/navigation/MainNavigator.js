// src/navigation/MainNavigator.js
import React, { useCallback } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomCurvedBottomBar from '../components/CustomCurvedBottomBar/CustomCurvedBottomBar';
import { IMAGES } from '../assets/Images/ImagePath';
import BuyCarsStack from './BuyCarsStack';
import SellCarsStack from './SellCarsStack';
import MyMotorSpaceStack from './MyMotorSpaceStack';
import { resetStack } from './NavigationService';
import { CommonActions, StackActions, useFocusEffect } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setStatusBarColor } from '../redux/features/user/userSlice';
import { AppColors } from '../constants/colors';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {

  const tabs = [
    {
      label: 'Buy Cars',
      icon: IMAGES.buycars,
      component: BuyCarsStack,
      name: 'BuyCarsTab',
      firstScreen: 'BuyCarsList',
    },
    {
      label: 'My Motorspace',
      icon: IMAGES.home,
      component: MyMotorSpaceStack,
      name: 'MyMotorSpaceTab',
      firstScreen: 'MyMotorSpace',
    },
    {
      label: 'Sell Cars',
      icon: IMAGES.sellcars,
      component: SellCarsStack,
      name: 'SellCarsTab',
      firstScreen: 'SellCarsList',
    },
  ];

  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => {
        let activeIndex = props.state.index;
        console.log("activeIndex:", activeIndex);

        const handleTabPress = (index) => {
          const activeIndex = props.state.index;
          const tabRoute = props.state.routes[index]; // { key, name, state? }
          const { name, firstScreen } = tabs[index];

          if (activeIndex === index) {
            // Re-tap active tab → pop to top of that stack
            // props.navigation.dispatch({
            //   ...StackActions.push(),
            //   target: tabRoute.key, // target the inner stack
            // });

            // (Optional) trigger tabPress event → lets useScrollToTop() work
            props.navigation.emit({ type: 'tabPress', target: tabRoute.key });
          } else {
            // Switch tab and go to its first screen
            props.navigation.navigate(name, { screen: firstScreen });
          }
        };


        return (
          <CustomCurvedBottomBar
            {...props}
            tabs={tabs}
            activeTab={activeIndex}
            onTabPress={handleTabPress}
          />
        );
      }}
    >
      <Tab.Screen name="BuyCarsTab" component={BuyCarsStack} />
      <Tab.Screen name="MyMotorSpaceTab" component={MyMotorSpaceStack} />
      <Tab.Screen name="SellCarsTab" component={SellCarsStack} />
    </Tab.Navigator>
  );
};

export default MainNavigator;
