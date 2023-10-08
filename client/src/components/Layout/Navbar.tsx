import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white">
          <span className="text-xl font-bold">EventApp</span>
        </div>
        <div className="hidden md:flex flex-grow justify-center">
          <NavLink
            to="/events"
            activeClassName="text-yellow-500"
            className="text-white mr-4"
          >
            Events
          </NavLink>
          <NavLink
            to="/create"
            activeClassName="text-yellow-500"
            className="text-white mr-4"
          >
            Create
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
