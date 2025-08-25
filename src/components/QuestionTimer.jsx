import { useEffect, useState } from "react";

const QuestionTimer = ({ timeout, onTimeOut }) => {
  const [remainingTime, setRemainingTime] = useState(timeout);
  useEffect(() => {
    console.log("SetTimeout");
    const timeOut = setTimeout(onTimeOut, timeout);
    return () => {
      clearTimeout(timeOut);
    };
  }, [timeout, onTimeOut]);
  useEffect(() => {
    console.log("setting interval");
    const interval = setInterval(
      () => setRemainingTime((prevTime) => prevTime - 100),
      100
    );
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div>
      <progress id="question-time" max={timeout} value={remainingTime} />
    </div>
  );
};

export default QuestionTimer;
