import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/Home/HomePage';
import EventList from '../components/Events/EventList';
import EventForm from '../components/Events/EventForm';

export const routes = createBrowserRouter([
  {
    path: '',
    element: <Home />,
  },
  {
    path: '/events',
    element: <EventList />,
    children: [
      {
        path: '/events/:param',
        element: <EventList />,
      },
    ],
  },
  {
    path: '/create',
    element: <EventForm />,
  },
  {
    path: '/*',
    element: <h1>Page Not Found</h1>,
  },
]);
