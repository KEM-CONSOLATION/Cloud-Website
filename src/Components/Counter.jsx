import { useState, useEffect } from "react";

const Counter = ({ initialValue, interval, targetValue, value, currency }) => {
  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    const timer = setInterval(() => {
      if (count < targetValue) {
        setCount((prevCount) => prevCount + 1);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [count, targetValue, interval]);

  return (
    <div className="grid gap-[32px]">
      <p className="font-semibold text-[40px] md:text-[72px] md:leading-[80px]">
        {currency}
        {count}
        {value}
      </p>
    </div>
  );
};
export default Counter;
