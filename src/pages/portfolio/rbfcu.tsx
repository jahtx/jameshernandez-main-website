import React from "react";
import { graphql, useStaticQuery, HeadFC } from "gatsby";
import { nanoid } from "nanoid";
import { RbfcuImageQuery } from "./RbImageQuery";
import Container from "react-bootstrap/Container";
import { getImage } from "gatsby-plugin-image";
import MainLayout from "../../layouts/MainLayout";
import Composite from "../../components/Composite/Composite";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { default as BoxesBackground } from "../../components/Backgrounds/Boxes/Boxes";
import "./rbfcu.scss";

const PortfolioPage = () => {
  const data = RbfcuImageQuery();

  const portItems = [
    {
      id: nanoid(),
      compHeader: "Home Page",
      imageFileMobile: data.mainMobile,
      imageFileDesktop: data.mainDesktop,
    },
    {
      id: nanoid(),
      compHeader: "Mortgages",
      imageFileMobile: data.mortgageMobile,
      imageFileDesktop: data.mortgageDesktop,
    },
    {
      id: nanoid(),
      compHeader: "Checking",
      imageFileMobile: data.checkingMobile,
      imageFileDesktop: data.checkingDesktop,
    },
    {
      id: nanoid(),
      compHeader: "Auto Loans",
      imageFileMobile: data.autoLoansMobile,
      imageFileDesktop: data.autoLoansDesktop,
    },
  ];

  return (
    <MainLayout>
      <BoxesBackground>
        <Container fluid="lg">
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/portfolio">Portfolio</Breadcrumb.Item>
            <Breadcrumb.Item active>RBFCU</Breadcrumb.Item>
          </Breadcrumb>
          <h1 className="m-0 pt-2">Randolph-Brooks Federal Credit Union</h1>
          <hr className="m-0" />
          <p className="mt-4 pt-9-rem">
            Randolph-Brooks Federal Credit Union is an accredited financial
            institution headquartered in Live Oak, Texas and is the second
            largest credit union in Texas.
          </p>
          <p className="pt-9-rem">
            Their website had long been overdue for a refreshed design and
            needed to meet the expectations of a younger and more
            technologically demanding customer base.
          </p>
          <p className="pt-9-rem">
            Challenges included accounting for over a thousand disparate pages
            and content, accessibility, and incorporating a new content
            management system. Over a period of nine months, James was
            instrumental in prioritizing product and services content,
            developing user research, and leading the front-end development
            effort.
          </p>
        </Container>
        <section className="mb-5">
          {portItems &&
            portItems.map((item) => {
              const { id, compHeader, imageFileMobile, imageFileDesktop } =
                item;
              return (
                <div className="container-lg mt-3" key={id}>
                  <h3 className="text-center one-pt-1-rem all-caps mt-5 mb-0">
                    {compHeader}
                  </h3>
                  <div className="spiralBk d-flex justify-content-center">
                    <Composite
                      title={compHeader}
                      imageInfo={getImage(imageFileMobile)}
                      isMobile
                    />
                    <Composite
                      title={compHeader}
                      imageInfo={getImage(imageFileDesktop)}
                    />
                  </div>
                </div>
              );
            })}
        </section>
      </BoxesBackground>
    </MainLayout>
  );
};

export default PortfolioPage;

export const Head: HeadFC = () => (
  <>
    <meta charSet="UTF-8" />
    <meta httpEquiv="cache-control" content="no-cache" />
    <meta
      name="description"
      content="a user experience and web development business in the South Texas area"
    />
    <meta
      name="keywords"
      content="design, user experience, developer, react, redux"
    />
    <meta name="author" content="James Hernandez" />
    <meta name="robots" content="index, follow" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>
      James Hernandez &mdash; User Experience Designer, Front-end Engineer
    </title>
  </>
);
