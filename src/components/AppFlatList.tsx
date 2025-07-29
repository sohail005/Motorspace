// src/components/AppFlatList.tsx
import React from 'react';
import { FlatList, View, Text, StyleSheet, FlatListProps } from 'react-native';
import { AppColors } from '../constants/colors';

interface AppFlatListProps<ItemT> extends FlatListProps<ItemT> {
  emptyText?: string;
}

const AppFlatList = <ItemT,>({
  data,
  renderItem,
  keyExtractor,
  ListHeaderComponent,
  ListFooterComponent,
  contentContainerStyle,
  emptyText = 'No items found',
  ...rest
}: AppFlatListProps<ItemT>) => {
  return (
    <FlatList
      data={data}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      ListHeaderComponent={ListHeaderComponent}
      ListFooterComponent={ListFooterComponent}
      contentContainerStyle={[
        styles.container,
        contentContainerStyle,
        data?.length === 0 && styles.centeredContent,
      ]}
      ListEmptyComponent={
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>{emptyText}</Text>
        </View>
      }
      {...rest}
    />
  );
};

export default AppFlatList;

const styles = StyleSheet.create({
  container: {
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  emptyText: {
    color: AppColors.buttonGray,
    fontSize: 16,
  },
  centeredContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});
