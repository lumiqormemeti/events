/** @jest-environment jsdom */
import '@testing-library/jest-dom';

import React from 'react';
import { render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/Layout/Navbar';

// Mock useCookies hook to simulate authenticated and non-authenticated states
test('renders Navbar component', () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );
  const eventAppText = screen.getByText('EventApp');
  expect(eventAppText).toBeInTheDocument();
});

test('renders correct links based on authentication', () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );

  // Check for Events link
  const eventsLink = screen.getByText('Events');
  expect(eventsLink).toBeInTheDocument();
  expect(eventsLink).toHaveAttribute('href', '/events');

  // Check for LogIn link when not authenticated
  const logInLinkNotAuthenticated = screen.getByText('LogIn');
  expect(logInLinkNotAuthenticated).toBeInTheDocument();
  expect(logInLinkNotAuthenticated).toHaveAttribute('href', '/');
});
