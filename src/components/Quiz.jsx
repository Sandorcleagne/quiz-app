import { useState, useCallback } from "react";
import QUESTIONS from "../assets/questions";
import QuestionTimer from "./QuestionTimer";
const Quiz = () => {
  const [answeredState, setAnsweredState] = useState("");
  const [userAnswer, setUserAnswer] = useState([]);
  const activeQuestionIndex = userAnswer.length;

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
  function shuffleArray(array) {
    const arr = [...array]; // copy so original is not mutated
    for (let i = arr.length - 1; i > 0; i--) {
      // Pick a random index from 0 to i
      const j = Math.floor(Math.random() * (i + 1));

      // Swap arr[i] and arr[j]
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  const shuffledAnswers = shuffleArray(QUESTIONS[activeQuestionIndex]?.answers);

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          key={activeQuestionIndex}
          timeout={10000}
          onTimeOut={() => {
            handleSkipAnswer();
          }}
        />
        <h2>{QUESTIONS[activeQuestionIndex]?.text}</h2>
        <ul id="answers">
          {shuffledAnswers?.map((answer) => {
            return (
              <li key={answer} className="answer">
                <button onClick={() => handleSelecAnswer(answer)}>
                  {answer}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;
