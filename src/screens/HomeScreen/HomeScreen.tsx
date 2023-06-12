import { ErrorModal, ListItem, SearchBar } from '@components';
import { tw } from '@core';
import React from 'react';
import { FlatList, View } from 'react-native';
import { PacmanIndicator } from 'react-native-indicators';
import useHomeScreenHook from './hooks/useHomeScreenHook';
const HomeScreen = () => {
  const { searchText, loading, onSearchName, onSearchUsername, error, closeErrorModal, result } = useHomeScreenHook();

  return (
    <View style={tw`flex-1 px-4 items-start justify-start`}>
      <SearchBar
        value={searchText}
        onChangeText={onSearchName}
        placeholder="Search username"
        onSearch={onSearchUsername}
      />

      {loading && (
        <View testID="loading_ui" style={tw`flex-1 w-full z-10 justify-center items-center absolute top-40`}>
          <PacmanIndicator color="red" />
        </View>
      )}
      {error && <ErrorModal error={error} setModalVisible={closeErrorModal} />}
      <FlatList
        testID="flat_list"
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
        keyExtractor={(item) => item.uid}
      />
    </View>
  );
};

export default HomeScreen;
