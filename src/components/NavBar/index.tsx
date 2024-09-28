import React from "react";
import backeryLogo from "../../assets/backeryLogo.jpg";
import "./navBar.css";

const NavBar: React.FC = () => {
  return (
    <div className="topnav">
      <img src={backeryLogo} alt="backery logo" width="150" height="150" />
      <div className="links-container">
        <div className="topnav-links">
          <a className="active" href="/">
            Home
          </a>
          <a href="www.google.pt" target="_blank">
            Contactos
          </a>
          <a href="www.google.pt">About</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
