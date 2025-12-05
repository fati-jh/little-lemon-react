import greeksalad from './images/greek salad.jpg'
import bruschetta from './images/bruschetta.png'
import lemondessert from './images/lemon dessert.jpg'
function Specials(){
    const specials =["Greek Salad", "Bruchetta", "Lemon Dessert"];
    return(
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
    )
}
export default Specials;