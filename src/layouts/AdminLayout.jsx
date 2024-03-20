import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

import Menu, { MenuItem } from "../components/common/Menu";
import { BsAirplaneFill } from "react-icons/bs";
import { MdDashboard, MdEvent, MdSettings } from "react-icons/md";
import { FaUser } from "react-icons/fa";

import Footer from "../components/Footer";
import HeaderAdmin from "../components/HeaderAdmin";
import Stack from "../components/common/Stack";

const ControlPanel = () => {
  const navigate = useNavigate();
  return (
    <Stack className="w-1/3 md:mr-8 overflow-hidden bg-black shadow-lg rounded-lg p-8">
      <h2 className="text-4xl capitalize font-bold text-center sm:text-left">
        Control <span className="animate-bounce text-green-600">Panel</span>
      </h2>
      <p className="my-4 text-sm text-center sm:text-left text-gray-400">
        Kindly choose the campaign you want to support. All voting activities
        are currently done on WhatsApp
      </p>
      <Menu className="my-3 text-base text-center sm:text-left">
        <MenuItem
          icon={<MdDashboard />}
          onClick={() => {
            navigate("/admin/dashboard");
          }}
        >
          Dashboard
        </MenuItem>
        <MenuItem icon={<MdEvent />}>Manage Campaigns</MenuItem>
        <MenuItem
          icon={<FaUser />}
          onClick={() => {
            navigate("/admin/dashboard/users");
          }}
        >
          Manage Users
        </MenuItem>
        <MenuItem icon={<MdSettings />}>Settings</MenuItem>
      </Menu>
    </Stack>
  );
};

function AdminLayout() {
  return (
    <div className="flex flex-col" sx={{ width: "100%" }}>
      <HeaderAdmin />
      <Stack sx={{ width: "100%" }}>
        {/* <Drawer isOpen={mobileOpen} toggler={handleDrawerToggle} /> */}
        <main id="main-page-content">
          <section
            className="flex flex-col md:flex-row items-stretch justify-center"
            style={{
              paddingRight: "25px",
              paddingLeft: "25px",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              minHeight: "unset",
              height: "auto",
            }}
          >
            <ControlPanel />
            <Outlet />
          </section>
        </main>
      </Stack>
      <Footer />
    </div>
  );
}

export default AdminLayout;
