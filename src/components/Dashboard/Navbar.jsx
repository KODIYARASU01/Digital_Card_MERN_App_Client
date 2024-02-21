import React, { useState, useEffect } from "react";
import "./Navbar.scss";

import logo from "/src/assets/LOGO.png";
import avator from "/src/assets/profile.png";
import axios from "axios";

const Navbar = () => {
  return (
    <>
      <div className="admin_nav">
        <div className="left">
          <img src={logo} alt="logo" />
          <h4>Digital Card</h4>
        </div>

        <div className="right">
          <h4 className="user_name">Hello , username</h4>
          <img src={avator} alt="avatar" id="profile_image" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
