const NavItem: React.FC = ({ children }) => {
  return (
    <div className="relative p-8 bg-white border-4 border-black shadow-nav-item">
      <div
        style={{
          boxShadow: "inset 0 0 0 2px white",
        }}
        className=" xl:rotate-[256deg] rotate-[225deg] absolute w-5 h-5 bg-black border-2 border-black rounded-full top-2 left-2"
      >
        <div className="absolute w-4 h-4 -translate-x-1/2 -translate-y-1/2 bg-black border-2 border-black rounded-full top-1/2 left-12"></div>
        <div className="absolute w-12 h-2 -translate-y-1/2 translate-x-[-4px] bg-white border-2 border-black rounded-full top-1/2 left-1/2"></div>
      </div>
      <div
        style={{
          boxShadow: "inset 0 0 0 2px white",
        }}
        className="xl:hidden rotate-[45deg] absolute w-5 h-5 bg-black border-2 border-black rounded-full bottom-2 right-2"
      >
        <div className="absolute w-4 h-4 -translate-x-1/2 -translate-y-1/2 bg-black border-2 border-black rounded-full top-1/2 left-12"></div>
        <div className="absolute w-12 h-2 -translate-y-1/2 translate-x-[-4px] bg-white border-2 border-black rounded-full top-1/2 left-1/2"></div>
      </div>
      {children}
    </div>
  );
};

export default NavItem;
