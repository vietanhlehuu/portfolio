import clsx from "clsx";

type SectionProps = {
  maxContentWidth: number;
  className?: string;
};
const Section: React.FC<SectionProps> = ({
  maxContentWidth,
  children,
  className,
}) => {
  return (
    <section
      style={{
        maxWidth: maxContentWidth,
      }}
      className={clsx(
        "mx-auto border-4 border-black relative shadow-section",
        className
      )}
    >
      <div className="flex items-center justify-end w-full h-16 px-4 bg-gray-300 border-b-4 border-black">
        <div className="w-5 h-5 mr-2 bg-white border-4 border-black rounded-full " />
        <div className="w-5 h-5 bg-white border-4 border-black rounded-full" />
      </div>
      <div className="bg-white">{children}</div>
    </section>
  );
};

export default Section;
