import React from "react";
import { useEffect } from "react";

const ScrollToTop = (props) => {
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return <>{props.children}</>;
};

export default ScrollToTop;
