import React from "react"

import { FlatList, FlatListProps, ViewStyle } from "react-native"

interface ListProps {
  data: []
  renderItem: ({ item }: { item: any }) => React.JSX.Element
  ItemSeparatorComponent?: () => React.JSX.Element
  loading?: boolean
  onRefresh?: Function
  contentContainerStyle?: ViewStyle
  keyExtractor?: Function
  ListEmptyComponent?: Function
  props?: FlatListProps<any>
}

const List = ({
  data,
  renderItem,
  ItemSeparatorComponent,
  loading,
  onRefresh,
  contentContainerStyle,
  keyExtractor,
  ListEmptyComponent,
  props,
}: ListProps) => {
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ListEmptyComponent={ListEmptyComponent}
      ItemSeparatorComponent={ItemSeparatorComponent}
      refreshing={loading}
      onRefresh={onRefresh}
      initialNumToRender={10}
      maxToRenderPerBatch={10}
      updateCellsBatchingPeriod={50}
      windowSize={21}
      onEndReachedThreshold={0.5}
      onEndReached={() => console.log("End reached")}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      {...props}
    />
  )
}

export default List
