import category1 from "../assets/1.jpg";
import category2 from "../assets/2.jpg";
import category3 from "../assets/3.jpg";
import category4 from "../assets/4.jpg";
import category5 from "../assets/5.jpg";
import category6 from "../assets/6.jpg";
function Category() {
return (
 <section id="category">
         <div class="container">
            <div class="text-center mb-5" data-aos="fade-up">
               <span class="slbl">What We Offer</span>
               <h2 class="stitle">Browse by <span>Category</span></h2>
               <div class="sline"></div>
               <p className="sdesc mx-auto" style={{ maxWidth: "480px" }}>From sizzling burgers to exotic world cuisines - find your favourite in our menu</p>
            </div>
            <div class="row g-3 justify-content-center">
               <div class="col-6 col-sm-4 col-md-3 col-lg-2" data-aos="zoom-in" data-aos-delay="0">
                  <div class="catcard active" data-filter="all">
                     <img className="catimg" src={category1} alt="All Items" />
                     <div class="catnm">All Items</div>
                     <div class="catct">99 items</div>
                  </div>
               </div>
               <div class="col-6 col-sm-4 col-md-3 col-lg-2" data-aos="zoom-in" data-aos-delay="70">
                  <div class="catcard" data-filter="burgers">
                     <img className="catimg" src={category2} alt="All Items" />
                     <div class="catnm">Burgers</div>
                     <div class="catct">24 items</div>
                  </div>
               </div>
               <div class="col-6 col-sm-4 col-md-3 col-lg-2" data-aos="zoom-in" data-aos-delay="140">
                  <div class="catcard" data-filter="pizza">
                     <img className="catimg" src={category3} alt="Pizza" />
                     <div class="catnm">Pizza</div>
                     <div class="catct">18 items</div>
                  </div>
               </div>
               <div class="col-6 col-sm-4 col-md-3 col-lg-2" data-aos="zoom-in" data-aos-delay="210">
                  <div class="catcard" data-filter="chicken">
                     <img className="catimg" src={category4} alt="Fried Chicken" />
                     <div class="catnm">Fried Chicken</div>
                     <div class="catct">15 items</div>
                  </div>
               </div>
               <div class="col-6 col-sm-4 col-md-3 col-lg-2" data-aos="zoom-in" data-aos-delay="280">
                  <div class="catcard" data-filter="wraps">
                     <img className="catimg" src={category5} alt="Wraps" />
                     <div class="catnm">Wraps</div>
                     <div class="catct">12 items</div>
                  </div>
               </div>
               <div class="col-6 col-sm-4 col-md-3 col-lg-2" data-aos="zoom-in" data-aos-delay="350">
                  <div class="catcard" data-filter="desserts">
                     <img className="catimg" src={category6} alt="Desserts" />
                     <div class="catnm">Desserts</div>
                     <div class="catct">20 items</div>
                  </div>
               </div>
            </div>
         </div>
      </section>
);

}
export default Category;