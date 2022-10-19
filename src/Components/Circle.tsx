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
  min: number;
  max: number;
  strokeWidth: number;
  text?: string;
  children?: JSX.Element;
};

export const Circle = ({
  children,
  pathColor,
  trailColor,
  strokeWidth,
  min,
  max,
  value,
  text,
}: CircleType) => {
  return (
    <CircularProgressbarWithChildren
      value={value}
      text={text}
      strokeWidth={strokeWidth}
      minValue={min}
      maxValue={max}
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
