import React from "react";
import { useEffect } from "react";
import { withPrefix } from "gatsby";

const ScrollToTop = (location: any, props) => {
  console.log("scrolltotop location ", location.location);
  useEffect(() => {
    if (!location.location.hash || location.location.hash === "#home") {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return <>{props.children}</>;
};

export default ScrollToTop;
