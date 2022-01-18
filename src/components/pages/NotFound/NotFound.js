import Navbar from "../../Navbar/Navbar";
import Announcement from "../../Announcement/Announcement";
import Newsletter from "../../Newsletter/Newsletter";
import Footer from "../../Footer/Footer";
import { useEffect } from "react";
import "./NotFound.scss";

const NotFound = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <Announcement />
      <h1 className="NotFound">404 Not Found</h1>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default NotFound;
