import "./Product.scss";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Link } from "react-router-dom";

const Product = ({ item }) => {
  return (
    <div className="Product">
      <img src={item.img_url} alt="" />
      <div className="info">
        <Link to="/product" className="link">
          <ShoppingCartOutlinedIcon />
        </Link>
        <Link to={`/product?id=${item.id}`} className="link">
          <SearchOutlinedIcon />
        </Link>
        <Link to="/product" className="link">
          <FavoriteBorderOutlinedIcon />
        </Link>
      </div>
    </div>
  );
};

export default Product;
