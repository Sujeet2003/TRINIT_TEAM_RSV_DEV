import React from "react";
import { Outlet } from "react-router-dom";
import ButtonAppBar from "../components/Header";

export const Layout = () => {
  return (
    <>
      <ButtonAppBar />
      <Outlet />
    </>
  );
};
