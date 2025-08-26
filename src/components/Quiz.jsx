import { useState, useCallback, useRef } from "react";
import QUESTIONS from "../assets/questions";
import QuestionTimer from "./QuestionTimer";
import Answeres from "./Answeres";
const Quiz = () => {
  const [answeredState, setAnsweredState] = useState("");
  const [userAnswer, setUserAnswer] = useState([]);
  const activeQuestionIndex =
    answeredState === "" ? userAnswer.length : userAnswer.length - 1;

  const quizComplete = activeQuestionIndex === QUESTIONS.length;
  const handleSelecAnswer = useCallback(
    (selectedAnswer) => {
      setAnsweredState("answered");
      setUserAnswer((prevAnswer) => [...prevAnswer, selectedAnswer]);
      setTimeout(() => {
        if (selectedAnswer === QUESTIONS?.[activeQuestionIndex]?.answers[0]) {
          setAnsweredState("correct");
        } else {
          setAnsweredState("wrong");
        }
        setTimeout(() => {
          setAnsweredState("");
        }, 2000);
      }, 1000);
    },
    [activeQuestionIndex]
  );
  if (quizComplete) {
    return (
      <div id="summary">
        <h2>Quiz Completed!</h2>
      </div>
    );
  }
  const handleSkipAnswer = useCallback(() => {
    handleSelecAnswer(null), [handleSelecAnswer];
  });

  return <div id="quiz"></div>;
};

export default Quiz;
