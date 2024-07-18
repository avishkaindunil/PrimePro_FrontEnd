import React from 'react';
import {Outlet} from "react-router-dom";
import Navbar from "./Navbar"

const MainLayout = () => {
    return (
      <>
        <div className="z-20 navbar">
          <Navbar />
        </div>
        <div className="content">
          <Outlet />
        </div>
      </>
    );
  };
  
  export default MainLayout;