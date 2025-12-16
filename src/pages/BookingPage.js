import BookingForm from "../components/BookingForm";
function BookingPage({availableTimes,dispatch}){
    return(
        <main className="booking-page">
            <h1>Reserve a Table</h1>
            <BookingForm availableTimes={availableTimes} dispatch= {dispatch}/>
            <p>Reserve your table at little Lemon Chicago!</p>
        </main>
    );
}
export default BookingPage;