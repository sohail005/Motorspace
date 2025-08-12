// src/navigation/MainNavigator.js
import React, { useState } from 'react';
import CustomCurvedBottomBar from '../components/CustomCurvedBottomBar/CustomCurvedBottomBar'; // your component
import { IMAGES } from '../assets/Images/ImagePath';
import BuyCarsStack from './BuyCarsStack';
import SellCarsStack from './SellCarsStack';
import MyMotorSpaceStack from './MyMotorSpaceStack';

const MainNavigator = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: 'Buy Cars',
      icon: IMAGES.buycars,
      component: <BuyCarsStack />,
    },
    {
      label: 'My Motorspace',
      icon: IMAGES.home,
      component: <MyMotorSpaceStack />,
    },
    {
      label: 'Sell Cars',
      icon: IMAGES.sellcars,
      component: <SellCarsStack />,
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
