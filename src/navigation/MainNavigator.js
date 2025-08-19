// src/navigation/MainNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomCurvedBottomBar from '../components/CustomCurvedBottomBar/CustomCurvedBottomBar';
import { IMAGES } from '../assets/Images/ImagePath';
import BuyCarsStack from './BuyCarsStack';
import SellCarsStack from './SellCarsStack';
import MyMotorSpaceStack from './MyMotorSpaceStack';
import { resetStack } from './NavigationService';

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
        const activeIndex = props.state.index;

        const handleTabPress = (index) => {
          if (activeIndex === index) {
            // already on this tab → reset its stack
            const { name, firstScreen } = tabs[index];
            resetStack(name, firstScreen);
          } else {
            // let React Navigation change tab
            props.navigation.navigate(tabs[index].name);
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
