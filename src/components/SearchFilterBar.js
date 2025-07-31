import React, { memo } from 'react';
import { View, TextInput } from 'react-native';
import SearchIcon from 'react-native-vector-icons/Feather';
import FillterIcon from 'react-native-vector-icons/Octicons';
import { styles } from '../Screens/Buycars/BuyCarsList/BuyCarsListStyles';
import AppTouchable from './AppTouchable';
import { AppColors } from '../constants/colors';

const SearchFilterBar = ({ onFilterPress }) => (
  <View style={styles.searchbardContainer}>
    <View style={styles.inputConatainer}>
      <View style={styles.iconConatiner}>
        <SearchIcon name="search" size={26} color={AppColors.primary} />
      </View>
      <TextInput
        style={styles.searchInput}
        allowFontScaling={false}
        placeholder="Search"
        placeholderTextColor={AppColors.grayOverlay}
        cursorColor={AppColors.primary}
      />
    </View>
    <AppTouchable onPress={onFilterPress} style={styles.fillterButton}>
      <FillterIcon name="filter" size={26} color={AppColors.primary} />
    </AppTouchable>
  </View>
);

export default memo(SearchFilterBar);
