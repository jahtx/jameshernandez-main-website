import * as React from "react";
import Container from "react-bootstrap/Container";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import "./DigestBit.scss";

const DigestBit = () => {
  const data = useStaticQuery(
    graphql`
      query {
        workiconsImg: file(relativePath: { eq: "work-icons-assortment.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              placeholder: BLURRED
              formats: [WEBP]
              height: 225
              transformOptions: { fit: CONTAIN, cropFocus: CENTER }
            )
          }
        }
      }
    `
  );
  return (
    <div className="digestBit text-light">
      <h2 className="text-center t-block pt-3 one-pt-8-rem">CV</h2>
      <Container>
        <div className="parcel d-flex">
          <div
            className="parcel__first d-flex align-items-center trans-right justify-content-center"
            data-sal="slide-right"
            data-sal-easing="ease"
          >
            <GatsbyImage
              image={getImage(data.workiconsImg)}
              alt="Logos of places that I have worked"
            />
          </div>
          <div className="parcel__second">
            <p>
              Aenean gravida, ligula eget ultricies varius, libero nunc
              tincidunt eros, id hendrerit tortor diam at leo. Donec iaculis
              aliquet odio at interdum. Pellentesque lobortis orci felis, nec
              placerat ante auctor sit amet. Morbi feugiat diam at magna
              vestibulum, vitae condimentum est auctor.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
              facilisis sem, dapibus volutpat nibh. Donec id odio arcu. Nam
              ornare gravida rutrum. Nam vel molestie quam.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DigestBit;
