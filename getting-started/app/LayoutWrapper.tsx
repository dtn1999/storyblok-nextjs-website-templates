"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
import Config from "../components/Config";
import HeaderMenu from "../components/HeaderMenu";
import MenuLink from "../components/MenuLink";
import Hero from "../components/Hero";
import React from "react";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  config: Config,
  header_menu: HeaderMenu,
  menu_link: MenuLink,
  hero: Hero,
};

storyblokInit({
  accessToken: String(process.env.NEXT_PUBLIC_STORY_BLOK_ACCESS_TOKEN),
  use: [apiPlugin],
  components,
});

interface Props {
  children: React.ReactNode;
}

export const LayoutWrapper: React.FC<Props> = ({ children }) => {
  return <React.Fragment>{children}</React.Fragment>;
};
