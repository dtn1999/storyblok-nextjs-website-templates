import React from "react";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Link from "next/link";
import Image from "next/image";

interface Props {
  blok: any;
}

const Config: React.FC<Props> = ({ blok }) => {
  return (
    <div
      className="relative bg-white border-b-2 border-gray-100"
      {...storyblokEditable(blok)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center  py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <div className="h-20 w-auto sm:h-10 hidden sm:block">
                <Image
                  src="https://a.storyblok.com/f/88751/251x53/0d3909fe96/storyblok-primary.png"
                  fill
                  alt="Storyblok"
                />
              </div>
            </Link>
          </div>
          {/** 
           * 
          {blok.header_menu.map((nestedBlok: any) => (
              <StoryblokComponent
              className=""
              blok={nestedBlok}
              key={nestedBlok._uid}
            />
          ))}
        */}
        </div>
      </div>
    </div>
  );
};
export default Config;
