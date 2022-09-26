import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import "./usaaGeo.scss";
import Container from "react-bootstrap/Container";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const UsaaGeoHero = () => {
  const data = useStaticQuery(
    graphql`
      query {
        geoLaptop: file(relativePath: { eq: "geo-laptop.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 100
              placeholder: BLURRED
              formats: [WEBP]
              layout: FIXED
              height: 180
              transformOptions: { fit: OUTSIDE, cropFocus: CENTER }
            )
          }
        }
      }
    `
  );
  const geoLaptop = data.geoLaptop;

  return (
    <div className="usaaHeroGradient">
      <div className="usaaHeroBack">
        <Container className="geoLaptop-container">
          {" "}
          <GatsbyImage
            image={getImage(geoLaptop)}
            alt="Previous Employers"
            objectFit="contain"
            className="geoLaptop-image"
          />
        </Container>
      </div>
    </div>
  );
};

export default UsaaGeoHero;
