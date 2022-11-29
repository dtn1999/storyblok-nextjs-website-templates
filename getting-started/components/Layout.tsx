import React from "react";
import Footer from "./Footer";
import Config from "./Config";

interface Props {
  story: any;
  children: React.ReactNode;
}
const Layout: React.FC<Props> = ({ children, story }) => (
  <div>
    <Config blok={story.content} />
    {children}
    <Footer />
  </div>
);

export default Layout;
