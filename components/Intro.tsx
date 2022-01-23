import React from "react";
import Section from "./Section";
import Image from "next/image";
import HeroImg from "../public/images/hero.jpeg";
import Avt from "../public/images/avt.jpeg";
import ImgContainer from "./ImgContainer";

const stacks = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "ReactJS",
  "NextJS",
  "NodeJS",
  "GraphQL",
  "Apollo",
  "Redux",
  "Git",
  "Bla bla",
];

const Intro: React.FC = () => {
  return (
    <Section>
      <div className="p-6">
        <ImgContainer className="max-w-[400px]">
          <Image alt="lehuuvietanh.com" src={HeroImg} placeholder="blur" />
        </ImgContainer>
        <p className="mt-6 text-center">
          Welcome bạn đến với chuyến tàu của Việt Anh.
        </p>
        <p className="mt-6">
          Lỡ mua cái tên miền rồi nên phải làm trang này để khoe vài thứ lên.
        </p>
        <ImgContainer className="max-w-[600px]">
          <Image alt="lehuuvietanh.com" src={Avt} placeholder="blur" />
        </ImgContainer>
        <p className="mt-6">
          Vâng, đó mà mình. Mình là Lê Hữu Việt Anh. Nếu nói cho oách thì là một
          kỹ sư phần mềm. Còn bình thường ai hỏi thì bảo cháu làm lặt vặt bên
          máy tính.
        </p>
        <p className="mt-10">[Chỗ này để chèn câu châm ngôn yêu thích]</p>
        <p className="mt-10">
          [Chỗ này để chèn working principles để làm freelancer]
        </p>
        <p className="mt-10">
          [Chỗ này để chèn experienced domains để chứng tỏ mình làm nhiều sản
          phẩm]
        </p>
        <h2 className="mt-10 text-4xl font-title">Technical stacks</h2>
        <div className="flex flex-wrap gap-4 mt-6">
          {stacks.map((item) => (
            <div
              key={item}
              className="flex items-center px-2 py-2 border-4 border-black rounded-md"
            >
              <span className="w-4 h-4 mr-2 border-4 border-black rounded-full" />
              <span className="leading-[1]">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Intro;
