import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

interface Props {
  children: React.ReactNode;
}
const Layout: React.FC<Props> = ({ children }) => (
  <div>
    <Navigation />
    {children}
    <Footer />
  </div>
);

export default Layout;
