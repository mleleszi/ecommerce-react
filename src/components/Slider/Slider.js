import "./Slider.scss";
import { ArrowRightOutlined, ArrowLeftOutlined } from "@mui/icons-material";

const Slider = () => {
  return (
    <div className='Slider'>
      <div className='container'>
        <ArrowLeftOutlined className='arrow arrow-left' />
        {/*
        <div className='wrapper'>
          <div className='slide'>
            <div className='img-container'>
              <img
                src='https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                alt=''
              />
            </div>
          </div>

          <div className='info-container'></div>
        </div>
        */}

        <ArrowRightOutlined className='arrow arrow-right' />
      </div>
    </div>
  );
};

export default Slider;
