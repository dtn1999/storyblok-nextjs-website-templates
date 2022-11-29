import React from "react";
import Footer from "./Footer";
import Config from "./Config";

interface Props {
  story: any;
  children: React.ReactNode;
}
const Layout: React.FC<Props> = ({ children, story }) => (
  <React.Fragment>
    {children}
    <Footer />
  </React.Fragment>
);

export default Layout;
