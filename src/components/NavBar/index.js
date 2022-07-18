import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <NavLink className="navItem" to="/HomePage/index">
        Home
      </NavLink>
      {"  "}
      <NavLink className="navItem" to="/DetailsPage/index">
        Product Details page
      </NavLink>
    </div>
  );
};

export default NavBar;
