import about1 from '../assets/about1.jpg';
function About () {

    return (
<section id="about">
         <div className="container">
            <div className="row align-items-center g-5">
               <div className="col-lg-5" data-aos="fade-right">
                  <div className="astack">
                     <div className="aexp"><span className="anum">12+</span><small>Years of<br/>Excellence</small></div>
                     <div className="amain"><img src={about1} alt="Restaurant"/></div>
                     <div className="asm"><img src={about1} alt=""/></div>
                  </div>
               </div>
               <div className="col-lg-7" data-aos="fade-left">
                  <span className="slbl">Our Story</span>
                  <h2 className="stitle text-start">We Invite You to Visit<br/>Our <span>Food Restaurant</span></h2>
                  <div className="sline lft"></div>
                  <p className="sdesc mb-4">Born in Lahore in 2014, Johnny & Jugnu began with a vision to redefine the fast-food experience through bold flavors and exceptional quality. From a humble beginning in Krishan Nagar, the brand grew through passion, innovation, and an unwavering commitment to great food. Today, that vision lives on in every creation — a journey from a small beginning to a celebrated name in Pakistan’s food scene..</p>
                  <div className="mb-4">
                     <div className="fti">
                        <div className="ftico r"><i className="fas fa-leaf"></i></div>
                        <div>
                           <h6>100% Fresh Ingredients</h6>
                           <p>We source locally and sustainably. Every ingredient is hand-picked daily for maximum freshness.</p>
                        </div>
                     </div>
                     <div className="fti">
                        <div className="ftico y"><i className="fas fa-award"></i></div>
                        <div>
                           <h6>Award-Winning Recipes</h6>
                           <p>Our signature recipes have won national culinary awards 5 years in a row.</p>
                        </div>
                     </div>
                     <div className="fti">
                        <div className="ftico g"><i className="fas fa-shipping-fast"></i></div>
                        <div>
                           <h6>Lightning-Fast Delivery</h6>
                           <p>Order online and get hot, fresh food at your door in under 25 minutes, guaranteed.</p>
                        </div>
                     </div>
                  </div>
                  <a href="#menu"className="btn-red"onClick={(e) => {e.preventDefault();document.getElementById("menu").scrollIntoView({behavior: "smooth",});}}><i className="fas fa-book-open"></i>View Full Menu</a>
               </div>
            </div>
         </div>
      </section>
    );
}
export default About;