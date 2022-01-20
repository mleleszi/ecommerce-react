import "./Products.scss";
import Product from "../Product/Product";
import {useQuery} from "react-query";
import {getAllProducts} from "../../api/Product";

const Products = () => {

  const {data, status} = useQuery("products", getAllProducts);

  if(status === "loading")
    return <div>Loading...</div>

  if(status === "error")
    return <div>Error fetching data...</div>


  return (
    <div className='Products'>
      {data.map(product => (
          <Product item={product} key={product.id}/>
      ))}
    </div>
  );
};

export default Products;
