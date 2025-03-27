import React from "react";
import DashboardProvider from "./provider";
import "react-toastify/dist/ReactToastify.css";

function DashboardLayout({ children }) {
  return (
    <div>
      <DashboardProvider>{children}</DashboardProvider>
    </div>
  );
}

export default DashboardLayout;
