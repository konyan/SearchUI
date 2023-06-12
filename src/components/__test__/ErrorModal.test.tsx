import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import ErrorModal from '../ErrorModal';

describe('ErrorModal', () => {
  const error = true;
  const closeErrorModal = jest.fn();

  const setupComponent = () => {
    render(<ErrorModal error={error} setModalVisible={closeErrorModal} />);
  };

  it('should render correctly', () => {
    setupComponent();
    const txtTitle = screen.getByTestId('txt_title');
    expect(txtTitle).toBeTruthy();
  });

  it('should render close button correctly', () => {
    setupComponent();
    const btnClose = screen.getByTestId('btn_close');
    expect(btnClose).toBeTruthy();
  });

  it('should call closeErrorModal function', () => {
    setupComponent();
    const btnClose = screen.getByTestId('btn_close');
    fireEvent(btnClose, 'onPress');
    expect(closeErrorModal).toHaveBeenCalled();
  });
});
