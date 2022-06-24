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

c. the type function of the userEvent, it can type in the enter key, etc
   https://testing-library.com/docs/ecosystem-user-event/
*/
test('input action', () => {
    render(<SimpleForm />)
    const input = screen.getByRole('textbox') // or screen.getByLabelText(/user name/i)
    userEvent.type(input, 'Hello, World!') 
    expect(input).toHaveValue('Hello, World!')
})

/*
    React Test - Test library:
      1. Query:
         getByRole, getByText
      2. User Action

    React Test - Expect: Jest
      
*/
test('the submit form', () => {
    render(<SimpleForm />)
    const input = screen.getByRole('textbox')
    userEvent.type(input, 'How are you')
    const button = screen.getByRole('button')
    userEvent.click(button)
    const showInput = screen.getByRole('show')
    expect(showInput).toHaveValue('How are you')
})