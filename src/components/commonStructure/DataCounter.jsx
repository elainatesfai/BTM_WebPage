import React, { useState, useCallback, useEffect } from "react";

export default function DataCounter({ count, title }) {
  const [number, setNumber] = useState(0);
  const [trigger, setTrigger] = useState(false);

  const increment = useCallback(() => {
    const counter = (length = 2000) => {
      setNumber(0);
      let n = count;
      let start = Date.now();
      let end = start + length;
      let interval = length / n;
      const sInt = setInterval(() => {
        let time = Date.now();
        if (time < end) {
          let count = Math.floor((time - start) / interval);
          setNumber(count);
        } else {
          setNumber(n);
          clearInterval(sInt);
        }
      }, interval);
    };

    counter();
  }, [count]);

  const handleScrollEvent = async () => {
    const element = await document.getElementById("data");
    const elementPosition = await element.getBoundingClientRect().top;

    if (window.pageYOffset > elementPosition) setTrigger(true);
  };

  // const registerEvent = () => {
  //   document.addEventListener("scroll", handleScrollEvent);
  // };

  // const unregisterEvent = () => {
  //   document.removeEventListener("scroll", handleScrollEvent);
  // };

  useEffect(() => {
    if (trigger) {
      increment();
    }

    document.addEventListener("scroll", handleScrollEvent);

    return () => {
      document.removeEventListener("scroll", handleScrollEvent);
    };
  }, [trigger, increment]);

  return (
    <div className="counter">
      <div className="counter-number">{number}</div>
      <p className="counter-title">{title}</p>
    </div>
  );
}
