import { act, renderHook } from '@testing-library/react-native';
import { useStore } from '../../../../core/zustandStore';
import useHomeScreenHook from '../useHomeScreenHook';

jest.mock('../../../../core/zustandStore', () => {
  return {
    useStore: jest.fn(),
  };
});

describe('useHomeScreenHook', () => {
  const mockUseStore = useStore as jest.MockedFunction<typeof useStore>;

  beforeEach(() => {
    mockUseStore.mockClear();
    mockUseStore.mockReturnValue({
      error: false,
      loading: false,
      data: [],
      searchByUserName: (text: string) => jest.fn(),
      closeError: jest.fn(),
    });
  });

  it('should return correct data and default value', () => {
    const { result } = renderHook(() => useHomeScreenHook());

    expect(result.current.error).toBe(false);
    expect(result.current.loading).toBe(false);
    expect(result.current.result).toEqual([]);
    expect(result.current.searchText).toBe('');
  });

  it('should call onSearchName, after that searchText will change', () => {
    const { result } = renderHook(() => useHomeScreenHook());
    result.current.onSearchName('hello');

    act(() => {
      result.current.searchText = 'hello';
    });
    expect(result.current.searchText).toBe('hello');
  });
});
