import * as React from "react";
import TitleBit from "./TitleBit";
import Nav from "./Nav";
import Footer from "./Footer";

type MainLayoutProps = {
  children?: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps): JSX.Element => {
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
