import React from 'react';

interface EventCardProps {
  imageUrl: string;
  title: string;
  time: string;
  date: string;
  description: string;
}

const EventCard: React.FC<EventCardProps> = ({
  imageUrl,
  title,
  date,
  description,
}) => {
  return (
    <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
      {imageUrl && (
        <a href="#">
          <img className="rounded-t-lg" src={imageUrl} alt={title} />
        </a>
      )}
      <div className="p-5">
        <a href="#">
          <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">
          {description}
        </p>
        <div className="flex justify-between mb-3">
          <span className="text-sm text-gray-500 dark:text-gray-300">
            Date: {date}
          </span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
