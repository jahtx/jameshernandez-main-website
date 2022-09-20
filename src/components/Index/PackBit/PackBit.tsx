import * as React from "react";
import Container from "react-bootstrap/Container";
import infoData from "./articleListing.json";
import { nanoid } from "nanoid";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import "./PackBit.scss";

type ArticleType = {
  articleName: string;
  url: string;
  image: string;
  imgAlt: string;
  lead: string;
};

const PackBit = () => {
  const data = useStaticQuery(
    graphql`
      query {
        processImg: file(relativePath: { eq: "items/process.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              width: 400
              placeholder: BLURRED
              formats: [WEBP]
              layout: CONSTRAINED
            )
          }
        }
        wireframesImg: file(
          relativePath: { eq: "items/wireframes-yellow.png" }
        ) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              width: 400
              placeholder: BLURRED
              formats: [WEBP]
              layout: CONSTRAINED
            )
          }
        }
        ipadImg: file(relativePath: { eq: "items/ipad.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              width: 400
              placeholder: BLURRED
              formats: [WEBP]
              layout: CONSTRAINED
            )
          }
        }
      }
    `
  );

  const renderSwitch = (param) => {
    switch (param) {
      case "process":
        return data.processImg;
        break;
      case "screens":
        return data.wireframesImg;
        break;
      case "ipad":
        return data.ipadImg;
    }
  };

  const articles: Array<ArticleType> = infoData.articles;
  return (
    <section id="articles" className="packBit">
      <div>
        <h2 className="sr-only">Design Topics</h2>
        <Container>
          <ul className="docket m-0 p-0 d-flex flex-row flex-wrap justify-content-center">
            {articles &&
              articles.map((article) => {
                const { articleName, url, lead, image, imgAlt } = article;
                const id = nanoid();
                return (
                  <li key={id} className="docketItem d-inline-block trans-2sec">
                    <a className="text-dark" href={url}>
                      <h3 className="docketItem__title text-center one-pt-3-rem">
                        {articleName}
                      </h3>
                      <div className="text-center">
                        <GatsbyImage
                          className="docketItem__mainImg"
                          image={getImage(renderSwitch(image))}
                          alt={imgAlt}
                        />
                      </div>
                      <div className="docketItem__descrip pt-9-rem">{lead}</div>
                    </a>
                  </li>
                );
              })}
          </ul>
        </Container>
      </div>
    </section>
  );
};

export default PackBit;
