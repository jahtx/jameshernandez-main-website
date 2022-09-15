import * as React from "react";
import type { HeadFC } from "gatsby";
import MainLayout from "../layouts/MainLayout";
import TagBit from "./Index/TagBit";
import PackBit from "./Index/PackBit";
import AnthologyBit from "./Index/AnthologyBit";
import "../styles/index.scss";

const IndexPage = () => {
  return (
    <MainLayout>
      <TagBit />
      <PackBit />
      <AnthologyBit />
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
