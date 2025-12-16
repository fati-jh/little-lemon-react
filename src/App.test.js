import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';
import { initializeTimes, updateTimes } from "./components/Main";
import App from './App';
import { Form } from 'react-router-dom';
import { fetchAPI } from './components/bookingAPI';

global.fetchAPI = jest.fn();
test("initializeTimes returns the available times from fetchAPI", () => {
  const mockTimes = ["17:00","18:00","19:00"];
  fetchAPI.mockReturnValue(mockTimes);

  const result = initializeTimes();

  expect(fetchAPI).toHaveBeenCalledTimes(1);
  expect(result).toEqual(mockTimes);
  expect(Array.isArray(result)).toBe(true);
  expect(result.length).toBeGreaterThan(0);
});

test("updateTimes calls fetchAPI with the selected date and returns its result", () => {
  const initialState = [];
  const selectedDate = new Date("2025-12-16");
  const mockTimes = ["20:00","21:00"];
  fetchAPI.mockReturnValue(mockTimes);
 
  const newState = updateTimes(initialState,{
    type: "dateChnaged",
    date: selectedDate,
  });
  expect(fetchAPI).toHaveBeenCalledTimes(1);
  expect(fetchAPI).toHaveBEenCalledWith(selectedDate);
  expect(newState).toEqual(mockTimes);
});

test("updateTimes returns same state for unknown action type", () => {
  const initialState = ["17:00"];
  const newState = updateTimes(initialState, { type: "UNKNOWN" });

  expect(newState).toEqual(initialState);
});

fireEvent.change(screen.getAllByLabelText(/choose time/i),{
  target:{value:"19:00"},
})

test("render the Reserve a Table heading", () => {
  const availableTimes = ["17:00", "18:00"];
  const dispatch = jest.fn()
  // render the BookingForm component
  render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} />); 
  
  // save the heading in a variable
  const buttonElement = screen.getByRole( 'button', {name: /make your reservation/i}); 
  expect(buttonElement).toBeInTheDocument();
});
/*
test("initializeTimes returns the correct initial times", () => {
  const result = initializeTimes();
  expect(result).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
});
test("updateTimes returns the same state for unknown action type", () => {
  const initialState = initializeTimes();
  const action = { type: "DateChanged" };
  const newState = updateTimes(initialState, action);
  // Should return original state when action type is not handled  type: "UNKNOWN_ACTION"
  expect(newState).toEqual(initialState);
});

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


// src/App.test.js
test("dummy test runs", () => {
  expect(true).toBe(true);
});*/
