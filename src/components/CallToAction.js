import food from  './images/restauranfood.jpg'
function CallToAction(){
    return(
        <section className="headerSection">
        <div className= "textContainer">
          <h1 className="title">Little Lemon</h1>
          <h2 className="subtitle">Chicago</h2>
          <p className="description">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button className="reserveBtn">Reserve a Table</button>
        </div>
        <div className='food'>
          <img
            src={food}
            alt="Mediterranean food"
            className="image1"
          />
        </div>
      </section>
    );
}
export default CallToAction;