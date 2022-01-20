import Navbar from "../../Navbar/Navbar";
import Announcement from "../../Announcement/Announcement";
import Newsletter from "../../Newsletter/Newsletter";
import Footer from "../../Footer/Footer";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "./ProductPage.scss";
import { useEffect } from "react";
import {getProductById} from "../../../api/Product";
import {useQuery} from "react-query";
import {useLocation} from "react-router-dom"
import queryString from "query-string";

const ProductPage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const { search } = useLocation();
  const { id } = queryString.parse(search);

  const {data, status} = useQuery(id, getProductById);
  console.log(data);

  if(status === "loading")
    return <div>Loading...</div>

  if(status === "error")
    return <div>Error fetching data...</div>

  return (
    <div>
      <Navbar />
      <Announcement />
      <div className="ProductPage">
        <div className="img-container">
          <img src={data.img_url} alt="" />
        </div>
        <div className="info-container">
          <h1 className="title">{data.name}</h1>
          <p>
            {data.desc}
          </p>
          <span className="price">{data.price}</span>

          <div className="filter-container">
            <div className="filter">
              <span className="title">Color</span>
              {data.color.map((color) => (
                  <div key={color} className={`color ${color}`}></div>
              ))}

            </div>

            <div className="filter">
              <span className="title">Size</span>
              <select name="size" id="">


                {data.size.map(size => (
                    <option value={size}>{size}</option>
                ))}
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
