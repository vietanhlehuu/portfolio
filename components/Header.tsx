import React from "react";
import Image from "next/image";
import NavItem from "./NavItem";
import { ArrowDownIcon, ArrowRightIcon } from "@heroicons/react/outline";

const Header: React.FC = () => {
  return (
    <header>
      <div className="grid items-center justify-center h-20 gap-10 px-6 py-4 bg-white border-b-4 border-black">
        <div className="w-10 h-10 overflow-hidden rounded-full">
          <Image
            src="/logo.jpeg"
            alt="logo"
            height="40"
            width="40"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <nav className="p-6 text-xl top-28 left-5 font-title">
        <NavItem>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[4px]">
            <a
              href="#intro"
              className="grid items-center justify-between grid-flow-col gap-5 p-4 group md:justify-center"
            >
              Giới thiệu{" "}
              <ArrowDownIcon className="[animation-duration:0.5s] w-5 h-5 text-black group-hover:animate-bounce" />
            </a>
            <a
              href="#project"
              className="grid items-center justify-between grid-flow-col gap-5 p-4 group md:justify-center"
            >
              Dự án{" "}
              <ArrowDownIcon className="[animation-duration:0.5s] w-5 h-5 text-black duration-75 group-hover:animate-bounce" />
            </a>
            <a
              href="#blog"
              className="grid items-center justify-between grid-flow-col gap-5 p-4 group md:justify-center"
            >
              Blog{" "}
              <ArrowDownIcon className="[animation-duration:0.5s] w-5 h-5 text-black duration-75 group-hover:animate-bounce" />
            </a>
            <a
              href="https://github.com/vietanhlehuu/portfolio"
              target="_blank"
              className="grid items-center justify-between grid-flow-col gap-5 p-4 group md:justify-center"
              rel="noreferrer"
            >
              Github{" "}
              <ArrowRightIcon className="w-5 h-5 text-black group-hover:animate-horizontal-debounce" />
            </a>
          </div>
        </NavItem>
      </nav>
    </header>
  );
};

export default Header;
