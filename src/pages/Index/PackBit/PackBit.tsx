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
    <section className="packBit">
      <h2 className="sr-only">Design Topics</h2>
      <Container>
        <ul className="docket">
          {articles &&
            articles.map((article) => {
              const { articleName, url, lead, image, imgAlt } = article;
              const id = nanoid();
              return (
                <li key={id} className="docketItem">
                  <a href={url}>
                    <h3 className="title">{articleName}</h3>
                    <div className="text-center">
                      <GatsbyImage
                        className="docket__mainImg"
                        image={getImage(renderSwitch(image))}
                        alt={imgAlt}
                      />
                    </div>
                    <div className="docketItem__descrip">{lead}</div>
                  </a>
                </li>
              );
            })}
        </ul>
      </Container>
    </section>
  );
};

export default PackBit;
