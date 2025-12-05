import chefA from './images/Mario and Adrian A.jpg';
import chefB from './images/Mario and Adrian b.jpg';
function Chicago(){
    return(
      <main className='restaurant'>
            <section class="restaurant-intro">
               <div class="intro-text">
                 <h1>Little Lemon</h1>
                 <h2>Chicago</h2>
                 <p>Little Lemon is a charming neighborhood bistro that serves simple 
                  food and classic cocktails in a lively but casual environment. 
                  The restaurant features a locally sourced menu with daily specials.</p>
                <p>Owned by two Italian Brothers, Adrian and Mario, Who moved to the US to pursue
                    their shared dream.
                </p>
               </div>
               <div class="intro-images">
                   <img src={chefA} alt="Smiling chefs in a kitchen" class="image-front"/>
                   <img src={chefB} alt="Kitchen overhead view" class="image-back"/>
                </div>
               </section>
      </main>
    );
}
export default Chicago;