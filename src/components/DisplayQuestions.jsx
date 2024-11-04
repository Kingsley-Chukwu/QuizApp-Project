import { useState } from "react";

export default function DisplayQuestions({ question }) {
  // const [currentQuestionIndex, setCurrentQuestionIndex] = useState(12);
  // if (currentQuestionIndex < 0 || currentQuestionIndex >= question.length) {
  //   return <h2>Sorry, question do not exist.</h2>;
  // }
  return (
    <div>
      <h2>{question}</h2>
    </div>
  );
}
