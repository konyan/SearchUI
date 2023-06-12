import { render, screen } from '@testing-library/react-native';
import React from 'react';
import ListItem from '../ListItem';

describe('ErrorModal', () => {
  const dataProps = {
    name: 'NYAN LIN TUN',
    rank: 1,
    bananaCount: 100,
    isSearchResult: true,
  };

  const setupComponent = () => {
    render(<ListItem {...dataProps} />);
  };

  it.each`
    title           | description
    ${'txt_name'}   | ${dataProps.name}
    ${'txt_rank'}   | ${dataProps.rank}
    ${'txt_banana'} | ${dataProps.bananaCount}
  `('should render $name correctly', ({ title }) => {
    setupComponent();
    expect(screen.getByTestId(title)).toBeTruthy();
  });
});
