import * as React from "react";
import Container from "react-bootstrap/Container";
import SouthTejasLogo from "../../assets/south-tejas-logo.svg";
import SouthTejasLogoDesktop from "../../assets/south-tejas-logo-desktop.svg";

import "./TitleBit.scss";

const TitleBit = () => {
  return (
    <div className="titleBit d-flex justify-content-center">
      <SouthTejasLogo />
      <SouthTejasLogoDesktop />
    </div>
  );
};

export default TitleBit;
