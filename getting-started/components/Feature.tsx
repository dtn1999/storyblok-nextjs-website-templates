import React from "react";
import { storyblokEditable } from "@storyblok/react";

interface Props {
  blok: any;
}

const Feature: React.FC<Props> = ({ blok }) => (
  <div className="column feature" {...storyblokEditable(blok)}>
    {blok.name}
  </div>
);

export default Feature;
