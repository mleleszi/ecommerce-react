import Navbar from "../../Navbar/Navbar";
import Announcement from "../../Announcement/Announcement";
import Newsletter from "../../Newsletter/Newsletter";
import Footer from "../../Footer/Footer";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "./ProductPage.scss";

const ProductPage = () => {
  return (
    <div>
      <Navbar />
      <Announcement />
      <div className="ProductPage">
        <div className="img-container">
          <img src="https://i.ibb.co/S6qMxwr/jean.jpg" alt="" />
        </div>
        <div className="info-container">
          <h1 className="title">Denim Jumpsuit</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
            accusantium ad adipisci alias amet atque commodi earum harum illum,
            impedit in inventore libero modi nobis non odit officiis porro quia
            quibusdam rem repudiandae rerum saepe tempora totam, ullam voluptas
            voluptates! Consectetur ea expedita illum ipsum molestiae nemo quos,
            tenetur voluptate.
          </p>
          <span className="price">$20</span>

          <div className="filter-container">
            <div className="filter">
              <span className="title">Color</span>
              <div className="color black"></div>
              <div className="color darkblue"></div>
              <div className="color grey"></div>
            </div>

            <div className="filter">
              <span className="title">Size</span>
              <select name="size" id="">
                <option value="XS" className="">
                  XS
                </option>
                <option value="S" className="">
                  S
                </option>
                <option value="M" className="">
                  M
                </option>
                <option value="L" className="">
                  L
                </option>
                <option value="XL" className="">
                  XL
                </option>
              </select>
            </div>
          </div>
          <div className="purchase-container">
            <div className="amount-container">
              <AddIcon />
              <span className="amount">1</span>
              <RemoveIcon />
            </div>
            <button>ADD TO CART</button>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductPage;
