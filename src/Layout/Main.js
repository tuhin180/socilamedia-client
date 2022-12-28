import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../component/Footer";
import NavBar from "../component/NavBar";

const Main = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
