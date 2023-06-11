import { ListItem, SearchBar } from '@components';
import { tw } from '@core';
import { useDataHook } from '@hooks';
import React from 'react';
import { View } from 'react-native';

const HomeScreen = () => {
  const [searchText, setSearchText] = React.useState<string>('');

  const { data: LeaderBoardData } = useDataHook();

  const onSearchName = (text: string) => {
    setSearchText(text);
  };

  return (
    <View style={tw`flex px-4 items-start justify-start`}>
      <SearchBar value={searchText} onChangeText={onSearchName} placeholder="Search username" />
      {LeaderBoardData?.map((item) => {
        return (
          <ListItem
            key={item.uid}
            name={item.name}
            rank={item.stars}
            bananaCount={item.bananas}
            isSearchResult={true}
          />
        );
      })}
    </View>
  );
};

export default HomeScreen;
