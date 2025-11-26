import food from  './images/restauranfood.jpg'
import greeksalad from './images/greek salad.jpg'
import bruschetta from './images/bruschetta.png'
import lemondessert from './images/lemon dessert.jpg'
import emma from './images/per1.jpg'
import nora from './images/per2.jpg'
import yuri from './images/per3.jpg'
import maria from './images/per4.jpg'
import chefA from './images/Mario and Adrian A.jpg';
import chefB from './images/Mario and Adrian b.jpg';
function Main() {
    return (
<div>
   <main className="main" >
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
      </main>

      <main className="specials" >
        <header class="page-header">
          <h1 class="section-title">Specials</h1>
          <button class="online-menu-button">Online Menu</button>
        </header>

      <main class="specials-container">

        <article class="food-card">
            <img src={greeksalad} alt="Greek salad" class="card-image"/>
            <div class="card-content">
                <div class="card-header">
                    <h2 class="item-name">Greek salad</h2>
                    <span class="item-price">$12.99</span>
                </div>
                <p class="item-description">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                <a href="#" class="order-link">Order a delivery  🚚</a>
            </div>
        </article>

        <article class="food-card">
            <img src={bruschetta} alt="Bruschetta" class="card-image"/>
             <div class="card-content">
                <div class="card-header">
                    <h2 class="item-name">Bruchetta</h2>
                    <span class="item-price">$5.99</span>
                </div>
                <p class="item-description">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                <a href="#" class="order-link">Order a delivery 🚚</a>
            </div>
        </article>

        <article class="food-card">
            <img src={lemondessert} alt="Lemon Dessert" class="card-image"/>
             <div class="card-content">
                <div class="card-header">
                    <h2 class="item-name">Lemon Dessert</h2>
                    <span class="item-price">$5.00</span>
                </div>
                <p class="item-description">This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                <a href="#" class="order-link">Order a delivery 🚚</a>
            </div>
        </article>
      </main>
      </main>

      <main className='testimonials'>
        <section class="testimonials-section">
          <h2>What our clients say about us</h2>
          <div class="testimonials-container">

    <figure class="testimonial-card">
      <div class="rating">⭐⭐⭐⭐⭐</div>
      <div class="client-info">
        <img src={emma} alt="Emma" class="client-photo"/>
        <figcaption class="client-name">Emma</figcaption>
      </div>
      <blockquote>
        <p>Little Lemon is my go-to spot for weekend brunch!</p>
      </blockquote>
    </figure>

    <figure class="testimonial-card">
      <div class="rating">⭐⭐⭐⭐⭐</div>
      <div class="client-info">
        <img src={nora} alt="Nora" class="client-photo"/>
        <figcaption class="client-name">Nora</figcaption>
      </div>
      <blockquote>
        <p>I love the cozy vibe of Little Lemon.</p>
      </blockquote>
    </figure>


    <figure class="testimonial-card">
      <div class="rating">⭐⭐⭐⭐⭐</div>
      <div class="client-info">
        <img src={maria} alt="Maria" class="client-photo"/>
        <figcaption class="client-name">Maria</figcaption>
      </div>
      <blockquote>
        <p>From the warm welcome to the delicious desserts</p>
      </blockquote>
    </figure>


    <figure class="testimonial-card">
      <div class="rating">⭐⭐⭐⭐⭐</div>
      <div class="client-info">
        <img src={yuri} alt="Yuri" class="client-photo"/>
        <figcaption class="client-name">Yuri</figcaption>
      </div>
      <blockquote>
        <p>Little Lemon never disappoints! The seasonal menu is exciting.</p>
      </blockquote>
       </figure>
       </div>
      </section>
      </main>

      <main className='restaurant'>

            <section class="restaurant-intro">
               <div class="intro-text">
                 <h1>Little Lemon</h1>
                 <h2>Chicago</h2>
                 <p>Little Lemon is a charming neighborhood bistro that serves simple 
                  food and classic cocktails in a lively but casual environment. 
                  The restaurant features a locally sourced menu with daily specials.</p>
                  <p>Little Lemon is a charming neighborhood bistro that serves simple 
                  food and classic cocktails in a lively but casual environment. 
                  The restaurant features a locally sourced menu with daily specials.</p>
               </div>
               <div class="intro-images">
                   <img src={chefA} alt="Smiling chefs in a kitchen" class="image-front"/>
                   <img src={chefB} alt="Kitchen overhead view" class="image-back"/>
                </div>
               </section>
      </main>
      </div>
    )
}
export default Main;