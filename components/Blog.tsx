import React, { useEffect } from "react";
import { Post } from "../pages";
import Section from "./Section";
import { BeakerIcon } from "@heroicons/react/solid";
import { ArrowRightIcon } from "@heroicons/react/outline";

type Props = {
  posts: Post[];
};

const Blog: React.FC<Props> = ({ posts }) => {
  return (
    <Section>
      <div className="p-6">
        <h1 className="text-4xl text-center font-title">Blog</h1>
        <div className="flex flex-col gap-6 mt-6">
          {posts.map((post, idx) => (
            <React.Fragment key={post.link}>
              {idx !== 0 && (
                <span className="flex w-6 mx-auto">
                  <BeakerIcon />
                </span>
              )}
              <article key={post.link} className="flex flex-col gap-2">
                <h2 className="font-bold">{post.title}</h2>
                <p>{post.description}</p>
                <a
                  className="mr-auto btn"
                  href={post.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="px-4 py-2">Đọc tiếp...</div>
                </a>
              </article>
            </React.Fragment>
          ))}
        </div>
        <span className="flex w-6 mx-auto mt-6">
          <BeakerIcon />
        </span>
        <a
          href="https://blog.lehuuvietanh.com"
          target="_blank"
          className="mt-10 btn"
          rel="noreferrer"
        >
          <div className="flex items-center gap-4 px-4 py-2">
            <span className="w-10">
              <ArrowRightIcon />
            </span>
            <span>Tất cả bài đăng</span>
            <span className="w-20">
              <ArrowRightIcon />
            </span>
          </div>
        </a>
      </div>
    </Section>
  );
};

export default Blog;
