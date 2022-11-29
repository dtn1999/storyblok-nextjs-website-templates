import React from "react";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

interface Props {
  blok: any;
}

const Page: React.FC<Props> = ({ blok }) => (
  <main {...storyblokEditable(blok)}>
    {blok.body.map((nestedBlok: any) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
);

export default Page;
