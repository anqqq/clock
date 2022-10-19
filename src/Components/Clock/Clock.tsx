import React, { useEffect, useState } from "react";
import "./Clock.scss";
import { Circle } from "../Circle";

export const Clock = () => {
  const [state, setState] = useState({
    time: "",
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    const interval = setInterval(() => {
      let newTime = new Date();
      setState({
        time: newTime.toLocaleTimeString(),
        hours: newTime.getHours() % 12 || 12,
        minutes: newTime.getMinutes(),
        seconds: newTime.getSeconds(),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="parent">
      <Circle
        value={state.hours}
        strokeWidth={9}
        min={0}
        max={12}
        trailColor="#320001"
        pathColor="#fd0100"
      >
        <div className="child_1" style={{ width: "370px", height: "370px" }}>
          <Circle
            value={state.minutes}
            strokeWidth={12}
            min={0}
            max={59}
            trailColor="#053003"
            pathColor="#00ff00"
          >
            <div
              className="child_2"
              style={{ width: "240px", height: "240px" }}
            >
              <Circle
                value={state.seconds}
                strokeWidth={18}
                min={0}
                max={59}
                text={state.time}
                trailColor="#00242c"
                pathColor="#05bbe2"
              ></Circle>
            </div>
          </Circle>
        </div>
      </Circle>
    </div>
  );
};
