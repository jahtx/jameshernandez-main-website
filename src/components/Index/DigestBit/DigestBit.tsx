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
        <h2 className="text-center t-block pt-3 one-pt-8-rem">CV</h2>
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

              <Link
                to="/resume"
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

export default DigestBit;
