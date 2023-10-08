import { FC, useEffect, useState } from 'react';
import EventCard from './EventCard';
import Navbar from '../Layout/Navbar';
import axios from 'axios';

interface Event {
  image: string;
  title: string;
  time: string;
  date?: Date;
  _id: string;
}

const EventList: FC = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/events');
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  console.log(events);

  return (
    <>
      <Navbar />

      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-24">
          {events.map((data: Event) => (
            <EventCard
              key={data._id}
              imageUrl={data.image}
              title={data.title}
              time={data.time}
              date={data.date}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default EventList;
