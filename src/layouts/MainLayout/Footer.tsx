import * as React from "react";
import { graphql, useStaticQuery, HeadFC } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import config from "../../data/siteConfig";
import "./Footer.scss";

const Footer = () => {
  const data = ImageQuery();
  const { copyright } = config;
  if (!copyright) {
    return null;
  }
  return (
    <footer className="footer text-center pt-7-rem pt-3 pb-3">
      <div className="text-center mt-5 mb-3">
        <a
          href="https://www.linkedin.com/in/jameshernandez/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GatsbyImage
            className="contactIcon"
            image={getImage(data.linkedinLogo)}
            alt="LinkedIn Profile"
          />
        </a>
        <a
          href="https://twitter.com/jah_uxdev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GatsbyImage
            className="contactIcon"
            image={getImage(data.twitterLogo)}
            alt="Twitter Profile"
          />
        </a>
        <a
          href="https://github.com/jahtx"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GatsbyImage
            className="contactIcon"
            image={getImage(data.githubLogo)}
            alt="Github Profile"
          />
        </a>
      </div>
      <span className="footer__text">{copyright}</span>
    </footer>
  );
};

export default Footer;

export const ImageQuery = () => {
  const data = useStaticQuery(
    graphql`
      query {
        githubLogo: file(
          relativePath: { eq: "contact-logos/github-logo.png" }
        ) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              placeholder: BLURRED
              formats: [WEBP]
              height: 25
              transformOptions: { fit: CONTAIN, cropFocus: CENTER }
            )
          }
        }
        linkedinLogo: file(
          relativePath: { eq: "contact-logos/linkedin-logo.png" }
        ) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              placeholder: BLURRED
              formats: [WEBP]
              height: 25
              transformOptions: { fit: CONTAIN, cropFocus: CENTER }
            )
          }
        }
        twitterLogo: file(
          relativePath: { eq: "contact-logos/twitter-logo.png" }
        ) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              placeholder: BLURRED
              formats: [WEBP]
              height: 25
              transformOptions: { fit: CONTAIN, cropFocus: CENTER }
            )
          }
        }
      }
    `
  );
  return data;
};
