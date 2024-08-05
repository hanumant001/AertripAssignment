import React, { useState } from 'react';

const SearchInput = ({ onSearch }) => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ from, to });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-center items-center mt-4 space-y-4 md:space-y-0 md:space-x-4">
      <input
        type="text"
        placeholder="From"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
        className="border border-gray-300 rounded-md p-2 w-full md:w-auto"
      />
      <input
        type="text"
        placeholder="To"
        value={to}
        onChange={(e) => setTo(e.target.value)}
        className="border border-gray-300 rounded-md p-2 w-full md:w-auto"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-md w-full md:w-auto">
        Search
      </button>
    </form>
  );
};

export default SearchInput;
