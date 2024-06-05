import { useState, useEffect } from "react";
import PropTypes from "prop-types";

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
      <p className="font-semibold font-Satoshi text-[40px] md:text-[72px] md:leading-[80px]">
        {currency}
        {count}
        {value}
      </p>
    </div>
  );
};

Counter.propTypes = {
  initialValue: PropTypes.number.isRequired,
  interval: PropTypes.number.isRequired,
  targetValue: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  currency: PropTypes.string,
};

export default Counter;
