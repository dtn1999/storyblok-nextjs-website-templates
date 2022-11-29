import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";
import { PageItem } from "../types/graphql";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { createStoryClient } from "../lib";
import { PageQuery } from "../lib/graphql/page";
import { gql } from "graphql-request";
import Layout from "../components/Layout";

const StoryblokApi = createStoryClient(false);

interface Props {
  story: any;
  preview: boolean;
}

export const DynamicPage: NextPage<Props> = ({ story, preview }) => {
  const editableContent = useStoryblokState<any>(story as any, {}, preview);

  return (
    <div className={styles.container}>
      <Head>
        <title>{story ? story.name : "My Site"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <StoryblokComponent blok={editableContent.content} />
      </Layout>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params, locale = "en", preview } = context;
  const { slug } = params as any;
  const pageSlug = slug === undefined ? "home" : slug[0];
  console.log("pageSlug", pageSlug);

  let sbParams = {
    version: "draft", // or 'published'
  };

  const {
    PageItems: {
      items: [data],
    },
  } = await StoryblokApi.request(PageQuery, {
    by_slugs: `pages/${pageSlug}`,
  });

  return {
    props: {
      story: {
        ...data,
      },
      preview,
    },
    revalidate: 3600,
  };
};

const query = gql`
  query {
    PageItems {
      items {
        id
        slug
      }
    }
  }
`;

export const getStaticPaths: GetStaticPaths = async (context) => {
  const {
    PageItems: { items },
  } = await StoryblokApi.request(query);

  const paths: any = [];
  items.forEach((slug: string) => {
    paths.push({
      params: {
        slug: slug === "home" ? [] : [slug],
      },
    });
  });
  console.log("paths", paths);
  return {
    paths: [
      {
        params: {
          slug: [],
        },
      },
      {
        params: {
          slug: ["about"],
        },
      },
    ],
    fallback: false,
  };
};

export default DynamicPage;
