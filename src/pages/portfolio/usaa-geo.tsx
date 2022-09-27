import React from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Container from "react-bootstrap/Container";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { default as UsaaHeroBackground } from "../../components/Backgrounds/usaaGeo/usaaGeo";
import "./usaa-geo.scss";

const USAAGeo = () => {
  return (
    <MainLayout>
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/portfolio">Portfolio</Breadcrumb.Item>
          <Breadcrumb.Item active>USAA GeoEagle</Breadcrumb.Item>
        </Breadcrumb>
      </Container>

      <Container>
        <h1 className="m-0 pt-2">USAA GeoEagle</h1>
        <hr className="m-0" />
      </Container>
      <UsaaHeroBackground></UsaaHeroBackground>
      <Container>
        <article className="pt-9-rem mb-5">
          <h2 className="one-pt-1-rem font-weight-bold mt-4">My Work</h2>
          <p>
            When appropriating a “starter” stack from a company like ESRI, some
            features are built-in but require customizations and comfort with
            the coding best practices dictated by a new framework. My
            contributions included:
          </p>
          <ul>
            <li>
              Readable, maintainable and modular JavaScript. This was essential
              for an effort that likely would find its way to different
              development team over a period of years.
            </li>
            <li>
              Easy, intuitive design. Developing a comprehensive help
              documentation and retrofitting special user experience ehancements
              outside of ArcGIS and Dojo defaults.
            </li>
          </ul>
          <h2 className="one-pt-1-rem font-weight-bold">Synopsis</h2>
          <p>
            When you have a nationwide customer base of millions of homeowner’s
            insurance policies you can sometimes get only a myopic view from
            charts and spreadsheets. This project sought to do three things:
          </p>
          <ul>
            <li>
              Allow MSRs (Member Service Representatives) to select areas on a
              map and retreive all relevant homeowner policies.
            </li>
            <li>
              Allow MSRs and executives to overlay weather, fire, and other maps
              and measure proximity to potentially catastrophic events.
            </li>
            <li>
              Allow MSRs to export emails and contact information for aggregate
              warnings or instructions to policy owners.
            </li>
          </ul>
          <h2 className="one-pt-1-rem font-weight-bold">Technology Stack</h2>
          <p>
            We utilized services from ESRI, a company that builds and maintains
            a mapping and spatial analytics product called ArcGIS. Through their
            licensing, we were able to house a replica of our own confidential
            data on an in-house server.
          </p>
          <p>
            The front-end part of the stack is built on Dojo Toolkit, an open-
            source modular JavaScript library. The stack incorporates modern
            ECMAScript features such as client-side storage for better memory
            management of large data-sets.
          </p>
        </article>
      </Container>
    </MainLayout>
  );
};
export default USAAGeo;
