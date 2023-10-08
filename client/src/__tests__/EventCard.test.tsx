/** @jest-environment jsdom */
import '@testing-library/jest-dom';

import React from 'react';
import { render, screen } from '@testing-library/react';
import EventCard from '../components/Events/EventCard';

import { MemoryRouter } from 'react-router-dom';

const mockProps = {
  imageUrl: 'image-url',
  title: 'Event Title',
  date: '2023-10-10',
  description: 'Event Description',
  id: 'event-id',
};

test('renders EventCard component with provided props', () => {
  render(
    <MemoryRouter>
      <EventCard {...mockProps} />
    </MemoryRouter>
  );

  const titleElement = screen.getByText(/Event Title/i);
  const descriptionElement = screen.getByText(/Event Description/i);
  const imageElement = screen.getByAltText(/Event Title/i);
  const dateElement = screen.getByText(/Date: 2023-10-10/i);

  expect(titleElement).toBeInTheDocument();
  expect(dateElement).toBeInTheDocument();
  expect(descriptionElement).toBeInTheDocument();
  expect(imageElement).toBeInTheDocument();
});

test('renders EventCard component without image', () => {
  const propsWithoutImage = { ...mockProps, imageUrl: '' };
  render(
    <MemoryRouter>
      <EventCard {...propsWithoutImage} />
    </MemoryRouter>
  );

  const imageElement = screen.queryByAltText(/Event Title/i);
  expect(imageElement).toBeNull();
});
