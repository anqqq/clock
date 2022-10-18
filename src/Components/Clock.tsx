import React, { useEffect, useState } from "react";
import { Circle } from "./Circle";

export const Clock = () => {
  const [time, setTime] = useState({
    time: new Date().toLocaleTimeString(),
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
    seconds: new Date().getSeconds(),
  });
  useEffect(() => {
    const interval = setInterval(() => {
      setTime({
        time: new Date().toLocaleTimeString(),
        hours: new Date().getHours(),
        minutes: new Date().getMinutes(),
        seconds: new Date().getSeconds(),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div style={{ width: "500px", height: "500px" }}>
      <Circle
        value={time.hours}
        strokeWidth={9}
        trailColor="#320001"
        pathColor="#fd0100"
      >
        <div style={{ width: "370px", height: "370px" }}>
          <Circle
            value={time.minutes}
            strokeWidth={12}
            trailColor="#053003"
            pathColor="#00ff00"
          >
            <div style={{ width: "240px", height: "240px" }}>
              <Circle
                value={time.seconds}
                strokeWidth={18}
                text={time.time}
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
