import React, { useEffect, useState,useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFlights, searchFlights } from './features/flightSlice';
import Navbar from './components/Navbar';
import SearchInput from './components/SearchInput';
import FlightCard from './components/FlightCard';
import SortOptions from './components/SortOptions';
import './App.css';
import { debounce } from 'lodash';

function App() {
  const dispatch = useDispatch();
  const { filteredFlights, loading, error } = useSelector((state) => state.flights);
  const [sortedFlights, setSortedFlights] = useState([]);

  useEffect(() => {
    dispatch(fetchFlights());
  }, [dispatch]);

  useEffect(() => {
    setSortedFlights(filteredFlights);
  }, [filteredFlights]);

  const handleSearch = useCallback(debounce((searchParams) => {
    dispatch(searchFlights(searchParams));
  }, 300), []);
  

  const handleSortChange = (sortBy) => {
    let sortedArray = [...filteredFlights];
   
    setSortedFlights(sortedArray);
  };

  if (loading) {
    return <p>Loading...</p>; 
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="App">
      <Navbar />
      <main className="pt-16 p-4">
        <SearchInput onSearch={handleSearch} />
        <SortOptions onSortChange={handleSortChange} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sortedFlights.map((flight) => (
            <FlightCard key={flight.id} flight={flight} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
