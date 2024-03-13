import { Paper } from "@mui/material";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../../src/assets/JFH_Start-Restart-Rise.png";
import "./Header.css";
import Avatar from "@mui/material/Avatar";
import forever from "../../../src/assets/Image 289.png";
const Header = ({ isOpen, toggle = () => {} }) => {
  return (
    <Paper
      className="py-3 d-flex align-items-center nav"
      sx={{
        height: "65px",
        borderRadius: "0px",
        boxShadow: "0px 1px 17px  #ccc",
        position: "fixed",
        top: "0",
        zIndex: "200",
        width: "100%",
      }}
    >
      <div className="top_section">
        <img width={100} src={logo} alt="logo" />
        <div className="bars">
          <GiHamburgerMenu onClick={toggle} />
        </div>
      </div>
      <ul>
        <li>
          <a href="#">Dashboard</a>
        </li>
        <li>
          <a href="#">Packages</a>
        </li>
        <li>
          <a href="#">Events</a>
        </li>
        <li>
          <a href="#">Blogs</a>
        </li>
      </ul>
      <Avatar alt="forever 21" src={forever} sx={{ width: 50, height: 50 }} />
    </Paper>
  );
};

export default Header;
