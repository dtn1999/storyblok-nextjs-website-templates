import React from "react";
import ArticleTeaser from "./ArticleTeaser";
import { getStoryblokApi, storyblokEditable } from "@storyblok/react";

import { useState, useEffect } from "react";

interface Props {
  blok: any;
}

const AllArticles: React.FC<Props> = ({ blok }) => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const getArticles = async () => {
      const storyblokApi = getStoryblokApi();
      const data = { stories: [] };
      setArticles((prev) =>
        data.stories.map((article) => {
          // @ts-ignore
          article.content.slug = article.slug;
          return article;
        })
      );
    };
    getArticles();
  }, []);
  return (
    <>
      <p className="text-3xl">{blok.title}</p>
      <div
        className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3   lg:px-24 md:px-16"
        {...storyblokEditable(blok)}
      >
        {articles[0] &&
          articles.map((article) => (
            // @ts-ignore
            <ArticleTeaser article={article.content} key={article.uuid} />
          ))}
      </div>
    </>
  );
};
export default AllArticles;
