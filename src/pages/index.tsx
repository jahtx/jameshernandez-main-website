import React from "react";
import type { HeadFC } from "gatsby";
import { graphql, PageProps } from "gatsby";
import { useLocation } from "@reach/router";
import MainLayout from "../layouts/MainLayout";
import TagBit from "../components/Index/TagBit";
import PackBit from "../components/Index/PackBit";
import AnthologyBit from "../components/Index/AnthologyBit";
import DigestBit from "../components/Index/DigestBit";
import ContactBit from "../components/Index/ContactBit";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import { DataProps } from "../data/types/GenTypes";
import "../styles/index.scss";

const IndexPage = () => {
  const siteLocation = useLocation();
 console.log(siteLocation);
  return (
    <>
      <ScrollToTop location={siteLocation} />
      <MainLayout>
        <TagBit />
        <PackBit />
        <AnthologyBit />
        <DigestBit />
        <ContactBit />
      </MainLayout>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = ({ data: { site } }: PageProps<DataProps>) => (
  <>
    <meta charSet="UTF-8" />
    <meta httpEquiv="cache-control" content="no-cache" />
    <meta name="description" content={site.siteMetadata.description} />
    <meta name="keywords" content={site.siteMetadata.keywords} />
    <meta name="author" content={site.siteMetadata.author} />
    <meta name="robots" content="index, follow" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{site.siteMetadata.title}</title>
  </>
);

export const query = graphql`
  {
    site {
      siteMetadata {
        title
        siteUrl
        keywords
        author
        description
      }
    }
  }
`;
