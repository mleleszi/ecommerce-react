import "./Product.scss";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const Product = ({ item }) => {
  return (
    <div className='Product'>
      <img src={item.img} alt='' />
      <div className='info'>
        <ShoppingCartOutlinedIcon />
        <SearchOutlinedIcon />
        <FavoriteBorderOutlinedIcon />
      </div>
    </div>
  );
};

export default Product;
