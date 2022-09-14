import * as React from "react";
import Container from "react-bootstrap/Container";
import SouthTejasLogo from "../../assets/south-tejas-logo.svg";

import "./TitleBit.scss";

const TitleBit = () => {
  return (
    <div className="titleBit">
      <Container className="d-flex justify-content-center">
        <SouthTejasLogo />
      </Container>
    </div>
  );
};

export default TitleBit;
