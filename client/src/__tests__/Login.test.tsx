/** @jest-environment jsdom */
import '@testing-library/jest-dom';

import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import Login from '../components/Login';
import axios from 'axios';
// At the same scope with `require`
jest.mock('axios');

test('renders Login component', () => {
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );

  const loginText = screen.getByRole('heading');
  expect(loginText).toBeInTheDocument();
});

test('submits login form with valid data', async () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;
  mockedAxios.post.mockResolvedValueOnce({ data: {} });

  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );

  const emailInput = screen.getByLabelText('Email') as HTMLInputElement;
  const passwordInput = screen.getByLabelText('Password') as HTMLInputElement;
  const submitButton = screen.getByRole('button');

  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password123' } });

  fireEvent.click(submitButton);

  await waitFor(() => {
    expect(mockedAxios.post).toHaveBeenCalledWith(
      'http://localhost:3001/api/users/login',
      {
        email: 'test@example.com',
        password: 'password123',
      },
      {
        withCredentials: true,
      }
    );
  });
});
