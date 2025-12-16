import { useState } from "react";
import { submitAPI } from "../components/bookingAPI";
import { useNavigate } from "react-router-dom";


export default function BookingForm({ availableTimes, dispatch }) {
  // Step 3: State for form fields
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("1");
  const [occasion, setOccasion] = useState("");
  const navigate = useNavigate();
  const handleDateChange = (e) => {
  //  const newDate =e.target.value;
   setDate(e.target.value);
  const selectedDate = new Date(e.target.value);
    dispatch({type:"dateChanged", date:selectedDate});
  };

  // Step 3: Available times array (stateful)


  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {date, time, guests,occasion};
   // console.log("Submitting reservation:", formData);
  
  const success  = submitAPI(formData);
  if (success){
    navigate("/confirmed");
  }else{
    alert("something went wrong. please try again.");
  }
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      {/* Step 2: Date Field */}
      <div className="form-field">
        <label htmlFor="res-date">Choose date</label>
        <input 
          type="date" 
          id="res-date"
          value={date}
          onChange={handleDateChange}
          required
        />
      </div>

      {/* Step 2: Time Field - populated from availableTimes */}
      <div className="form-field">
        <label htmlFor="res-time">Choose time</label>
        <select 
          id="res-time"
          required
         value={time}
         onChange={(e) => setTime(e.target.value)}
        >
          <option value="">Select a time</option>
          {availableTimes.map((timeSlot) => (
            <option key={timeSlot} value={timeSlot}>
              {timeSlot}
            </option>
          ))}
        </select>
      </div>

      {/* Step 2: Guests Field */}
      <div className="form-field">
        <label htmlFor="guests">Number of guests</label>
        <input 
        className="guests"
          type="number" 
          placeholder="1"
          min="1" 
          max="10"
          id="guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          required
        />
      </div>

      {/* Step 2: Occasion Field */}
      <div className="form-field">
        <label htmlFor="occasion">Occasion</label>
        <select 
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option value="">None</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
      </div>

      {/* Step 1: Submit Button */}
      <button type="submit" className="reserveBtn">Make Your Reservation</button>
    </form>
  );
}
