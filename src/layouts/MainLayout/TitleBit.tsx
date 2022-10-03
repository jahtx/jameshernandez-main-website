import * as React from "react";
import JamesHernandezLogo from "../../assets/james-hernandez-logo.svg";
import JamesHernandezLogoDesktop from "../../assets/james-hernandez-logo-desktop.svg";

import "./TitleBit.scss";

const TitleBit = () => {
  return (
    <header id="home" className="titleBit d-flex justify-content-center">
      <h1 className="m-0 p-0">
        <a
          href="/"
          aira-label="go back to home page"
          className="d-flex justify-content-center m-0 p-0"
        >
          <JamesHernandezLogo />
          <JamesHernandezLogoDesktop />
        </a>
      </h1>
    </header>
  );
};

export default TitleBit;
