import "./Products.scss";
import Product from "../Product/Product";
import { popularProducts } from "../../data";

const Products = () => {
  return (
    <div className='Products'>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Products;
