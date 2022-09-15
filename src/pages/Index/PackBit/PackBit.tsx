import * as React from "react";
import Container from "react-bootstrap/Container";
import infoData from "./articleListing.json";
import { nanoid } from "nanoid";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

type ArticleType = {
  articleName: string;
  url: string;
  lead: string;
};

const PackBit = () => {
  const articles: Array<ArticleType> = infoData.articles;
  return (
    <section className="packBit">
      <Container>
        <ul className="docket">
          {articles &&
            articles.map((article) => {
              const { articleName, url, lead } = article;
              const id = nanoid();
              return (
                <li className="docketItem">
                  <a href={url}>
                    <h3 className="title">{articleName}</h3>
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
