import React from 'react';

interface EventCardProps {
  imageUrl: string;
  title: string;
  date: string;
  description: string;
  id: string;
}

const EventCard: React.FC<EventCardProps> = ({
  imageUrl,
  title,
  date,
  description,
  id,
}) => {
  return (
    <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
      {imageUrl && (
        <img className="rounded-t-lg h-56 " src={imageUrl} alt={title} />
      )}
      <div className="p-5">
        <a href={'/event/' + id}>
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
