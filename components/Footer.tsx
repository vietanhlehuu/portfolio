import React from "react";

const socials = [
  {
    text: "Facebook",
    href: "https://facebook.com/vietanhlehuu",
  },
  {
    text: "Skype",
    href: "https://join.skype.com/invite/bJmlkHADhXyl",
  },
  {
    text: "Linkedin",
    href: "https://www.linkedin.com/in/vietanhlehuu/",
  },
  {
    text: "Gmail",
    href: "mailto:lehuuvietanh@gmail.com",
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="grid justify-center grid-flow-col gap-4 p-6 mt-8 bg-white border-t-4 border-black">
      {socials.map((item, idx) => (
        <a
          key={idx}
          href={item.href}
          target="_blank"
          className="transition duration-300 hover:scale-[2] hover:bg-white"
          rel="noreferrer"
        >
          {item.text}
        </a>
      ))}
    </footer>
  );
};

export default Footer;
