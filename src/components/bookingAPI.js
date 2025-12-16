// src/bookingAPI.js

// helper to generate some fake times based on date
export function fetchAPI(date) {
  // `date` is a Date object; return some times as strings
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
}

export function submitAPI(formData) {
  console.log("Submitting booking", formData);
  return true;
}
