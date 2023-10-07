import { FC } from 'react';
import Navbar from '../Layout/Navbar';

const HomePage: FC = () => {
  return (
    <div className="text-center">
      <Navbar />
      <h1 className="text-4xl font-bold my-2">HOME</h1>
    </div>
  );
};

export default HomePage;
