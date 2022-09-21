import * as React from "react";
import type { HeadFC } from "gatsby";
import MainLayout from "../layouts/MainLayout";
import $ from "jquery";
import TagBit from "../components/Index/TagBit";
import PackBit from "../components/Index/PackBit";
import AnthologyBit from "../components/Index/AnthologyBit";
import DigestBit from "../components/Index/DigestBit";
import ContactBit from "../components/Index/ContactBit";
import "../styles/index.scss";

const IndexPage = () => {
  return (
    <MainLayout>
      <TagBit />
      <PackBit />
      <AnthologyBit />
      <DigestBit />
      <ContactBit />
    </MainLayout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <meta charSet="UTF-8" />
    <meta httpEquiv="cache-control" content="no-cache" />
    <meta
      name="description"
      content="a user experience and web development business in the South Texas area"
    />
    <meta
      name="keywords"
      content="design, user experience, developer, react, redux"
    />
    <meta name="author" content="James Hernandez" />
    <meta name="robots" content="index, follow" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>South Tejas Design</title>
  </>
);
