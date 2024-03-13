import React from "react";
import { MdDashboard } from "react-icons/md";
// import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
// import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";
// import Header from './Header';
const Sidebar = ({ children, isOpen }) => {
  const menuItem = [
    {
      path: "/dashboard/",
      name: "Dashboard",
      icon: <MdDashboard />,
    },
    {
      path: "/allUsers",
      name: "All Users",
      icon: <MdDashboard />,
    },
    {
      path: "/jobs",
      name: "Jobs",
      icon: <MdDashboard />,
    },
    {
      path: "/applications",
      name: "Applications",
      icon: <MdDashboard />,
    },
    {
      path: "/followers",
      name: "Followers",
      icon: <MdDashboard />,
    },
    {
      path: "/myInventory",
      name: "My Inventory",
      icon: <MdDashboard />,
    },
    {
      path: "/companyProfile",
      name: "Company Profile",
      icon: <MdDashboard />,
    },
    {
      path: "/myaccount",
      name: "My Account",
      icon: <MdDashboard />,
    },
  ];
  return (
    <div className="containerSidebar">
      <div className="sidebar" style={{ width: isOpen ? "250px" : "50px" }}>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeClassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              className="link_text"
              style={{ display: isOpen ? "block" : "none" }}
            >
              {item.name}
            </div>
          </NavLink>
        ))}
        <p style={{ display: isOpen ? "block" : "none" }}>Contact Us -</p>
        <p style={{ display: isOpen ? "block" : "none" }}>
          Email :adsmin@hongfhsdsfg.com
        </p>
      </div>
      <div className="content">
        <div
          style={{ marginLeft: isOpen ? "250px" : "50px", marginTop: "25px" }}
        >
          <Breadcrumbs />
        </div>
        <main style={{ marginLeft: isOpen ? "250px" : "50px" }}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Sidebar;
