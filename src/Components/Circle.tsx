import React from "react";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

type CircleType = {
  trailColor: string;
  pathColor: string;
  value: number;
  strokeWidth: number;
  text?: string;
  children?: JSX.Element;
};

export const Circle = ({
  children,
  pathColor,
  trailColor,
  strokeWidth,
  value,
  text,
}: CircleType) => {
  return (
    <CircularProgressbarWithChildren
      value={value}
      text={text}
      strokeWidth={strokeWidth}
      styles={buildStyles({
        trailColor: trailColor,
        pathColor: pathColor,
        textSize: "16px",
      })}
    >
      {children}
    </CircularProgressbarWithChildren>
  );
};

/*{
   <CircularProgressbar
      value={60}
      text={`18:30:10`}
      strokeWidth={strokeWidth}
      styles={buildStyles({
        trailColor: "#00242c",
        pathColor: "#05bbe2",
        textSize: "18px",
      })}
    >
      {children}
    </CircularProgressbar> 
}*/
