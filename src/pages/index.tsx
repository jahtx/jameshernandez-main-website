import React, { useState, useEffect } from "react";
import type { HeadFC } from "gatsby";
import $ from "jquery";
import MainLayout from "../layouts/MainLayout";
import TagBit from "../components/Index/TagBit";
import PackBit from "../components/Index/PackBit";
import AnthologyBit from "../components/Index/AnthologyBit";
import DigestBit from "../components/Index/DigestBit";
import ContactBit from "../components/Index/ContactBit";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

import "../styles/index.scss";

const IndexPage = () => {
  let location = typeof window !== "undefined" ? window.location : "";

  useEffect(() => {
    console.log("index location ", location);
  }, []);
  return (
    <MainLayout>
      <ScrollToTop location={location} />
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
    <title>
      James Hernandez &mdash; User Experience Designer, Front-end Engineer
    </title>
  </>
);
