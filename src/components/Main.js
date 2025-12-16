import {Routes, Route} from 'react-router-dom';
import HomePage from "../pages/HomePage";
import BookingPage from '../pages/BookingPage'
import { useReducer } from 'react';
import { fetchAPI} from "../components/bookingAPI";
import ConfirmedBooking from './ConfirmedBooking';

  // Step 3: Available times array (stateful)
/*export function initializeTimes(){
  return["17:00","18:00","19:00","20:00","21:00","22:00"]
}

export function updateTimes(state,action){
  switch(action.type){
    case "dateChanged":
      return initializeTimes();
      default :
      return state;
  }
}*/
export function initializeTimes(){
  const today = new Date();
  return fetchAPI(today);
}

export function updateTimes(state,action){
  switch(action.type){
    case "dateChanged":
      return fetchAPI(action.Date);
      default :
      return state;
  }
}



function Main() {
  const [availableTimes,dispatch] = useReducer(
    updateTimes,[],initializeTimes
  );
    return (
<div>
   <main className="main" >
      <Routes>
        <Route path='/' element= {<HomePage/>}/>
        <Route path='/booking' element= {<BookingPage availableTimes={availableTimes} dispatch= {dispatch}/>}/>
        <Route path='/confirmed' element= {<ConfirmedBooking/>}/>

      </Routes>
    </main>
</div>
    );
}
export default Main;