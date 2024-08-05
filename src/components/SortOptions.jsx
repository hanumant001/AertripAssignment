import React from 'react';

const SortOptions = ({ onSortChange }) => {
  const handleSortChange = (e) => {
    onSortChange(e.target.value);
  };

  return (
    <div className="mb-4">
      <label className="mr-2">Sort by:</label>
      <select onChange={handleSortChange} className="border rounded-md p-2">
        <option value="">Select</option>
        <option value="price_asc">Price: Low to High</option>
        <option value="price_desc">Price: High to Low</option>
        <option value="departure_asc">Departure: Earliest</option>
        <option value="departure_desc">Departure: Latest</option>
      </select>
    </div>
  );
};

export default SortOptions;
