import "./Slider.scss";
import { ArrowRightOutlined, ArrowLeftOutlined } from "@mui/icons-material";

const Slider = () => {
  return (
    <div className="Slider">
      <ArrowLeftOutlined className="arrow arrow-left" />

      <div className="wrapper">
        <div className="slide">
          <div className="img-container">
            <img src="https://i.ibb.co/cXFnLLV/3.png" alt="" />
          </div>
        </div>

        <div className="info-container">
          <h1>title</h1>
          <p>desc</p>
          <button>SHOW NOW</button>
        </div>
      </div>

      <ArrowRightOutlined className="arrow arrow-right" />
    </div>
  );
};

export default Slider;
