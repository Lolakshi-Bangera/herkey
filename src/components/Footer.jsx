import { Paper } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Paper
      className="py-3 d-flex align-items-center nav"
      sx={{
        height: "65px",
        borderRadius: "0px",
        boxShadow: "0px 1px 17px  #ccc",
        position: "fixed",
        bottom: "0",
        right: "0px",
        zIndex: "200",
        width: "83.5%",
      }}
    >
      <span>&nbsp;&nbsp; 2019 &nbsp;@&nbsp;jobsforher </span>
      <ul>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#">FAQ's</a>
        </li>
      </ul>
    </Paper>
  );
};

export default Footer;
