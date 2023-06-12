import { ErrorModal, ListItem, SearchBar } from '@components';
import { tw, useStore } from '@core';
import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { PacmanIndicator } from 'react-native-indicators';
import { Data } from 'src/hooks/useDataHook';
const HomeScreen = () => {
  const [searchText, setSearchText] = useState<string>('');

  const { error, loading, data: result } = useStore((state) => state);

  const searchByUserName = useStore((state) => state.searchByUserName);

  const closeErrorModal = useStore((state) => state.closeError);

  useEffect(() => {
    if (error) {
    }
  }, [error]);

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
        <View style={tw`flex-1 w-full justify-center items-center`}>
          <PacmanIndicator color="red" />
        </View>
      )}
      {error && <ErrorModal error={error} setModalVisible={closeErrorModal} />}
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
