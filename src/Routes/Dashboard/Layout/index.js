import React from "react";
import { Outlet} from "react-router-dom"
import SideNav from "./SideNav";

function Layout() {
  return(
  <>
      <SideNav />
      <Outlet />
  </>
  )
}

export default Layout;
