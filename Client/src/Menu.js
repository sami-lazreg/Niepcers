import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <div className="topnav">
        <div className="topnav-centered">
          <NavLink to="/" className="active">
            Home
          </NavLink>
        </div>

        <div className="topnav-left">
          <NavLink to="/HallOfFame" className="pictures">
            Hall of Fame
          </NavLink>
        </div>

        <div className="topnav-right">
          <NavLink to="/Niepcers">Niepcers</NavLink>
        </div>
   
        <div className="topnav-right">
          <NavLink to="/SignIn">Sign In</NavLink>
        </div>

        <div className="topnav-right">
          <NavLink to="/SignUp">Sign Up</NavLink>
        </div>

        {/* <div className="topnav-right">
          <NavLink to="/Niépcers">Niépcers</NavLink>
        </div>
       */}
      </div>
      
    </>
  );
};

export default Menu;
