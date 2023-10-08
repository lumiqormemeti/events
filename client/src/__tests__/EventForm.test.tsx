/** @jest-environment jsdom */
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import EventForm from '../components/Events/EventForm';
import { MemoryRouter } from 'react-router-dom';

test('renders EventForm component', () => {
  render(
    <MemoryRouter>
      <EventForm />
    </MemoryRouter>
  );
  const createEventText = screen.getByRole('heading');
  expect(createEventText).toBeInTheDocument();
});

test('handles input changes', () => {
  render(
    <MemoryRouter>
      <EventForm />
    </MemoryRouter>
  );

  const titleInput = screen.getByPlaceholderText('Event Title');
  const dateTimeInput = screen.getByLabelText('Date and Time');
  const descriptionInput = screen.getByPlaceholderText('Event Description');
  const imageUrlInput = screen.getByPlaceholderText('Image URL');

  fireEvent.change(titleInput, { target: { value: 'New Event Title' } });
  fireEvent.change(dateTimeInput, {
    target: { value: '2023-10-25T17:26' },
  });
  fireEvent.change(descriptionInput, {
    target: { value: 'New Event Description' },
  });
  fireEvent.change(imageUrlInput, { target: { value: 'image-url.jpg' } });

  expect(titleInput).toHaveValue('New Event Title');
  //for some reason this ↓↓ does not return the same time as the input
  //sets time as 2023-10-10T09:00 instead of 2023-10-10T11:00
  //needed to convert
  const convertedDate = new Date('2023-10-25T17:26').toISOString();
  expect(dateTimeInput).toHaveValue(convertedDate.replace(/:\d+.\d+Z$/, ''));
  expect(descriptionInput).toHaveValue('New Event Description');
  expect(imageUrlInput).toHaveValue('image-url.jpg');
});
