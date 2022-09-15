import * as React from "react";
import type { HeadFC } from "gatsby";
import MainLayout from "../layouts/MainLayout/MainLayout";
import TagBit from "./Index/TagBit/TagBit";
import PackBit from "./Index/PackBit/PackBit";

import "../styles/index.scss";

const IndexPage = () => {
  return (
    <MainLayout>
      <TagBit />
      <PackBit />
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
    <meta name="keywords" content="design, user experience" />
    <meta name="author" content="James Hernandez" />
    <meta name="robots" content="index, follow" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>South Tejas Design</title>
  </>
);
