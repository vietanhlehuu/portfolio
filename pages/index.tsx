/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ArrowDownIcon, ArrowRightIcon } from "@heroicons/react/solid";
import NavItem from "../components/NavItem";
import Section from "../components/Section";

export default function Home() {
  return (
    <div className="min-h-[110vh] bg-body bg-bodySize">
      <header className="mb-8">
        <div className="grid items-center h-20 gap-10 px-6 py-4 bg-white border-b-4 border-black">
          <div className="w-10 h-10 overflow-hidden rounded-full">
            <img
              src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.6435-9/84687227_1554442588027714_4973618020493557760_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=YNiiH7wrz1YAX8jH8Ep&_nc_ht=scontent.fsgn2-2.fna&oh=04093d1e05d3aa3ba97fd31f8f62a6ee&oe=61AC42E6"
              alt="logo"
              height="40"
              width="40"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <nav className="p-6 xl:fixed top-28 left-5 xl:p-0 ">
          <NavItem>
            <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-1 gap-[4px]">
              <a
                href="#"
                className="grid items-center justify-between grid-flow-col gap-5 p-4 group xl:gap-10 md:justify-center xl:justify-between"
              >
                Giới thiệu{" "}
                <ArrowDownIcon
                  style={{
                    animationDuration: "0.5s",
                  }}
                  className="w-5 h-5 text-black group-hover:animate-bounce"
                />
              </a>
              <a
                href="#"
                className="grid items-center justify-between grid-flow-col gap-5 p-4 group xl:gap-10 md:justify-center xl:justify-between"
              >
                Dự án{" "}
                <ArrowDownIcon
                  style={{
                    animationDuration: "0.5s",
                  }}
                  className="w-5 h-5 text-black duration-75 group-hover:animate-bounce"
                />
              </a>
              <a
                href="https://blog.lehuuvietanh.me"
                target="_blank"
                className="grid items-center justify-between grid-flow-col gap-5 p-4 group xl:gap-10 md:justify-center xl:justify-between"
                rel="noreferrer"
              >
                Blog{" "}
                <ArrowRightIcon className="w-5 h-5 text-black group-hover:animate-horizontal-debounce" />
              </a>
              <a
                href="https://github.com/vietanhlehuu/portfolio"
                target="_blank"
                className="grid items-center justify-between grid-flow-col gap-5 p-4 group xl:gap-10 md:justify-center xl:justify-between"
                rel="noreferrer"
              >
                Github{" "}
                <ArrowRightIcon className="w-5 h-5 text-black group-hover:animate-horizontal-debounce" />
              </a>
            </div>
          </NavItem>
        </nav>
      </header>
      <main className="mx-4">
        <Section maxContentWidth={800}>
          <div className="h-[400px]"></div>
        </Section>
        <Section maxContentWidth={800} className="mt-8">
          <div className="h-[400px]"></div>
        </Section>
        <form>Có gì tâm sự nặc danh nhé :D</form>
      </main>
      <footer className="mt-8 bg-white border-t-4 border-black">Hihi</footer>
    </div>
  );
}
