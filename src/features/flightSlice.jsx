import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import flightData from './api-data.json';

export const fetchFlights = createAsyncThunk('flights/fetchFlights', async () => {
  console.log("flightData",flightData)

  return flightData.data.flights;
  
});

const initialState = {
  flights: [],
  filteredFlights: [],
  loading: false,
  error: null,
};

const flightSlice = createSlice({
  name: 'flights',
  initialState,
  reducers: {
    searchFlights: (state, action) => {
      const { from, to } = action.payload;
      state.filteredFlights = state.flights.filter(flight =>
        flight.fr.toLowerCase().includes(from.toLowerCase()) &&
        flight.to.toLowerCase().includes(to.toLowerCase())
      );
    },
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFlights.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFlights.fulfilled, (state, action) => {
        state.loading = false;
      
        state.flights = Array.isArray(action.payload) ? action.payload : [];
        state.filteredFlights = state.flights;
        console.log('state.filteredFlights',state.filteredFlights)
      })
      .addCase(fetchFlights.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { searchFlights } = flightSlice.actions;

export default flightSlice.reducer;
