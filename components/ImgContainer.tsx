import clsx from "clsx";
import React from "react";

const ImgContainer: React.FC<{ className?: string }> = ({
  className,
  children,
}) => {
  return (
    <div
      className={clsx(
        "mt-6 transition duration-300 hover:translate-y-[-4px] [box-shadow:0_8px_10px_-4px_rgba(0,0,0,0.2)] hover:[box-shadow:0_12px_14px_-4px_rgba(0,0,0,0.3)] flex mx-auto overflow-hidden border-4 border-white rounded-[30px]",
        className
      )}
    >
      {children}
    </div>
  );
};

export default ImgContainer;
