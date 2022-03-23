import React from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";

function Navbar(props) {
  let navigate = useNavigate();
  return (
    <div className="navBar">
      <p onClick={() => navigate(-1)}>{"<"} Go Back</p>
      <h1>{props.name}</h1>
    </div>
  );
}

export default Navbar;
