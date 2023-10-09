/** @jest-environment jsdom */
import '@testing-library/jest-dom';
import Cookies from 'js-cookie';

import React from 'react';
import { render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/Layout/Navbar';

// jest.mock('js-cookie', () => ({ get: () => 'adminAccessToken' }));

describe('Navbar', () => {
  test('renders Navbar component', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const eventAppText = screen.getByText('EventApp');
    expect(eventAppText).toBeInTheDocument();
  });

  test('renders correct links', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const eventsLink = screen.getByText('Events');
    expect(eventsLink).toBeInTheDocument();
    expect(eventsLink).toHaveAttribute('href', '/events');

    const logInLinkNotAuthenticated = screen.getByText('LogIn');
    expect(logInLinkNotAuthenticated).toBeInTheDocument();
    expect(logInLinkNotAuthenticated).toHaveAttribute('href', '/');
  });
});
