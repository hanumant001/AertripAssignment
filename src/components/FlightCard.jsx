import React from 'react';

const FlightCard = ({ flight }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 transition-transform transform hover:scale-105">
      <h2 className="text-xl font-bold mb-2">{flight.fr} to {flight.to}</h2>
      <p className="text-gray-600">Departure: {flight.dep_date}</p>
      <p className="text-gray-600">Arrival: {flight.arr_date}</p>
      <p className="text-gray-600">Price: ${flight.pr}</p>
    </div>
  );
};

export default FlightCard;
