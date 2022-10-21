import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import lanyardTag from "../../../images/name-tags/lanyardTag.png";
import steelTag from "../../../images/name-tags/steelTag.png";
import hookTag from "../../../images/name-tags/hookTag.png";
import "./TagBit.scss";

const TagBit = () => {
  const [tagimage, setTagimage] = useState(null);

  React.useEffect(() => {
    const randImages = [lanyardTag, steelTag, hookTag];

    const randomGenerator = () => {
      return Math.floor(Math.random() * randImages.length);
    };
    setTagimage(randImages[randomGenerator()]);
  }, []);

  const data = ImageQuery();
  return (
    <section className="tagBit">
      <Container className="crate d-flex">
        <div
          className="crate__first d-flex justify-content-center trans-2sec"
          data-sal="slide-down"
        >
          <img
            src={tagimage}
            className="nameTagImg"
            alt="James Hernandez Name Tag"
          />
          <GatsbyImage
            className="nameTagImg"
            image={getImage(data.nameTagImg)}
            alt="James Hernandez, User Experience Designer and Front-end Developer"
          />
        </div>
        <div className="crate__second d-flex text-light justify-content-center align-items-center">
          <div className="crate__innerText one-rem m-1">
            <h2 className="crate__heading text-center">Hello!</h2>
            <p>
              I'm James Hernandez, a Product & Services UX Designer and
              Front-end Engineer in the San Antonio area. I am passionate about
              solving complex app design problems from conception to deployment
              to continuous improvement.
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

export const ImageQuery = () => {
  const data = useStaticQuery(
    graphql`
      query {
        nameTagImg: file(relativePath: { eq: "hookTag.png" }) {
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
  return data;
};
