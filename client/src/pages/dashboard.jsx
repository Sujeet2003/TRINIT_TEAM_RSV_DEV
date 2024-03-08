import React from "react";
import { Link } from "react-router-dom";

export const DashBoard = () => {
    return (
      <>
        <h1>DashBoard Page</h1>
        <Link to={"/"}>
          <button> To Home</button>
        </Link>
      </>
    );
};
