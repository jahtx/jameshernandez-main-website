import * as React from "react";
import Container from "react-bootstrap/Container";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import MainLayout from "../layouts/MainLayout";
import "./portfolio.scss";
import { Link } from "gatsby";
const portfolioPage = () => {
  return (
    <MainLayout>
      <Container fluid="lg">
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Portfolio</Breadcrumb.Item>
        </Breadcrumb>
        {/* <h1 className="m-0 pt-1">Portfolio</h1>
        <hr className="m-0" /> */}
      </Container>
      <Container fluid="lg" className="mt-3 d-flex hyperBoxContainer mb-5">
        <Link to="rbfcu" className="not-underline hyperBox-child">
          <div className="hyperBoxOuter d-flex">
            <div
              className="hyperBox 
                    hyperBox--rbfcu 
                    text-white
                    flex-column
                    d-flex
                    justify-content-center
                    p-3
                    "
            >
              <h2 className="one-pt-1-rem mb-3">
                Randolph-Brooks Federal Credit Union
              </h2>
              <p className="pt-9-rem">
                This effort encompassed a full redesign of the credit union's
                main website as well as a thorough review of existing pages and
                their metrics, discussions of executive inititives and risks,
                and development of a comprehensive templating system.
              </p>
            </div>
          </div>
        </Link>
        <Link to="usaa-geo" className="not-underline hyperBox-child">
          <div className="hyperBoxOuter d-flex">
            <div
              className="hyperBox 
                    hyperBox--usaaGeo
                    text-black
                    flex-column
                    d-flex
                    justify-content-center
                    p-3
                    "
            >
              <h2 className="one-pt-1-rem mb-3">USAA GeoEagle</h2>
              <p className="pt-9-rem">
                In-house development of a web app allowed service
                representatives and executives to find and notify members in the
                path of a storm or other catastrophic event.
              </p>
            </div>
          </div>
        </Link>
      </Container>
    </MainLayout>
  );
};

export default portfolioPage;
