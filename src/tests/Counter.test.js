// import necessary react testing library helpers here
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
// import the Counter component here
import Counter from '../components/Counter';  

beforeEach(() => {
  // Render the Counter component here
  render(<Counter/>);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
    const counterMsg = screen.getByText(/Counter/);
    expect(counterMsg).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const initCount = screen.getByTestId('count');
  expect(initCount).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const incBut = screen.getByText('+');
  fireEvent.click(incBut);
  expect(screen.getByTestId('count')).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const decBut = screen.getByText('-');
  fireEvent.click(decBut);
  expect(screen.getByTestId('count')).toHaveTextContent('-1');
});
