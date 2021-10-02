import React, { useState } from "react";
import Logo_Home from "../assets/Logo_Home.svg";
import SearchIcon from "../assets/SearchIcon.svg";
import MoreIcon from "../assets/more.svg";
import "./home.css";

const Home = ({ history }) => {
  const [isLogin, setLogin] = useState(true); //나중에 default false 할 것

  // 로그인을 했다면, /login 으로 이동
  if (isLogin === false) {
    history.push("/login");
  }

  return (
    <div className="HomeFrame">
      <img
        style={{ position: "absolute", right: "15px", top: "15px" }}
        alt=""
        src={MoreIcon}
      />
      <img className="Logo_Home" alt="" src={Logo_Home} />
      <div style={{ position: "relative", marginTop: "10px" }}>
        <input type="text" className="SearchBar" />
        <img
          className="SearchIcon"
          src={SearchIcon}
          onClick={() => alert("헬로")}
        />
      </div>
      <br />
      <div className="Category">
        <h3>기초설계 프로젝트 PBL {">"}</h3>
      </div>
    </div>
  );
};

export default Home;
