import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="pl-4 pr-8 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
