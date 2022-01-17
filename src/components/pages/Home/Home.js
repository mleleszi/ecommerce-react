import Navbar from "../../Navbar/Navbar";
import Announcement from "../../Announcement/Announcement";
import Slider from "../../Slider/Slider";
import Categories from "../../Categories/Categories";
import Products from "../../Products/Products";
import Newsletter from "../../Newsletter/Newsletter";
import Footer from "../../Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Announcement />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
