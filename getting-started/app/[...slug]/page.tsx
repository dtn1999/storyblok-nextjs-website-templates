import { NextPage } from "next";
import React from "react";
import { createStoryClient } from "../../lib";
import { PageQuery } from "../../lib/graphql/page";
import { DynamicPageWrapper } from "./wrapper";

interface Props {
  params: any;
}

const StoryblokApi = createStoryClient(false);

export default async function DynamicPage({ params, ...rest }: Props) {
  console.log("params", params);
  const { slug } = params;
  let pageSlug:string = slug === undefined ? "home" : slug[0];
  console.log("pageSlug", pageSlug);

  let sbParams = {
    version: "draft", // or 'published'
  };

  if (!pageSlug.startsWith("blog")) {
    pageSlug = "pages/" + pageSlug;
  }

  const {
    PageItems: {
      items: [data],
    },
  } = await StoryblokApi.request(PageQuery, {
    by_slugs: `${pageSlug}`,
  });

  return <DynamicPageWrapper story={data} />;
}
