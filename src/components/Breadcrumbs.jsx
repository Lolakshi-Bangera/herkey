import React from "react";
import { useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const crumbs = location.pathname.split("/").filter((crumb) => crumb !== "");
  return (
    <div style={{ paddingTop: "15px" }}>
      <h6 style={{ color: "#999999" }}>
        &nbsp;&nbsp; Dashboard&nbsp;&nbsp;|&nbsp;&nbsp;
        <span style={{ color: "#2680EB" }}>
          {crumbs[0]?.charAt(0)?.toLocaleUpperCase() + crumbs[0]?.slice(1)}
        </span>
      </h6>
    </div>
  );
};

export default Breadcrumbs;
