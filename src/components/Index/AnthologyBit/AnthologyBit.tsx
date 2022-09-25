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
                Examples of past work and ongoing projects. I like to mettle out
                the design in Sketch first for initial brainstorming sessions
                then create HTML/CSS wireframes in either React or Angular.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
                facilisis sem, dapibus volutpat nibh. Donec id odio arcu. Nam
                ornare gravida rutrum. Nam vel molestie quam.
              </p>
              <Link
                to="/portfolio"
                className="btn btn btn-light w-100"
                role="button"
              >
                Read More
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default AnthologyBit;
