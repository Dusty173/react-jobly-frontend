import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "./UserContext";
import "./Navbar.css";

function Navbar({ logout }) {
  const { currUser } = useContext(UserContext);

  function NavLoggedIn() {
    return (
      <ul>
        <li>
          <NavLink to="/companies">Companies</NavLink>
        </li>
        <li>
          <NavLink to="/jobs">Jobs</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Your Profile</NavLink>
        </li>
        <li>
          <Link to="/" onClick={logout}>
            Logout {currUser.username}
          </Link>
        </li>
      </ul>
    );
  }

  function NavLoggedOut() {
    return (
      <ul>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/signup">Sign Up</NavLink>
        </li>
      </ul>
    );
  }

  return (
    <nav className="Navbar">
      <Link to="/">Jobly</Link>
      {currUser ? NavLoggedIn() : NavLoggedOut()}
    </nav>
  );
}

export default Navbar;
