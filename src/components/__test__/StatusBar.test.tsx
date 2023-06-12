import { render, screen } from '@testing-library/react-native';
import React from 'react';
import StatusBar from '../StatusBar';

describe('ErrorModal', () => {
  const setupComponent = () => {
    render(<StatusBar backgroundColor="red" />);
  };

  it('should render correctly', () => {
    setupComponent();
    const txtStatusBar = screen.getByTestId('status_bar');
    //txt statusbar background color should be red
    expect(txtStatusBar.props.style[1].backgroundColor).toBe('red');
  });
});
