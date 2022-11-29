import React from "react";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

interface Props {
  blok: any;
}

const Grid: React.FC<Props> = ({ blok }) => {
  return (
    <div className="grid grid-cols-3" {...storyblokEditable(blok)}>
      {blok.columns.map((nestedBlok: any) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default Grid;
