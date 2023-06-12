import { render, screen, waitFor } from '@testing-library/react-native';
import React from 'react';
import { Text } from 'react-native';
import ErrorModal from '../../../components/ErrorModal';
import SearchBar from '../../../components/SearchBar';
import HomeScreen from '../HomeScreen';
import useHomeScreenHook from '../hooks/useHomeScreenHook';

const initValue = {
  searchText: '',
  loading: false,
  onSearchName: jest.fn(),
  onSearchUsername: jest.fn(),
  error: null,
  closeErrorModal: jest.fn(),
  result: [],
};

jest.mock('../../../components/SearchBar');
jest.mock('../../../components/ErrorModal');
jest.mock('../../../core/zustandStore');
jest.mock('../hooks/useHomeScreenHook', () => {
  return jest.fn(() => {
    return {
      searchText: '',
      loading: false,
      onSearchName: jest.fn(),
      onSearchUsername: jest.fn(),
      error: null,
      closeErrorModal: jest.fn(),
      result: [],
    };
  });
});

const mockSearchComponent = SearchBar as jest.MockedFunction<typeof SearchBar>;
const mockErrorModal = ErrorModal as jest.MockedFunction<typeof ErrorModal>;
const mockHomScreenHook = useHomeScreenHook as jest.MockedFunction<typeof useHomeScreenHook>;

describe('HomeScreen testing', () => {
  it('search bar show render correctly', () => {
    mockSearchComponent.mockReturnValue(<Text>Search Bar</Text>);
    render(<HomeScreen />);
    expect(screen.getByText('Search Bar')).toBeTruthy();
  });

  it('error modal show render correctly', () => {
    mockHomScreenHook.mockReturnValue({
      ...initValue,
      error: true,
    });
    mockErrorModal.mockReturnValue(<Text>Error Modal</Text>);
    render(<HomeScreen />);
    expect(screen.getByText('Error Modal')).toBeTruthy();
  });

  it('loading ui show render correctly', () => {
    mockHomScreenHook.mockReturnValue({
      ...initValue,
      loading: true,
    });
    render(<HomeScreen />);
    expect(screen.getByTestId('loading_ui')).toBeTruthy();
  });

  it('should render FlatList correctly when result has data', async () => {
    const mockResult = [
      {
        uid: '1',
        name: 'John',
        rank: '1',
        bananas: 10,
      },
      {
        uid: '2',
        name: 'Jane',
        rank: '2',
        bananas: 5,
      },
    ];
    mockHomScreenHook.mockReturnValue({
      ...initValue,
      result: mockResult,
    });

    render(<HomeScreen />);

    await waitFor(() => {
      const flatList = screen.getByTestId('flat_list');
      expect(flatList).toBeDefined();
      expect(flatList.props.data).toEqual(mockResult);
      expect(flatList.props.renderItem).toBeDefined();
      expect(flatList.props.keyExtractor).toBeDefined();
    });
  });
});
