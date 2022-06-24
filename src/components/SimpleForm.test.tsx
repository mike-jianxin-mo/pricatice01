import React from 'react';
import { render, screen } from '@testing-library/react';
import SimpleForm from './SimpleForm';

test('renders learn react link', () => {
  render(<SimpleForm />);
  const linkElement = screen.getByText(/simple form/i);
  expect(linkElement).toBeInTheDocument();
});
