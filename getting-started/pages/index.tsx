import Head from "next/head";
import styles from "../styles/Home.module.css";

import { NextPage } from "next";
import { createStoryClient } from "../lib"

interface Props {
  story: any;
}

export const HomePage: NextPage<Props> = (props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1>{props.story ? props.story.name : "My Site"}</h1>
      </header>

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

  const storyblokApi = createStoryClient(false);

  const data = {};

  return {
    props: {
      story: data ,
      key: data ,
    },
    revalidate: 3600, // revalidate every hour
  };
}
