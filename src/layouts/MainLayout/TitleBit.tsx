import * as React from "react";
import Container from "react-bootstrap/Container";
import SouthTejasLogo from "../../assets/south-tejas-logo.svg";
import SouthTejasLogoDesktop from "../../assets/south-tejas-logo-desktop.svg";

import "./TitleBit.scss";

const TitleBit = () => {
  return (
    <div className="titleBit d-flex justify-content-center">
      <h1 className="d-flex justify-content-center m-0">
        <SouthTejasLogo />
        <SouthTejasLogoDesktop />
      </h1>
    </div>
  );
};

export default TitleBit;
