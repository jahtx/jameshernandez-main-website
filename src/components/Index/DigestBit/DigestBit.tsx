import * as React from "react";
import Container from "react-bootstrap/Container";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery, Link } from "gatsby";
import "./DigestBit.scss";

const DigestBit = () => {
  const data = useStaticQuery(
    graphql`
      query {
        workiconsImg: file(
          relativePath: { eq: "work-icons-assortment-long.png" }
        ) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              placeholder: BLURRED
              formats: [WEBP]
              height: 250
              transformOptions: { fit: CONTAIN, cropFocus: CENTER }
            )
          }
        }
      }
    `
  );
  return (
    <div id="cv" className="digestBit text-light">
      <div className="trans-2sec" data-sal="fade" data-sal-easing="ease">
        <h2 className="text-center t-block pt-3 one-pt-8-rem">Résumé</h2>
        <Container>
          <div className="parcel d-flex pb-3">
            <div className="parcel__first d-flex align-items-center justify-content-center">
              <GatsbyImage
                image={getImage(data.workiconsImg)}
                alt="Logos of places that I have worked"
              />
            </div>
            <div className="parcel__second">
              <p>
                I have created interfaces and developed applications for
                multiple industries including banking, military, and education.
                I enjoy improving usability for customers and internal users and
                applying industry best practices through the entire design and
                development process.
              </p>

              <Link className="float-end linkText-white" to="/resume">
                Read More
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default DigestBit;
