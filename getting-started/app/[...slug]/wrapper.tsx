"use client";
import { StoryblokComponent, useStoryblokState } from "@storyblok/react";
import React from "react";

interface Props {
  story: any;
}
export const DynamicPageWrapper: React.FC<Props> = ({ story }) => {
  const editableContent = useStoryblokState<any>(story, {
    resolveRelations: ["popular-articles.articles"],
  });
  return (
    <React.Fragment>
      <StoryblokComponent blok={editableContent.content} />
    </React.Fragment>
  );
};
