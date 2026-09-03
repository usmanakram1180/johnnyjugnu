import about1 from '../assets/about1.jpg';
function About () {

    return (
<section id="about">
         <div class="container">
            <div class="row align-items-center g-5">
               <div class="col-lg-5" data-aos="fade-right">
                  <div class="astack">
                     <div class="aexp"><span class="anum">12+</span><small>Years of<br/>Excellence</small></div>
                     <div class="amain"><img src={about1} alt="Restaurant"/></div>
                     {/* <div class="asm"><img src={about1} alt=""/></div> */}
                  </div>
               </div>
               <div class="col-lg-7" data-aos="fade-left">
                  <span class="slbl">Our Story</span>
                  <h2 class="stitle text-start">We Invite You to Visit<br/>Our <span>Food Restaurant</span></h2>
                  <div class="sline lft"></div>
                  <p class="sdesc mb-4">Born in Lahore in 2014, Johnny & Jugnu began with a vision to redefine the fast-food experience through bold flavors and exceptional quality. From a humble beginning in Krishan Nagar, the brand grew through passion, innovation, and an unwavering commitment to great food. Today, that vision lives on in every creation — a journey from a small beginning to a celebrated name in Pakistan’s food scene..</p>
                  <div class="mb-4">
                     <div class="fti">
                        <div class="ftico r"><i class="fas fa-leaf"></i></div>
                        <div>
                           <h6>100% Fresh Ingredients</h6>
                           <p>We source locally and sustainably. Every ingredient is hand-picked daily for maximum freshness.</p>
                        </div>
                     </div>
                     <div class="fti">
                        <div class="ftico y"><i class="fas fa-award"></i></div>
                        <div>
                           <h6>Award-Winning Recipes</h6>
                           <p>Our signature recipes have won national culinary awards 5 years in a row.</p>
                        </div>
                     </div>
                     <div class="fti">
                        <div class="ftico g"><i class="fas fa-shipping-fast"></i></div>
                        <div>
                           <h6>Lightning-Fast Delivery</h6>
                           <p>Order online and get hot, fresh food at your door in under 25 minutes, guaranteed.</p>
                        </div>
                     </div>
                  </div>
                  <a href="#menu" class="btn-red"><i class="fas fa-book-open"></i>View Full Menu</a>
               </div>
            </div>
         </div>
      </section>
    );
}
export default About;