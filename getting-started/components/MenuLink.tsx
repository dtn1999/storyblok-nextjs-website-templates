import React from "react";
import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";

interface Props {
  blok: any;
}
const MenuLink: React.FC<Props> = ({ blok }) => (
  <Link
    className="text-base font-medium text-gray-500 hover:text-gray-900"
    href={blok.link.cached_url}
    {...storyblokEditable(blok)}
  >
    {blok.name}
  </Link>
);
export default MenuLink;
