// src/components/CustomCurvedBottomBar.js

import React, { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, Text, TouchableOpacity, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { styles } from './CustomCurvedBottomBar.styles';
import AppImage from '../AppImage';
import { AppColors } from '../../constants/colors';
import AppText from '../AppText';
import { useDispatch } from 'react-redux';
import { setStatusBarColor } from '../../redux/features/user/userSlice';
import AppTouchable from '../AppTouchable';

const { width } = Dimensions.get('screen');

const CustomCurvedBottomBar = ({ tabs = [], activeTab = 0, onTabPress = () => { } }) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const curveCenterAnimated = useRef(new Animated.Value(0)).current;
  const [activeIndex, setActiveIndex] = useState(activeTab);
  const [curvePath, setCurvePath] = useState('');
  const pathRef = useRef();
  const dispatch = useDispatch();
  const tabWidth = width / tabs.length;

  const handleTabPress = (index) => {
    dispatch(setStatusBarColor(AppColors.primary));
    setActiveIndex(index);
    onTabPress(index);

    const newCurveCenter = (index * tabWidth) + (tabWidth / 2);

    Animated.parallel([
      Animated.spring(animatedValue, {
        toValue: index * tabWidth,
        useNativeDriver: false,
        tension: 200,
        friction: 7,
      }),
      Animated.spring(curveCenterAnimated, {
        toValue: newCurveCenter,
        useNativeDriver: false,
        tension: 200,
        friction: 7,
      })
    ]).start();
  };

  useEffect(() => {
    const barHeight = 90;
    const maxCurveWidth = 130;
    const curveDepth = 32;

    const radius = maxCurveWidth / 2;
    const initialCurveCenter = (activeIndex * tabWidth) + (tabWidth / 2);

    let curveCenter = initialCurveCenter;

    // Clamp curve center within bounds
    const safeMargin = radius + 10;
    if (curveCenter < safeMargin) curveCenter = safeMargin;
    if (curveCenter > width - safeMargin) curveCenter = width - safeMargin;

    const leftCurveStart = curveCenter - radius;
    const rightCurveEnd = curveCenter + radius;

    const c1 = leftCurveStart + radius * 0.3;
    const c2 = curveCenter - radius * 0.6;
    const c3 = curveCenter + radius * 0.6;
    const c4 = rightCurveEnd - radius * 0.3;

    const initialPath = `
      M0,0
      L${leftCurveStart},0
      C${c1},0 ${c2},${curveDepth} ${curveCenter},${curveDepth}
      C${c3},${curveDepth} ${c4},0 ${rightCurveEnd},0
      L${width},0
      L${width},${barHeight}
      L0,${barHeight}
      Z
    `;

    setCurvePath(initialPath); // Set initial path
    animatedValue.setValue(activeIndex * tabWidth);
    curveCenterAnimated.setValue(initialCurveCenter);

    const listenerId = curveCenterAnimated.addListener(({ value }) => {
      let center = value;

      // Clamp
      if (center < safeMargin) center = safeMargin;
      if (center > width - safeMargin) center = width - safeMargin;

      const left = center - radius;
      const right = center + radius;

      const ctrl1 = left + radius * 0.3;
      const ctrl2 = center - radius * 0.6;
      const ctrl3 = center + radius * 0.6;
      const ctrl4 = right - radius * 0.3;

      const dynamicPath = `
        M0,0
        L${left},0
        C${ctrl1},0 ${ctrl2},${curveDepth} ${center},${curveDepth}
        C${ctrl3},${curveDepth} ${ctrl4},0 ${right},0
        L${width},0
        L${width},${barHeight}
        L0,${barHeight}
        Z
      `;

      if (pathRef.current) {
        pathRef.current.setNativeProps({ d: dynamicPath });
      }
    });

    return () => {
      curveCenterAnimated.removeListener(listenerId);
    };
  }, [tabs.length]);

  const renderTab = (tab, index) => {
    const isActive = activeIndex === index;

    return (
      <AppTouchable
        key={index}
        style={styles.tabItem}
        onPress={() => handleTabPress(index)}
        activeOpacity={0.8}
      >
        <View style={styles.tabContent}>
          <View style={isActive ? styles.activeIconContainer : styles.inactiveIconContainer}>
            <AppImage
              source={tab.icon}
              fallbackSource={tab.icon}
              placeholder={true}
              resizeMode="contain"
              style={{
                width: 45,
                height: 45,
              }}
            />
          </View>
          {tab.label && isActive && (
            <Text style={[
              styles.tabLabel,
              isActive && styles.activeTabLabel
            ]}>
              {tab.label}
            </Text>
          )}
        </View>
      </AppTouchable>
    );
  };


  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {tabs[activeIndex]?.component}
      </View>

      <View style={styles.bottomBar}>
        <Svg width={width} height={70} style={styles.svgContainer}>
          <Path
            ref={pathRef}
            d={curvePath}
            fill={AppColors.primary}
          />
        </Svg>
        <View style={styles.tabBar}>
          {tabs.map((tab, index) => renderTab(tab, index))}
        </View>
      </View>
    </View>
  );
};

export default CustomCurvedBottomBar;
