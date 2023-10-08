import { FC, useEffect, useState } from 'react';
import EventCard from './EventCard';
import Navbar from '../Layout/Navbar';
import axios from 'axios';
import moment from 'moment';
import { Link, useParams } from 'react-router-dom';
interface Event {
  image: string;
  title: string;
  time: string;
  date?: Date;
  _id: string;
}

const EventList: FC = () => {
  const [events, setEvents] = useState<Event[]>([]);

  const params = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/events/${params.param ? params.param : ''}`
        );
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [params]);

  return (
    <>
      <Navbar />

      <div className="bg-white flex justify-center">
        <nav className="flex flex-col sm:flex-row">
          <Link
            to=""
            className="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none"
          >
            All
          </Link>
          <Link
            to="upcoming"
            className="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none"
          >
            Upcoming
          </Link>
          <Link
            to="past"
            className="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none"
          >
            Past
          </Link>
        </nav>
      </div>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-24">
          {events.map((data: Event) => (
            <EventCard
              key={data._id}
              imageUrl={data.image ? data.image : ''}
              title={data.title}
              date={data.date ? moment(data.date).format('MM/DD/YYYY') : ''}
              description={data.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default EventList;
