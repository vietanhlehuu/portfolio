import React from "react";
import Section from "./Section";
import AmazingTest from "../public/images/projects/amazingtest.png";
import Blog from "../public/images/projects/blog.png";
import BaseProject from "../public/images/projects/baseproject.png";
import Ball from "../public/images/projects/ball.png";
import ImgContainer from "./ImgContainer";
import Image from "next/image";
import { BeakerIcon } from "@heroicons/react/solid";

const projects = [
  {
    title: "AmazingTest",
    description:
      "Đây là dự án giáo dục, một nền tảng tạo và làm bài kiểm tra. Dự án này do team mình thực hiện trong thời gian khá dài, sẽ phát triển hơn nữa trong thời gian tới.",
    link: "https://amazingtest.com",
    image: AmazingTest,
    github: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    title: "Blog",
    description:
      "Đây là một trang blog cá nhân của mình, nơi mình chia sẻ những tâm tư và tình cảm dành cho kiến thức kỹ thuật mình lượm lặt khắp internet.",
    link: "https://blog.lehuuvietanh.com",
    image: Blog,
    github: "https://github.com/vietanhlehuu/blog",
  },
  {
    title: "Base Project",
    description:
      "Đây là một dự án mình dùng để thử nghiệm những công nghệ mình thấy thích.",
    image: BaseProject,
    github: "https://github.com/vietanhlehuu/base-project",
  },
  {
    title: "13 viên bi",
    description:
      "Tình cờ một ngày đẹp trời, mình lướt Facebook và thấy một câu hỏi thú vị. Sau một ngày mới giải ra, mình quyết định làm một trang để trình bày cách giải của mình một cách trực quan hơn.",
    link: "https://lehuuvietanh.com/ball",
    image: Ball,
    github: "https://github.com/vietanhlehuu/bai-toan-13-vien-bi",
  },
  {
    title: "Algorithms",
    description:
      "Dù công việc không phải đụng thuật toán nhiều, nhưng thỉnh thoảng vẫn gặp vài bài toán mình muốn suy ngẫm, thế nên mình sẽ giải và để vào đây.",
    github: "https://github.com/vietanhlehuu/algorithms",
  },
  {
    title: "Portfolio",
    description: "Vâng, là trang này đây ạ.",
    link: "/",
    github: "https://github.com/vietanhlehuu/portfolio",
  },
];
const Container: React.FC = ({ children }) => {
  return <div className="grid gap-4">{children}</div>;
};

const Project: React.FC = () => {
  return (
    <Section>
      <div className="p-6">
        <h2 className="text-4xl text-center font-title">
          Dự án <small className="text-[12px]">chơi chơi</small>
        </h2>
        <div className="grid gap-[30px] mt-6 md:px-10">
          {projects.map((p, idx) => (
            <React.Fragment key={p.title}>
              {idx !== 0 && (
                <span className="flex w-6 mx-auto mt-6">
                  <BeakerIcon />
                </span>
              )}
              <Container>
                <h2 className="text-2xl font-bold">{p.title}</h2>
                <p>{p.description}</p>
                <div className="flex gap-4">
                  {p.link && (
                    <a
                      href={p.link}
                      className="btn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="px-4 py-2">Link dự án</div>
                    </a>
                  )}
                  <a
                    href={p.github}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="px-4 py-2">Github</div>
                  </a>
                </div>
                {p.image && (
                  <ImgContainer>
                    <Image src={p.image} alt="" placeholder="blur" />
                  </ImgContainer>
                )}
              </Container>
            </React.Fragment>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Project;
