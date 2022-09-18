import * as React from "react";
import JamesHernandezLogo from "../../assets/james-hernandez-logo.svg";
import JamesHernandezLogoDesktop from "../../assets/james-hernandez-logo-desktop.svg";

import "./TitleBit.scss";

const TitleBit = () => {
  return (
    <div id="home" className="titleBit d-flex justify-content-center">
      <h1 className="d-flex justify-content-center m-0">
        <JamesHernandezLogo />
        <JamesHernandezLogoDesktop />
      </h1>
    </div>
  );
};

export default TitleBit;
