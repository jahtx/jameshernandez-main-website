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
        <div className="crate__first d-flex justify-content-center">
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
              I’m a User Experience Designer and Front-end developer in South
              Texas. Suspendisse ultrices metus id diam sollicitudin
              sollicitudin. Fusce a fringilla libero, at interdum neque. Ut sit
              amet nibh odio.
            </p>
            <p>
              Mauris feugiat lorem vel velit pharetra hendrerit. Nam urna augue,
              pulvinar eu lorem in, efficitur rutrum nibh. Quisque et libero
              quis nisi suscipit pharetra.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TagBit;
