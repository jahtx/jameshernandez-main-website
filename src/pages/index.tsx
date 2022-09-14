import * as React from "react";
import type { HeadFC } from "gatsby";

import "../styles/index.scss";

const IndexPage = () => {
  return <div>here</div>;
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <meta charSet="UTF-8" />
    <meta httpEquiv="cache-control" content="no-cache" />
    <meta name="description" content="a resource for economic discussion" />
    <meta name="keywords" content="economics, stock market, federal reserve" />
    <meta name="author" content="James Hernandez" />
    <meta name="robots" content="index, follow" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Covidnomics</title>
  </>
);
