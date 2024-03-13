import React from "react";
import { MdDashboard } from "react-icons/md";
// import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
// import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";
import Avatar from "@mui/material/Avatar";
import hp from "../assets/Image 271.png";
import { Typography } from "@mui/material";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { PiFilesFill } from "react-icons/pi";
import { IoPeopleSharp } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
import { FaBuilding } from "react-icons/fa";
import { FaPersonCircleCheck } from "react-icons/fa6";

// import Header from './Header';
const Sidebar = ({ children, isOpen }) => {
  const menuItem = [
    {
      path: "/dashboard/",
      name: "Dashboard",
      icon: <MdDashboard />,
    },

    {
      path: "/jobs",
      name: "Jobs",
      icon: <PiSuitcaseSimpleBold />,
    },
    {
      path: "/applications",
      name: "Applications",
      icon: <PiFilesFill />,
    },
    {
      path: "/followers",
      name: "Followers",
      icon: <IoPeopleSharp />,
    },
    {
      path: "/myInventory",
      name: "My Inventory",
      icon: <IoPeopleSharp />,
    },
    {
      path: "/companyProfile",
      name: "Company Profile",
      icon: <FaBuilding />,
    },
    {
      path: "/allUsers",
      name: "All Users",
      icon: <ImProfile />,
    },
    {
      path: "/myaccount",
      name: "My Account",
      icon: <FaPersonCircleCheck />,
    },
  ];
  return (
    <div className="containerSidebar">
      <div className="sidebar" style={{ width: isOpen ? "250px" : "50px" }}>
        <div
          style={{
            marginTop: "25px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Avatar alt="Remy Sharp" src={hp} sx={{ width: 40, height: 40 }} />
          <Typography className="fs-24">Hello, </Typography>
        </div>
        <Typography
          sx={{ width: "30px", cursor: "pointer" }}
          className="fw-400 fs-24 text-truncate"
        >
          Hewlett Packard Enterprise
        </Typography>
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
