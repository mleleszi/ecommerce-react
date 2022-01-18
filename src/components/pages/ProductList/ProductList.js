import Navbar from "../../Navbar/Navbar";
import Announcement from "../../Announcement/Announcement";
import Newsletter from "../../Newsletter/Newsletter";
import Footer from "../../Footer/Footer";
import Products from "../../Products/Products";
import "./ProductList.scss";
import { useEffect } from "react";

const ProductList = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <Announcement />
      <div className="ProductList">
        <h1>Dresses</h1>
        <div className="filter-container">
          <div className="filter">
            <span>Filter Products</span>
            <select name="color" id="">
              <option value="" disabled selected>
                Color
              </option>
              <option value="white">White</option>
              <option value="black">Black</option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="yellow">Yellow</option>
              <option value="green">Green</option>
            </select>
            <select name="size" id="">
              <option value="" disabled selected>
                Size
              </option>
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </div>
          <div className="filter">
            <span>Sort Products</span>
            <select name="sort" id="">
              <option value="newest" selected>
                Newest
              </option>
              <option value="asc">Price (asc)</option>
              <option value="desc">Price (desc)</option>
            </select>
          </div>
        </div>
      </div>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductList;
