import * as React from "react";
import Container from "react-bootstrap/Container";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import "./TagBit.scss";

const TagBit = () => {
  const data = useStaticQuery(
    graphql`
      query {
        nameTagImg: file(relativePath: { eq: "name-tag.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              placeholder: BLURRED
              formats: [WEBP]
              height: 400
              transformOptions: { fit: CONTAIN, cropFocus: CENTER }
            )
          }
        }
      }
    `
  );
  return (
    <section className="tagBit">
      <Container className="crate d-flex">
        <div
          className="crate__first d-flex justify-content-center trans-2sec"
          data-sal="slide-down"
          // data-sal-easing="ease"
        >
          <GatsbyImage
            className="nameTagImg"
            image={getImage(data.nameTagImg)}
            alt="Name Tag"
          />
        </div>
        <div className="crate__second d-flex text-light justify-content-center align-items-center">
          <div className="crate__innerText one-rem m-1">
            <h2 className="crate__heading text-center">&#xa1;Bienvendas!</h2>
            <p>
              Hi, I'm James, a Product & Services UX Designer and Front-end
              Engineer in the San Antonio area. I am passionate about solving
              complex app design problems from conception to deployment to
              continuous improvement.
            </p>
            <p>
              During my career, I have contributed to efforts for web projects
              for USAA, Accenture, Outside Analytics, RBFCU, the U.S. Air Force,
              and the U.S. Department of Education.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TagBit;
