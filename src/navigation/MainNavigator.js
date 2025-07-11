// src/navigation/MainNavigator.js
import React, { useState } from 'react';
import CustomCurvedBottomBar from '../components/CustomCurvedBottomBar/CustomCurvedBottomBar'; // your component
import BuycarsScreen from '../Screens/Buycars/BuycarsScreen';
import HomeScreen from '../Screens/Home/HomeScreen';
import SellcarsScreen from '../Screens/Sellcars/SellcarsScreen';
import { IMAGES } from '../assets/Images/ImagePath';

const MainNavigator = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: 'Buy Cars',
      icon: IMAGES.buycars,
      component: <BuycarsScreen />,
    },
    {
      label: 'My Motorspace',
      icon: IMAGES.home,
      component: <HomeScreen />,
    },
    {
      label: 'Sell Cars',
      icon: IMAGES.sellcars,
      component: <SellcarsScreen />,
    },
  ];

  return (
    <CustomCurvedBottomBar
      tabs={tabs}
      activeTab={activeTab}
      onTabPress={(index) => setActiveTab(index)}
    />
  );
};

export default MainNavigator;
