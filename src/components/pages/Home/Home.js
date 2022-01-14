import Navbar from "../../Navbar/Navbar";
import Announcement from "../../Announcement/Announcement";
import Slider from "../../Slider/Slider";
import Categories from "../../Categories/Categories";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
    </div>
  );
};

export default Home;
