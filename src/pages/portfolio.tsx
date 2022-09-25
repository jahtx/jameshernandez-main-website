import * as React from "react";
import Container from "react-bootstrap/Container";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import MainLayout from "../layouts/MainLayout";
import "./portfolio.scss";
import { Link } from "gatsby";
const portfolioPage = () => {
  return (
    <MainLayout>
      <Container className="portfolioPage">
        <Breadcrumb>
          <Breadcrumb.Item className="crumb" href="/">
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Portfolio</Breadcrumb.Item>
        </Breadcrumb>
      </Container>
      <Container className="portfolioPage mt-3 d-flex hyperBoxContainer mb-5">
        <Link to="rbfcu" className="not-underline hyperBox-child">
          <div className="hyperBoxOuter d-flex justify-content-center">
            <div
              className="hyperBox 
                    hyperBox--rbfcu 
                    position-relative
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
          <div className="hyperBoxOuter d-flex justify-content-center">
            <div
              className="hyperBox 
                    hyperBox--usaaGeo
                    position-relative
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
