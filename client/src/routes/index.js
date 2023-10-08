import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/Home/HomePage';
import EventList from '../components/Events/EventList';
import EventForm from '../components/Events/EventForm';
import EventDetails from '../components/Events/EventDetails';
import Login from '../components/Login/index';
export const routes = createBrowserRouter([
  {
    path: '',
    element: <Login />,
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
    path: '/event/:id',
    element: <EventDetails />,
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
