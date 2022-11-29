import React from "react";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

interface Props {
  blok: any;
}

const HeaderMenu: React.FC<Props> = ({ blok }) => (
  <div
    className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 space-x-10"
    {...storyblokEditable(blok)}
  >
    {blok.links.map((nestedBlok: any) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </div>
);

export default HeaderMenu;
