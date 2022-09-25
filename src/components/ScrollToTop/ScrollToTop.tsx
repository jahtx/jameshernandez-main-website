import React from "react";
import { useEffect } from "react";

const ScrollToTop = (location: any, props) => {
  useEffect(() => {
    if (!location.location.hash || location.location.hash === "#home") {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return <>{props.children}</>;
};

export default ScrollToTop;
