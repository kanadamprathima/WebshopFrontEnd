import { NavLink } from "react-router-dom";
import "./style.css";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="leftbar">
        <div className="logo">
          the<span>Shop</span>
        </div>
        <div className="navItem">
          <NavLink to="/">Home</NavLink> <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/details:id">About</NavLink>
        </div>

        <div className="searchbar">
          <input placeholder="search" type="text"></input>
        </div>
      </div>
      <div className="rightbar">
        <AiOutlineUser />
        <AiOutlineShoppingCart />
        <AiOutlineHeart />
      </div>
    </div>
  );
};

export default NavBar;
