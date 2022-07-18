import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <NavLink className="navItem" to="/HomePage">
        Home
      </NavLink>
      {"-"}
      <NavLink className="navItem" to="/DetailsPage">
        Product details Page
      </NavLink>
    </div>
  );
};

export default NavBar;
