import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
import UserContext from "./UserContext";

function Homepage() {
  const { currUser } = useContext(UserContext);
  return (
    <>
      <div className="Home">
        <h1>Jobly</h1>
        <p>All the jobs in one, convenient place.</p>
        {currUser ? (
          <h3>Welcome Back, {currUser.username}</h3>
        ) : (
          <p>
            <Link to="/login">Log In</Link>
            <Link to="/signup">Sign Up</Link>
          </p>
        )}
      </div>
    </>
  );
}

export default Homepage;
