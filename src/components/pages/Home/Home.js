import Navbar from "../../Navbar/Navbar";
import Announcement from "../../Announcement/Announcement";
import Slider from "../../Slider/Slider";
import Categories from "../../Categories/Categories";
import Products from "../../Products/Products";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
    </div>
  );
};

export default Home;
