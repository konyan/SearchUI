import { ListItem, SearchBar } from '@components';
import { tw, useStore } from '@core';
import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { Data } from 'src/hooks/useDataHook';

const HomeScreen = () => {
  const [searchText, setSearchText] = useState<string>('');

  const result = useStore((state) => state.data);

  const loading = useStore((state) => state.loading);

  const searchByUserName = useStore((state) => state.searchByUserName);

  const onSearchName = (text: string) => {
    setSearchText(text);
  };

  const onSearchUsername = () => {
    searchByUserName(searchText);
  };

  return (
    <View style={tw`flex-1 px-4 items-start justify-start`}>
      <SearchBar
        value={searchText}
        onChangeText={onSearchName}
        placeholder="Search username"
        onSearch={onSearchUsername}
      />

      {loading && (
        <View>
          <Text>loading..</Text>
        </View>
      )}
      <FlatList
        style={tw`w-full mb-8`}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        data={result}
        renderItem={({ item }) => (
          <ListItem
            key={item.uid}
            name={item.name}
            rank={item.rank}
            bananaCount={item.bananas}
            isSearchResult={item.name.toLowerCase().includes(searchText.toLowerCase())}
          />
        )}
        keyExtractor={(item: Data) => item.uid}
      />
    </View>
  );
};

export default HomeScreen;
