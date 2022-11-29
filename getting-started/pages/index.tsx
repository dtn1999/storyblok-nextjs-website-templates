import Head from "next/head";
import styles from "../styles/Home.module.css";

import { NextPage } from "next";
import { createStoryClient } from "../lib";
import { PageQuery } from "../lib/graphql/page";
import { StoryblokComponent, useStoryblokState } from "@storyblok/react";

interface Props {
  story: any;
}

export const HomePage: NextPage<Props> = ({ story }) => {
  const editableStory = useStoryblokState<any>(story);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1 className="bg-red-300">{"My Site"}</h1>
      </header>
      <StoryblokComponent blok={editableStory.content} />
      <main></main>
    </div>
  );
};

export default HomePage;

export async function getStaticProps() {
  // home is the default slug for the homepage in Storyblok
  let slug = "home";

  // load the draft version
  let sbParams = {
    version: "draft", // or 'published'
  };

  const StoryblokApi = createStoryClient(false);

  const {
    PageItems: {
      items: [data],
    },
  } = await StoryblokApi.request(PageQuery, {
    by_slugs: "home",
  });

  console.log("data", data);
  return {
    props: {
      story: {
        ...data,
      },
    },
    revalidate: 3600, // revalidate every hour
  };
}
