import React from "react";
import QuestionTimer from "./QuestionTimer";
import Answeres from "./Answeres";
import QUESTIONS from "../assets/questions";

const Question = () => {
  return (
    <div id="question">
      <QuestionTimer
        key={activeQuestionIndex}
        timeout={10000}
        onTimeOut={() => {
          handleSkipAnswer();
        }}
      />
      <h2>{QUESTIONS[activeQuestionIndex]?.text}</h2>
      <Answeres
        key={activeQuestionIndex}
        answers={QUESTIONS[activeQuestionIndex]?.answers}
        selectedAnswer={userAnswer[userAnswer?.length - 1]}
        answeredState={answeredState}
        onSelect={handleSelecAnswer}
      />
    </div>
  );
};

export default Question;
