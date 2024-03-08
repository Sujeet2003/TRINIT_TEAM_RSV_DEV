import React from "react";
import { Link } from "react-router-dom";

export const LandingPage = () => {
  return (
    <>
      <h1>DashBoard Page</h1>
      <Link to={"/dashboard"}>
        <button> To Dashboard</button>
      </Link>
    </>
  );
};
