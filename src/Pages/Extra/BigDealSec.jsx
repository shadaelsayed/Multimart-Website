import { useEffect, useState } from "react";
import "./BigDealSec.css";

export default function BigDealSec() {

  const [time, setTime] = useState({
    day: "",
    hour: "",
    min: "",
    sec: ""
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();

      const hour = date.toLocaleString("en", {
        hour12: true,
        hour: "numeric",
      });

      const day = date.toLocaleString("en", {
        weekday: "short",
      });

      setTime({
        day,
        hour,
        min: date.getMinutes(),
        sec: date.getSeconds(),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bigDeal">
      <p className="title text-light">Big Deals Of The Week</p>

      <div className="parent">
        <div className="days">
          <span>{time.day}</span>
          <p>Days</p>
        </div>

        <div className="hours">
          <span>{time.hour}</span>
          <p>Hours</p>
        </div>

        <div className="min">
          <span>{time.min}</span>
          <p>Minutes</p>
        </div>

        <div className="sec">
          <span>{time.sec}</span>
          <p>Seconds</p>
        </div>
      </div>
    </section>
  );
}
