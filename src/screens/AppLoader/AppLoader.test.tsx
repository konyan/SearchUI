import { render, waitFor } from '@testing-library/react-native';
import React from 'react';
import { Text } from 'react-native';
import AppLoader from './AppLoader';

describe('AppLoader', () => {
  const setup = () => {
    return render(
      <AppLoader>
        <Text>test text</Text>
      </AppLoader>,
    );
  };

  it('renders correctly with props', async () => {
    const setStateMock = jest.fn();
    jest.spyOn(React, 'useEffect').mockImplementation((f) => f());
    jest.spyOn(React, 'useState').mockImplementation((init: boolean) => {
      return [init, setStateMock];
    });

    setup();
    await waitFor(() => {
      expect(setStateMock).lastCalledWith(true);
    });
  });
});
