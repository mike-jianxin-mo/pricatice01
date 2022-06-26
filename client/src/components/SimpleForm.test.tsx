import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
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
      https://testing-library.com/docs/example-input-event/
      1. Query:
         getByRole, getByText
      2. User Action

    React Test - Expect: Jest
      has the expect function list:
      https://jestjs.io/docs/expect
*/
test('the submit form', async () => {
    render(<SimpleForm />)
    const input = screen.getByRole('textbox')
    userEvent.clear(input)
    userEvent.type(input, 'How are you')
    const button = screen.getByRole('button')
    userEvent.click(button)
    const showInputEl = await screen.findByTestId('show')
    console.log(showInputEl.innerHTML)
    expect(showInputEl).toHaveTextContent('Current User Name: How are you')
    /*
    await waitFor(async () => {
        const showInput = await screen.findByTestId('show')
        console.log(showInput.innerHTML)
        expect(showInput).toHaveValue('Current essgsggf User Name: How are you!')
    })
    */

})
/*
 ++++++++++ WAITFOR +++++++++
 This is for something like the service monck function.
 Note the obove function is not working, due to the component doesn't refresh!!
    we need to use the waitFor function
    it is an async function
    
test('the submit form', () => {
    render(<SimpleForm />)
    const input = screen.getByRole('textbox')
    userEvent.type(input, 'How are you')
    const button = screen.getByRole('button')
    userEvent.click(button)
    waitFor(async () => {
        const showInput = screen.getByTestId('show')
        console.log(showInput.innerHTML)
        expect(showInput).toHaveValue('Current essgsggf User Name: How are you!')
    })
})
The above codes are not working!!!!


the empty then() function is for the ESLINT checking...
 */

/*
FIND!!!, 
The normal state change is solved by the find function!!
The find functions are the async function of the get functions.
 */

test('add user with mock server', async () => {
    render(<SimpleForm/>)
    const input = screen.getByRole('textbox') // or screen.getByLabelText(/user name/i)
    userEvent.type(input, 'Hello, World!') 
    expect(input).toHaveValue('Hello, World!')

    const button = screen.getByRole('button')
    userEvent.click(button)

    // the waitFor uses for the mock server
    await waitFor(async () => {
      const result = await screen.findByTestId('added-user');
      // console.log(result)
      expect(result.textContent).toEqual('Hello, World!');
    })

})