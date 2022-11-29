import React from "react";
import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";

interface Props {
  blok: any;
}

const Feature: React.FC<Props> = ({ blok }) => (
  <div className="column feature" {...storyblokEditable(blok)}>
    <div className="p-6">
      <div className="relative w-full mb-8 h-48 md:h-36 rounded-xl">
        <Image
          src={blok.image?.filename}
          className="object-center object-cover"
          fill
          alt="feature"
          objectFit="cover"
        />
      </div>
      <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
        {blok.name}
      </h1>
      <div className="mt-4">
        <a
          href="#"
          className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600"
          title="read more"
        >
          {" "}
          Read More »{" "}
        </a>
      </div>
    </div>
  </div>
);

export default Feature;
