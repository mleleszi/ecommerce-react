import "./Navbar.scss";
import { Badge } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="container">
        <div className="wrapper">
          <div className="left">
            <span className="language">EN</span>
            <div className="search-container">
              <input type="text" />
              <SearchIcon style={{ color: "gray", fontSize: "16px" }} />
            </div>
          </div>
          <div className="center">
            <Link className="link" to="/">
              <h1>WEBSHOP</h1>
            </Link>
          </div>
          <div className="right">
            <p>REGISTER</p>
            <p>SIGN IN</p>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
