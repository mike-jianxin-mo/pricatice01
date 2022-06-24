import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SimpleForm from './SimpleForm';

test('renders learn react link', () => {
  render(<SimpleForm />);
  const linkElement = screen.getByText(/simple form/i);
  expect(linkElement).toBeInTheDocument();
});

/*
A. how to get an input field in test
  1. The "htmlFor" in label link the input via the id field
  2. input = screen.getByLabelText(/user name/i)

B. the getByRole('input') is not working, it should be getByRole('textbox')
*/
test('input action', () => {
    render(<SimpleForm />)
    const input = screen.getByRole('textbox') // or screen.getByLabelText(/user name/i)
    userEvent.type(input, 'Hello, World!') 
    expect(input).toHaveValue('Hello, World!')
})