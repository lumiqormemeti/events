/** @jest-environment jsdom */
import '@testing-library/jest-dom';

import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';

import axios from 'axios';
import { MemoryRouter } from 'react-router-dom';
import EventList from '../components/Events/EventList';

jest.mock('axios');

const mockEvents = [
  {
    _id: '1',
    image: 'event1.jpg',
    title: 'Event 1',
    time: '10:00 AM',
    date: '2023-10-10',
  },
];

describe('EventList Component', () => {
  beforeAll(() => {
    axios.get.mockResolvedValue({ data: mockEvents });
  });

  it('renders EventList component', async () => {
    render(
      <MemoryRouter>
        <EventList />
      </MemoryRouter>
    );

    await waitFor(() => screen.getByText('Event 1'));

    mockEvents.forEach((event) => {
      expect(screen.getByText(event.title)).toBeInTheDocument();
    });
  });
});
