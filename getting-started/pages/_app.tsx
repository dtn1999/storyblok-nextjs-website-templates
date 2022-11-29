import "../styles/globals.css";
import type { AppProps } from "next/app";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
import Config from "../components/Config";
import HeaderMenu from "../components/HeaderMenu";
import MenuLink from "../components/MenuLink";
import Hero from "../components/Hero";

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

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
