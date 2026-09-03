import category1 from "../assets/1.jpg";  
import category2 from "../assets/2.jpg";
import category3 from "../assets/3.jpg";
import category4 from "../assets/4.jpg";
import category5 from "../assets/5.jpg";
import category6 from "../assets/6.jpg";

function Category({ onCategoryClick, selectedCategory }) {
  const categories = [
    {
      name: "All Items",
      value: "all",
      image: category1,
      count: "99 items",
    },
    {
      name: "Burgers",
      value: "burgers",
      image: category2,
      count: "2 items",
    },
    {
      name: "Wraps",
      value: "wraps",
      image: category3,
      count: "4 items",
    },
    {
      name: "Wings",
      value: "wings",
      image: category4,
      count: "4 items",
    },
    {
      name: "Nuggets",
      value: "nuggets",
      image: category5,
      count: "3 items",
    },
    {
      name: "Lemonades",
      value: "lemonades",
      image: category6,
      count: "8 items",
    },
  ];

  const handleCategoryClick = (category) => {
    onCategoryClick(category);

    // Menu section par scroll
    setTimeout(() => {
      document.getElementById("menu")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  return (
    <section id="category">
      <div className="container">

        <div
          className="text-center mb-5"
          data-aos="fade-up"
        >
          <span className="slbl">
            What We Offer
          </span>

          <h2 className="stitle">
            Browse by <span>Category</span>
          </h2>

          <div className="sline"></div>

          <p
            className="sdesc mx-auto"
            style={{ maxWidth: "480px" }}
          >
            From sizzling burgers to exotic world cuisines -
            find your favourite in our menu
          </p>
        </div>

        <div className="row g-3 justify-content-center">

          {categories.map((category, index) => (
            <div
              className="col-6 col-sm-4 col-md-3 col-lg-2"
              data-aos="zoom-in"
              data-aos-delay={index * 70}
              key={category.value}
            >
              <div
                className={`catcard ${
                  selectedCategory === category.value
                    ? "active"
                    : ""
                }`}
                data-filter={category.value}
                onClick={() =>
                  handleCategoryClick(category.value)
                }
              >
                <img
                  className="catimg"
                  src={category.image}
                  alt={category.name}
                />

                <div className="catnm">
                  {category.name}
                </div>

                <div className="catct">
                  {category.count}
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Category;
