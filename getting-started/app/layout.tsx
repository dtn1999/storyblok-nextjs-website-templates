import { StoryblokComponent } from "@storyblok/react";
import { gql } from "graphql-request";
import Footer from "../components/Footer";
import { createStoryClient } from "../lib";
import "../styles/globals.css";
import { LayoutWrapper } from "./LayoutWrapper";

const configQuery = gql`
  query {
    ConfigItems {
      items {
        id
        slug
        content {
          _editable
          _uid
          component
          header_menu
        }
      }
    }
  }
`;

const StoryblokApi = createStoryClient(false);

const fetchConfig = async () => {
  const {
    ConfigItems: {
      items: [config],
    },
  } = await StoryblokApi.request(configQuery);
  return config;
};

export default async function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  const { content } = await fetchConfig();
  return (
    <html lang="en">
      <body>
        <LayoutWrapper blok={content}>{children}</LayoutWrapper>
      </body>
      <Footer />
    </html>
  );
}
