import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/Home/HomePage';
import EventList from '../components/Events/EventList';

export const routes = createBrowserRouter([
  {
    path: '',
    element: <Home />,
  },
  {
    path: '/events',
    element: <EventList />,
  },
  {
    path: '/*',
    element: <h1>Page Not Found</h1>,
  },
]);
