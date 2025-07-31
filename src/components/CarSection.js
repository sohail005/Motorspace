import React, { memo } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CarListItem from './CarListItem';
import { styles } from '../Screens/Buycars/BuyCarsList/BuyCarsListStyles';
import AppTouchable from './AppTouchable';
import AppText from './AppText';
import AppFlatList from './AppFlatList';
import { AppColors } from '../constants/colors';

const CarSection = ({
  title,
  data,
  onItemPress,
  onQuickBuyPress,
  onViewMore,
  isLocation = false,
  locationLabel,
  onLocationPress
}) => {
  const renderCarItem = ({ item }) => (
    <CarListItem
      title={item.title}
      subtitle={item.variant}
      badge={item.numberPlate}
      price={item.price}
      seller={item.dealer}
      time={item.timeListed}
      location={item.location}
      showLocation={item.showLocation}
      onPress={() => onItemPress(item)}
      onQuickBuyPress={() => onQuickBuyPress(item)}
    />
  );

  return (
    <View style={isLocation ? styles.bottomListConatiner : styles.topListConatiner}>
      <AppText style={styles.sectionTitle}>{title}</AppText>
      {isLocation && (
        <AppTouchable onPress={onLocationPress} style={styles.locationContiner}>
          <Icon name="location-arrow" size={14} color={AppColors.link} />
          <AppText style={styles.locationText}>{locationLabel}</AppText>
        </AppTouchable>
      )}
      <AppFlatList
        data={data}
        renderItem={renderCarItem}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        emptyText={`No ${title.toLowerCase()} found`}
      />
      <AppTouchable style={styles.viewmoreButton} onPress={onViewMore}>
        <AppText style={styles.viewmore}>View More</AppText>
      </AppTouchable>
    </View>
  );
};

export default memo(CarSection);
