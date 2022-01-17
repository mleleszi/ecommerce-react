import "./Footer.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="left">
        <h1>WEBSHOP</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
          culpa deleniti dolorem earum eligendi facere ipsa, ipsam porro rem
          sequi.
        </p>
        <div className="social">
          <FacebookIcon className="facebook" />
          <InstagramIcon className="instagram" />
          <TwitterIcon className="twitter" />
          <PinterestIcon className="pinterest" />
        </div>
      </div>
      <div className="center">
        <h3>Useful Links</h3>
        <ul>
          <li>Home</li>
          <li>Cart</li>
          <li>Man Fashion</li>
          <li>Woman Fashion</li>
          <li>My Account</li>
          <li>Order Tracking</li>
          <li>Wishlist</li>
          <li>Terms</li>
        </ul>
      </div>
      <div className="right">
        <h1>Contact</h1>
        <div>
          <MyLocationIcon />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem,
          labore, ullam!
        </div>
        <div>
          <PhoneIcon />
          +36206579988
        </div>
        <div>
          <EmailIcon />
          contact@gmail.com
        </div>
        <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="" />
      </div>
    </div>
  );
};

export default Footer;
