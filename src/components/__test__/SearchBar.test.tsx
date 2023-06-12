import { render, screen } from '@testing-library/react-native';
import React from 'react';
import SearchBar from '../SearchBar';

describe('ErrorModal', () => {
  const placeholder = 'placeholder';
  const value = 'value';
  const onChangeText = jest.fn();
  const onSearch = jest.fn();

  const setupComponent = () => {
    render(<SearchBar placeholder={placeholder} value={value} onChangeText={onChangeText} onSearch={onSearch} />);
  };

  it('should render correctly', () => {
    setupComponent();

    const txtInput = screen.getByTestId('txt_input');
    expect(txtInput.props.placeholder).toBe(placeholder);
    expect(txtInput.props.value).toBe(value);
  });
});
