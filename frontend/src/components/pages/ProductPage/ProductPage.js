import Navbar from "../../Navbar/Navbar";
import Announcement from "../../Announcement/Announcement";
import Newsletter from "../../Newsletter/Newsletter";
import Footer from "../../Footer/Footer";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "./ProductPage.scss";
import { useEffect } from "react";
import {getAllProducts} from "../../../api/Product";
import {useQuery} from "react-query";
import {useLocation} from "react-router-dom"
import queryString from "query-string";

const ProductPage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const { search } = useLocation();
  const { id } = queryString.parse(search);

  const {data, status} = useQuery("products", getAllProducts);
  console.log(data);

  if(status === "loading")
    return <div>Loading...</div>

  if(status === "error")
    return <div>Error...</div>

  return (
    <div>
      <Navbar />
      <Announcement />
      <div className="ProductPage">
        <div className="img-container">
          <img src={data[id].img_url} alt="" />
        </div>
        <div className="info-container">
          <h1 className="title">{data[id].name}</h1>
          <p>
            {data[id].desc}
          </p>
          <span className="price">{data[id].price}</span>

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
