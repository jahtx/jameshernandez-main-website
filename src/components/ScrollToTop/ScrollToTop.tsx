import React from "react";
import { useEffect } from "react";
import { withPrefix } from "gatsby";

const ScrollToTop = (location: any, props) => {
  useEffect(() => {
    if (
      !location.location.hash ||
      location.location.pathname === withPrefix("/#home")
    ) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return <>{props.children}</>;
};

export default ScrollToTop;
