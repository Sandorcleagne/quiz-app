import { useRef } from "react";
const Answeres = ({ answers, selectedAnswer, answeredState, onSelect }) => {
  const shuffledAnswers = useRef();
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
  if (!shuffledAnswers.current) {
    shuffledAnswers.current = shuffleArray(answers);
  }
  return (
    <ul id="answers">
      {shuffledAnswers?.current?.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let cssClasses = "";
        if (answeredState === "answered" && isSelected) {
          cssClasses = "selected";
        }
        if (
          (answeredState === "correct" || answeredState === "wrong") &&
          isSelected
        ) {
          cssClasses = answeredState;
        }
        return (
          <li key={answer} className="answer">
            <button onClick={() => onSelect(answer)} className={cssClasses}>
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Answeres;
