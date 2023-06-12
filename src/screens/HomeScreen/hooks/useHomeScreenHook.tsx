import { useStore } from '@core';
import { useState } from 'react';

const useHomeScreenHook = () => {
  const [searchText, setSearchText] = useState<string>('');

  const { error, loading, data: result } = useStore((state) => state);

  const searchByUserName = useStore((state) => state.searchByUserName);

  const closeErrorModal = useStore((state) => state.closeError);

  const onSearchName = (text: string) => {
    setSearchText(text);
  };

  const onSearchUsername = () => {
    searchByUserName(searchText);
  };

  return { error, loading, result, onSearchName, onSearchUsername, searchText, closeErrorModal };
};

export default useHomeScreenHook;
