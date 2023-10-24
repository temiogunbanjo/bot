import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <div className="flex flex-col" sx={{ width: "100%" }}>
      <Header />
      <main id="main-page-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
