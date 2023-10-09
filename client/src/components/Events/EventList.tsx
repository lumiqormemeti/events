import { FC, useEffect, useState } from 'react';
import EventCard from './EventCard';
import Navbar from '../Layout/Navbar';
import axios from 'axios';
import moment from 'moment';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Modal from '../Layout/Modal';
interface Event {
  image: string;
  title: string;
  time: string;
  date?: Date;
  _id: string;
  description: string;
}

const EventList: FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [deleteEvent, setDeleteEvent] = useState<Event | null>(null);
  const nav = useNavigate();

  const params = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/events/${params.param ? params.param : ''}`
        );
        setEvents(response.data);
        setDeleteEvent(null);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [params]);

  const onDeleteHandler = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:3001/api/events/delete/${deleteEvent?._id}`
      );
      console.log(response);
      nav('/events');
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

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
              id={data._id}
              setDelete={() => setDeleteEvent(data)}
            />
          ))}
        </div>
      </div>
      {deleteEvent && (
        <Modal
          id={deleteEvent._id}
          title={deleteEvent.title}
          cancelHandler={() => setDeleteEvent(null)}
          deleteHandler={onDeleteHandler}
        />
      )}
    </>
  );
};

export default EventList;
