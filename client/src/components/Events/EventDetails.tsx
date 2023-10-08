import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

interface Event {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  date: string;
  time: string;
}

const EventDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get<Event>(
          `http://localhost:3001/api/events/${id}`
        );
        setEvent(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching event');
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-4">{event?.title}</h1>
      {event.image && (
        <img
          src={event?.image}
          alt={event?.title}
          className="w-full h-48 object-cover mb-4"
        />
      )}
      <p className="text-gray-700 mb-4">{event?.description}</p>
      <p className="text-gray-700 mb-4">Date: {event?.date}</p>
      <p className="text-gray-700 mb-4">Time: {event?.time}</p>
      <Link to="/events" className="text-blue-500 hover:underline">
        Back to Events
      </Link>
    </div>
  );
};

export default EventDetail;
