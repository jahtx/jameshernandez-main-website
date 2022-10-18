import * as React from "react";
import TitleBit from "./TitleBit";
import { useLocation } from "@reach/router";
import Nav from "./Nav";
import Footer from "./Footer";

type MainLayoutProps = {
  children?: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps): JSX.Element => {
  const siteLocation = useLocation();
  return (
    <>
      <Nav />
      <TitleBit siteLocation={siteLocation.pathname} />
      {children}
      <Footer />
    </>
  );
};
export default MainLayout;
