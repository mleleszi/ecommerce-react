import "./Categories.scss";
import { categories } from "../../data";
import CategoryItem from "../CategoryItem/CategoryItem";

const Categories = () => {
  return (
    <div className='Categories'>
      {categories.map((item) => (
        <CategoryItem item={item} />
      ))}
    </div>
  );
};

export default Categories;
