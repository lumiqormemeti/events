import React from 'react';

interface EventCardProps {
  imageUrl: string;
  title: string;
  time: string;
  date: string;
}

const EventCard: React.FC<EventCardProps> = ({
  imageUrl,
  title,
  time,
  date,
}) => {
  return (
    <div className="bg-white rounded-lg shadow p-2 md:p-5 w-2/3">
      <img
        src={imageUrl}
        alt="Event"
        className="h-32 object-cover rounded mb-2"
      />
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-2">{time}</p>
      <p className="text-gray-700">{date}</p>
    </div>
  );
};

export default EventCard;
