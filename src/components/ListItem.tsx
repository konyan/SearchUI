import { tw } from '@core';
import React from 'react';
import { Image, Text, View } from 'react-native';

interface ListItemProps {
  name: string;
  rank?: number;
  bananaCount: number;
  isSearchResult?: boolean;
}

const ListItem = ({ name, rank, bananaCount, isSearchResult }: ListItemProps) => {
  return (
    <View
      style={[
        tw`flex-row mt-2 border-2 px-2 rounded-2 bg-gray-100 py-2 w-full border-gray-200 items-center shadow-sm`,
        isSearchResult && tw`shadow-lg bg-white`,
      ]}
    >
      <View style={tw`flex w-1/4 rounded-full bg-red-500 w-8 h-8 justify-center items-center mx-2`}>
        <Text style={tw`font-FiraMono-Medium text-base`}>{rank && rank}</Text>
      </View>
      <View style={tw`flex w-3/4 p-2`}>
        <Text style={tw`text-xl font-FiraMono-Bold`}>{name}</Text>
        <View style={tw`flex-row justify-start items-center`}>
          <Image source={require('../../assets/images/banana.png')} style={tw`w-4 h-4`} />
          <Text style={tw`mt-1 ml-2 text-base font-FiraMono-Medium`}>{bananaCount}</Text>
        </View>
      </View>
    </View>
  );
};

export default ListItem;
