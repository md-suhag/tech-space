import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import GAListener from "../misc/GAListener";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar />
      <main className="grow-1">
        <Outlet />
      </main>
      <Footer />
      <GAListener />
    </div>
  );
};

export default MainLayout;
