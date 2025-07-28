import React, { useState, useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import { Menu } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AppTouchable from '../../../components/AppTouchable';
import AppText from '../../../components/AppText';
import { AppColors } from '../../../constants/colors';

const DropdownMenuPaper = ({ value, onChange, options, onSubmit }) => {
  const [visible, setVisible] = useState(false);
  const lastClickTime = useRef(0);
  const debounceDelay = 200; // Reduced debounce for more responsive interaction

  const toggleMenu = () => {
    const now = Date.now();
    
    // Debounce rapid clicks but allow normal toggling
    if (now - lastClickTime.current < debounceDelay) {
      return;
    }
    
    lastClickTime.current = now;
    setVisible(!visible);
  };

  const closeMenu = () => {
    setVisible(false);
  };

  const handleSelect = (option) => {
    onChange(option);
    closeMenu();
    // Call onSubmit after menu closes to avoid interference
    setTimeout(() => {
      onSubmit?.();
    }, 100);
  };

  return (
    <View style={styles.dropdownWrapper}>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <AppTouchable 
            style={styles.dropdownTouchable} 
            onPress={toggleMenu}
            activeOpacity={0.7}
          >
            <View style={styles.dropdownContent}>
              <AppText style={styles.dropdownText}>
                {value || 'Select an option...'}
              </AppText>
              <Icon 
                name={visible ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} 
                size={20} 
                color={AppColors.textPrimary}
                style={styles.arrowIcon}
              />
            </View>
          </AppTouchable>
        }
        contentStyle={styles.menuContent}
      >
        {options.map((option) => (
          <Menu.Item
            key={option}
            title={option}
            onPress={() => handleSelect(option)}
            titleStyle={styles.menuItemTitle}
          />
        ))}
      </Menu>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownWrapper: {
    borderRadius: 10,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  dropdownTouchable: {
    height: 50,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  dropdownContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dropdownText: {
    color: AppColors.textPrimary,
    flex: 1,
  },
  arrowIcon: {
    marginLeft: 8,
  },
  menuContent: {
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  menuItemTitle: {
    color: AppColors.textPrimary,
  },
});

export default DropdownMenuPaper;