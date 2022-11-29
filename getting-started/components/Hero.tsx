import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import React from "react";
interface Props {
  blok: any;
}
const Hero: React.FC<Props> = ({ blok }) => {
  return (
    <div
      {...storyblokEditable(blok)}
      className={`min-h-[500px]
    relative
    flex
    items-end
    justify-center
    p-9
    my-6
    rounded-[5px]
    overflow-hidden ${
      blok.layout === "constrained" ? "container mx-auto" : ""
    }`}
    >
      <div className="relative z-10 text-center">
        <h1 className="text-6xl text-white font-bold mb-3">{blok.headline}</h1>
        <h2 className="text-4xl text-white font-light">{blok.subheadline}</h2>
      </div>
      <div className="absolute top-0 left-0 z-0 w-full h-full object-cover">
        <Image
          src={blok.background_image.filename}
          alt={blok.background_image.alt}
          fill
        />
      </div>
    </div>
  );
};

export default Hero;
