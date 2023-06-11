import { CloseIcon, SearchIcon } from '@svgIcons';
import { useRef } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { tw } from 'src/core/tw';

interface SearchBarProps {
  placeholder: string;
  value: string;
  onChangeText: (value: string) => void;
}

const SearchBar = ({ placeholder, value, onChangeText }: SearchBarProps) => {
  const searchInputRef = useRef<TextInput | null>(null);

  return (
    <View
      style={tw`w-full flex-row justify-between items-center mt-2 relative border-black rounded-[10px] border-[1.5px] bg-white`}
    >
      <View style={tw`mx-4`}>
        <SearchIcon color="black" />
      </View>
      <TextInput
        testID="SEARCH.INPUT"
        style={[
          tw`flex-auto text-black w-auto text-base py-4 text-left items-start justify-start font-normal pr-12 w-full`,
          { fontFamily: 'FiraMono-Regular' },
        ]}
        onChangeText={onChangeText}
        value={value}
        numberOfLines={1}
        placeholder={placeholder}
        ref={searchInputRef}
      />
      {value.length > 0 && (
        <TouchableOpacity
          testID="BUTTON.CLEAR"
          style={tw`flex-1 items-end justify-end mr-4`}
          onPress={() => {
            onChangeText('');
          }}
        >
          <CloseIcon />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchBar;
