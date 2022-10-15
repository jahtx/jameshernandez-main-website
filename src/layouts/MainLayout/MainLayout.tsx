import * as React from "react";
import TitleBit from "./TitleBit";
import Nav from "./Nav";
import Footer from "./Footer";

type MainLayoutProps = {
  siteLocation?: string;
  children?: React.ReactNode;
};

const MainLayout = ({
  siteLocation,
  children,
}: MainLayoutProps): JSX.Element => {
  return (
    <>
      <Nav />
      <TitleBit />
      {children}
      <Footer />
    </>
  );
};
export default MainLayout;
