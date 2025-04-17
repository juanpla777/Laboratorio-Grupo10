import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "20px",
      }}
    >
      <Link to="/" style={{ margin: "0 10px" }}>
        Home
      </Link>
      <Link to="/about" style={{ margin: "0 10px" }}>
        About
      </Link>
    </div>
  );
}

export default Navigation;
