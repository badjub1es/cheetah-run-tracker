import React from "react";
import type { Direction } from "@customTypes/Direction";
import { getTranslateString } from "./helpers/getTranslateString";

interface TooltipProps extends React.PropsWithChildren {
  text: string;
  textColor?: string;
  direction?: Direction;
}

/**
 * Tooltip UI component
 *
 * @param TooltipProps props
 * @param {string} props.text Text to display in Tooltip component
 * @param {textColor} props.textColor Text color to display in Tooltip component
 * @param {Direction} props.direction Direction of children to display Tooltip component
 */
const Tooltip: React.FC<TooltipProps> = ({
  children,
  text,
  direction = "top",
  textColor = "white",
}: TooltipProps) => {
  const [hover, setHover] = React.useState(false);
  const [childHeight, setChildHeight] = React.useState<number>(0);
  const [childWidth, setChildWidth] = React.useState<number>(0);
  const childRef = React.useRef<HTMLDivElement | null>(null);

  const translateString = getTranslateString(
    direction,
    childHeight,
    childWidth
  );

  React.useEffect(() => {
    if (childRef.current) {
      setChildHeight(childRef.current.offsetHeight);
      setChildWidth(childRef.current.offsetWidth);
    }
  }, [children]);

  return (
    <div className="relative flex justify-center">
      <div
        style={{ transform: `${translateString}` }}
        className={`z-300 absolute rounded-lg bg-black p-1 ${
          hover ? `opacity-1` : `opacity-0`
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
