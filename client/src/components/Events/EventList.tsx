import { FC } from 'react';
import EventCard from './EventCard';
import Navbar from '../Layout/Navbar';

const eventDataList = [
  {
    imageUrl: 'https://via.placeholder.com/300',
    title: 'Awesome Event',
    time: '2:00 PM - 5:00 PM',
    date: 'October 15, 2023',
  },
  {
    imageUrl: 'https://via.placeholder.com/300',
    title: 'Awesome Event',
    time: '2:00 PM - 5:00 PM',
    date: 'October 15, 2023',
  },
  {
    imageUrl: 'https://via.placeholder.com/300',
    title: 'Awesome Event',
    time: '2:00 PM - 5:00 PM',
    date: 'October 15, 2023',
  },
  {
    imageUrl: 'https://via.placeholder.com/300',
    title: 'Awesome Event',
    time: '2:00 PM - 5:00 PM',
    date: 'October 15, 2023',
  },
];

const EventList: FC = () => {
  return (
    <>
      <Navbar />

      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-24">
          {eventDataList.map((eventData, index) => (
            <EventCard
              key={index}
              imageUrl={eventData.imageUrl}
              title={eventData.title}
              time={eventData.time}
              date={eventData.date}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default EventList;
