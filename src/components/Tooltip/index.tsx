import React from "react";

interface TooltipProps extends React.PropsWithChildren {
  text: string;
  textColor?: string;
  direction?: "top" | "bottom" | "left" | "right";
}

const Tooltip: React.FC<TooltipProps> = ({
  children,
  text,
  direction = "top",
  textColor = "white",
}) => {
  const [hover, setHover] = React.useState(false);
  const [childHeight, setChildHeight] = React.useState<number>(0);
  const childRef = React.useRef<HTMLDivElement | null>(null);
  console.log(childHeight);

  React.useEffect(() => {
    if (childRef.current) {
      setChildHeight(childRef.current.offsetHeight);
    }
  }, [children]);
  // ${`translate-y-[${childHeight + 200}px]`}
  return (
    <div className="relative flex justify-center">
      <div
        style={{ transform: `translateY(-${childHeight / 2}px)` }}
        className={`z-300 absolute rounded-lg bg-black p-1 ${
          hover ? `opacity-1` : `hidden opacity-0`
        } text-align-center transition-opacity duration-200`}
      >
        <p className={`text-${textColor}`}>{text}</p>
      </div>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        ref={childRef}
      >
        {children}
      </div>
    </div>
  );
};

export default Tooltip;
