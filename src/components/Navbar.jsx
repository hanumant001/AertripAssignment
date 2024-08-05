import React from 'react';
const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white fixed w-full top-0 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src='../../public/plainImg.jpg' alt="Logo" className="h-8 w-8 mr-2" />
          <h1 className="text-2xl font-bold">Flight Booking App</h1>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
