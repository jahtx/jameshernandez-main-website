import * as React from "react";
import Container from "react-bootstrap/Container";
import "./AnthologyBit.scss";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery, Link } from "gatsby";

const AnthologyBit = () => {
  const data = useStaticQuery(
    graphql`
      query {
        websitesImg: file(relativePath: { eq: "portfolio-screens.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              placeholder: BLURRED
              formats: [WEBP]
              height: 150
              transformOptions: { fit: CONTAIN, cropFocus: CENTER }
            )
          }
        }
      }
    `
  );
  return (
    <div id="portfolio" className="anthologyBit text-light">
      <div className="trans-2sec" data-sal="fade" data-sal-easing="ease">
        <h2 className="text-center t-block pt-3 one-pt-8-rem">Portfolio</h2>
        <Container>
          <div className="pack d-flex">
            <div className="pack__first d-flex align-items-center justify-content-center">
              <GatsbyImage
                className="nameTagImg"
                image={getImage(data.websitesImg)}
                alt="Name Tag"
              />
            </div>
            <div className="pack__second p-4">
              <p>
                These are examples of past work and some ongoing projects.
                Ultimately I will be including a wide variety of collateral
                materials, including wireframes, research examples, and finished
                prototypes.
              </p>
              <p>
                All of these are created in Sketch, Photoshop, and Illustrator.
              </p>

              <Link className="float-end linkText-white" to="/portfolio">
                Explore
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default AnthologyBit;
