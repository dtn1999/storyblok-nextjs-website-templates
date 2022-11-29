import "../styles/globals.css";
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

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <h1>just a test </h1>
        {children}
      </body>
    </html>
  );
}
