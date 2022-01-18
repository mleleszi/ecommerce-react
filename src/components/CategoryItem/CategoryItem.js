import "./CategoryItem.scss";
import { Link } from "react-router-dom";

const CategoryItem = ({ item }) => {
  return (
    <div className="CategoryItem">
      <img src={item.img} alt="" />
      <div className="info">
        <h1>{item.title}</h1>
        <Link to="products" className="link">
          SHOP NOW
        </Link>
      </div>
    </div>
  );
};

export default CategoryItem;
