import emma from './images/per1.jpg'
import nora from './images/per2.jpg'
import yuri from './images/per3.jpg'
import maria from './images/per4.jpg'
function CustomersSay(){
    const testimonials =[
        {name : "Emma", rating :5, text: "Little Lemon is my go-to spot for weekend brunch",img : emma},
        {name : "Nora", rating :5, text: "I love the cozy vibe of Little Lemon.",img : nora},
        {name : "Maria", rating :4, text: "From the warm welcome to the delicious desserts",img : maria},
        {name : "Yuri", rating :5, text: "Little Lemon never disappoints! The seasonal menu is exciting.",img : yuri},
    ];
    return(
        <main className='testimonials'>
        <section className="testimonials-section">
            <h2>Testimonials</h2>
            <div className="testimonials-container">
              {testimonials.map((t) =>(                
                <article key={t.name} class="testimonial-card">
                   <div class="rating"><p>{`Rating: ${t.rating} / 5`}</p>⭐⭐⭐⭐⭐</div>
                       <div class="client-info">
                         <img src={t.img} alt="Emma" class="client-photo"/>
                         <figcaption class="client-name">{t.name}</figcaption>
                       </div>
                        <blockquote>
                            <p>{t.text}</p>
                        </blockquote>
                </article>
                ))}

            </div>
        </section>
        </main>
    );
}
export default CustomersSay;