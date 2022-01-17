import Navbar from "../../Navbar/Navbar";
import Announcement from "../../Announcement/Announcement";
import Filter from "../../Filter/Filter";
import Newsletter from "../../Newsletter/Newsletter";
import Footer from "../../Footer/Footer";

const ProductList = () => {
  return (
    <div className="ProductList">
      <Navbar />
      <Announcement />
      <Filter />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductList;
