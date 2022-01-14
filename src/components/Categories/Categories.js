import "./Categories.scss";
import { categories } from "../../data";
import CategoryItem from "../CategoryItem/CategoryItem";

const Categories = () => {
  return (
    <div className='Categories'>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Categories;
