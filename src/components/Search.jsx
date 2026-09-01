import menu1 from "../assets/1.jpg";
import menu2 from "../assets/2.jpg";
import menu3 from "../assets/3.jpg";
import menu4 from "../assets/4.jpg";
import menu5 from "../assets/5.jpg";
import menu6 from "../assets/6.jpg";

function Search() {
  return (
    <div id="searchOv">

      <button className="sovclose" id="searchClose">
        <i className="fas fa-times"></i>
      </button>

      <div className="sovbox">

        <h4>What are you craving today?</h4>

        <div className="sovinput">
          <input
            type="text"
            id="searchInput"
            placeholder="Search burgers, pizza, chicken..."
            autoComplete="off"
          />

          <button>
            <i className="fas fa-search"></i>
          </button>
        </div>

        <div className="sovcats">

          <div className="sovcat active" data-cat="all">
            <img src={menu1} alt="All Items" />
            All Items
          </div>

          <div className="sovcat" data-cat="burgers">
            <img src={menu1} alt="Burgers" />
            Burgers
          </div>

          <div className="sovcat" data-cat="pizza">
            <img src={menu2} alt="Pizza" />
            Pizza
          </div>

          <div className="sovcat" data-cat="chicken">
            <img src={menu3} alt="Chicken" />
            Chicken
          </div>

          <div className="sovcat" data-cat="wraps">
            <img src={menu4} alt="Wraps" />
            Wraps
          </div>

          <div className="sovcat" data-cat="pasta">
            <img src={menu5} alt="Pasta" />
            Pasta
          </div>

          <div className="sovcat" data-cat="desserts">
            <img src={menu6} alt="Desserts" />
            Desserts
          </div>

        </div>

        <div className="sovtrend">

          <p>
            <i
              className="fas fa-fire me-1"
              style={{ color: "var(--secondary)" }}
            ></i>
            Trending Searches
          </p>

          <span className="ttag">Smash Burger</span>
          <span className="ttag">Nashville Chicken</span>
          <span className="ttag">Truffle Pizza</span>
          <span className="ttag">Lava Cake</span>
          <span className="ttag">Loaded Fries</span>
          <span className="ttag">Mango Shake</span>

        </div>

      </div>
    </div>

    
  );
}

export default Search;