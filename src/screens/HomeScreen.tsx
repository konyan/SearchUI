import { ListItem, SearchBar } from '@components';
import { tw } from '@core';
import { useDataHook } from '@hooks';
import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import { Data } from 'src/hooks/useDataHook';

const HomeScreen = () => {
  const [searchText, setSearchText] = useState<string>('');

  const { data: LeaderBoardData } = useDataHook();

  const [result, setResult] = useState<Data[]>();

  const onSearchName = (text: string) => {
    setSearchText(text);
  };

  const onSearchUsername = () => {
    const sortUser = LeaderBoardData.sort((a, b) => {
      return b.bananas - a.bananas;
    }).map((item, index) => {
      return {
        ...item,
        rank: index + 1,
      };
    });

    const filteredResult = sortUser.filter((item, index) => item.name.toLowerCase().includes(searchText.toLowerCase()));
    if (filteredResult.length > 0) {
      const resultUser = filteredResult[0];
      if (resultUser?.rank <= 10) {
        const updateUser = sortUser.slice(0, 10);
        setResult(updateUser);
      } else {
        const updateUser = sortUser.slice(0, 9).concat(resultUser);
        setResult(updateUser);
      }
    }
  };

  return (
    <View style={tw`flex-1 px-4 items-start justify-start`}>
      <SearchBar
        value={searchText}
        onChangeText={onSearchName}
        placeholder="Search username"
        onSearch={onSearchUsername}
      />
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
