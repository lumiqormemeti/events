import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Layout/Navbar';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const EventForm: React.FC = () => {
  const [title, setTitle] = useState('My Event');
  const [dateTime, setDateTime] = useState(new Date());
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [cookies] = useCookies();
  const nav = useNavigate();
  useEffect(() => {
    if (!cookies?.adminAccessToken) nav('/');
  }, []);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDateTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDateTime = new Date(e.target.value);
    setDateTime(newDateTime);
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(e.target.value);
  };

  const handleImageUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageUrl(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const eventData = {
      title,
      date: dateTime,
      description,
      image: imageUrl,
    };

    // axios
    //   .post('http://localhost:3001/api/events/create', eventData)
    //   .then((response) => {
    //     console.log('Event created successfully:', response.data);
    //   })
    //   .catch((error) => {
    //     console.error('Error creating event:', error);
    //   });
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden">
          <div className="py-4 px-6">
            <h2 className="text-2xl font-bold mb-4">Create Event</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  className="w-full p-2 border rounded"
                  placeholder="Event Title"
                  value={title}
                  onChange={handleTitleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="dateTime"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Date and Time
                </label>
                <input
                  type="datetime-local"
                  id="dateTime"
                  className="w-full p-2 border rounded"
                  value={dateTime.toISOString().slice(0, 16)}
                  onChange={handleDateTimeChange}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  className="w-full p-2 border rounded"
                  placeholder="Event Description"
                  value={description}
                  onChange={handleDescriptionChange}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="imageUrl"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Image URL
                </label>
                <input
                  type="text"
                  id="imageUrl"
                  className="w-full p-2 border rounded"
                  placeholder="Image URL"
                  value={imageUrl}
                  onChange={handleImageUrlChange}
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Create Event
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventForm;
