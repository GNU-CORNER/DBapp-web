import React from "react";
import Logo from "../assets/Logo.svg";
import "./login.css";

const Login = ({ history }) => {
  return (
    <div className="Frame">
      <img className="Logo_Login" alt="" src={Logo} />
      <input type="text" name="ID" />
      <br />
      <input type="text" name="PW" />
      <br />
      <button onClick={() => history.push("/")}>로그인</button>
      <br />
    </div>
  );
};

export default Login;
