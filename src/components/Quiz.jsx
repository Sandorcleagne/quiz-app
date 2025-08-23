import { useState } from "react";
import QUESTIONS from "../assets/questions";
const Quiz = () => {
  const [userAnswer, setUserAnswer] = useState([]);
  const activeQuestionIndex = userAnswer.length;

  const quizComplete = activeQuestionIndex === QUESTIONS.length;
  const handleSelecAnswer = (selectedAnswer) => {
    setUserAnswer((prevAnswer) => [...prevAnswer, selectedAnswer]);
  };
  if (quizComplete) {
    return (
      <div id="summary">
        <h2>Quiz Completed!</h2>
      </div>
    );
  }
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
