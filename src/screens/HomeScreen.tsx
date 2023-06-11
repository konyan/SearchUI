import { ListItem, SearchBar } from '@components';
import { tw } from '@core';
import { useDataHook } from '@hooks';
import React, { useState } from 'react';
import { View } from 'react-native';
import { Data } from 'src/hooks/useDataHook';

const HomeScreen = () => {
  const [searchText, setSearchText] = useState<string>('');

  const { data: LeaderBoardData } = useDataHook();

  const [result, setResult] = useState<Data[]>();

  const onSearchName = (text: string) => {
    setSearchText(text);
  };

  const onSearchUsername = () => {
    console.log('SEARCH USER', searchText);

    // sort by stars and slice to 10

    const top10User = LeaderBoardData.sort((a, b) => {
      return b.bananas - a.bananas;
    }).slice(0, 10);
    setResult(top10User);
  };

  return (
    <View style={tw`flex px-4 items-start justify-start`}>
      <SearchBar
        value={searchText}
        onChangeText={onSearchName}
        placeholder="Search username"
        onSearch={onSearchUsername}
      />
      {result?.map((item, index) => {
        return (
          <ListItem key={item.uid} name={item.name} rank={index + 1} bananaCount={item.bananas} isSearchResult={true} />
        );
      })}
    </View>
  );
};

export default HomeScreen;
