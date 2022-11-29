import React from "react"
import ArticleTeaser from "./ArticleTeaser";
import { storyblokEditable } from "@storyblok/react";
interface Props {
    blok: any;
}

const PopularArticles: React.FC<Props> = ({ blok }) => {
  return (
    <>
      <div
        className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3   lg:px-24 md:px-16"
        {...storyblokEditable(blok)}
      >
        {blok.articles.map((article:any) => {
          article.content.slug = article.slug;
          return <ArticleTeaser article={article.content} key={article.uuid} />;
        })}
      </div>
    </>
  );
};
export default PopularArticles;
