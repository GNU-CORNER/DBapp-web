import React, { useState } from "react";
import "./splash.css";
import Logo from "../assets/Logo.svg";

const Splash = () => {
  const [test, setTest] = useState(true); //home 의 isLogin과 연동할 것
  return (
    <div className="Frame">
      <div style={{ textAlign: "center" }}>
        <img
          className={test ? "LogoforHome" : "LogoforLogin"}
          alt=""
          src={Logo}
        />
      </div>
    </div>
  );
};

export default Splash;
