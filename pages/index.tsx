import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Intro from "../components/Intro";
import Project from "../components/Project";
import Blog from "../components/Blog";
import { parse } from "rss-to-json";
import Feedback from "../components/Feedback";
import { InferGetStaticPropsType } from "next";
import Script from "next/script";

export type Post = {
  link: string;
  title: string;
  description: string;
};

export const getStaticProps = async () => {
  const result = await parse("https://blog.lehuuvietanh.com/rss.xml", {});
  const posts: Post[] = result.items.map((item) => ({
    link: item.link ?? "",
    title: item.title ?? "",
    description: item.description ?? "",
  }));

  return {
    props: {
      posts,
    },
    revalidate: 3600,
  };
};

export default function Home(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <>
      <div className="min-h-[110vh] bg-body bg-bodySize">
        <Header />
        <main className="px-4 my-8">
          <div id="intro">
            <Intro />
          </div>
          <div id="project" className="mt-8">
            <Project />
          </div>
          <div id="blog" className="mt-8">
            <Blog posts={props.posts.slice(0, 3)} />
          </div>
          <div id="feedback" className="mt-8">
            <Feedback />
          </div>
        </main>
        <Footer />
      </div>
      <Script src="https://s.pageclip.co/v1/pageclip.js" />
    </>
  );
}
