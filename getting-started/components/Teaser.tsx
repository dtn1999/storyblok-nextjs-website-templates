import React from "react";
import { storyblokEditable } from "@storyblok/react";

interface Props {
  blok: any;
}

const Teaser: React.FC<Props> = ({ blok }) => {
  return <h2 {...storyblokEditable(blok)}>{blok.headline}</h2>;
};

export default Teaser;
