import { SearchIcon } from '@svgIcons';
import { useRef } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { tw } from 'src/core/tw';

interface SearchBarProps {
  placeholder: string;
  value: string;
  onChangeText: (value: string) => void;
  onSearch: () => void;
}

const SearchBar = ({ placeholder, value, onChangeText, onSearch }: SearchBarProps) => {
  const searchInputRef = useRef<TextInput | null>(null);

  return (
    <View
      style={tw`w-full flex-row justify-between items-center mt-2 relative border-black rounded-[10px] border-[1.5px] bg-white`}
    >
      <View style={tw`mx-4`}></View>
      <TextInput
        testID="txt_input"
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
          testID="BUTTON.SEARCH"
          style={tw`items-center justify-center mr-4 rounded-full bg-red-500 w-10 h-10`}
          onPress={onSearch}
        >
          <SearchIcon color="white" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchBar;
