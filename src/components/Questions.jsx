import { useState } from "react";
import styles from "../css modules/questions.module.css";
import DisplayQuestions from "./DisplayQuestions";
import Options from "./Options";
import Button from "./Button";
import Pages from "./Pages";
import ScoreBoard from "./ScoreBoard";
export default function Questions() {
  // To store the questions
  const [questions, setQuestion] = useState([
    {
      id: 1,
      question: "Which of these is not a scalar quantity?",
      options: ["Velocity", "Volume", "Temperature", "Mass"],
      selectedOptions: null,
      correctOption: "Velocity",
    },
    {
      id: 2,
      question: "What is the unit for power?",
      options: ["Newton", "Meters", "Watt", "Pascal"],
      selectedOptions: null,
      correctOption: "Watt",
    },
    {
      id: 3,
      question:
        "A force of 20N causes a body to move 2m, calculate the workdone by the force",
      options: ["6.7N", "10N", "40N", "5N"],
      selectedOptions: null,
      correctOption: "40N",
    },
    {
      id: 4,
      question: "The unit of pressure is?",
      options: ["N/m", "Ns", "Pascal", "Barometer"],
      selectedOptions: null,
      correctOption: "Pascal",
    },
    {
      id: 5,
      question: "Convert 20 degree celsius to kelvin",
      options: ["270K", "200K", "10K", "293K"],
      selectedOptions: null,
      correctOption: "293K",
    },
    {
      id: 6,
      question: "What is the unit for current",
      options: ["Ampere", "Watt", "Newton", "Vector"],
      selectedOptions: null,
      correctOption: "Ampere",
    },
  ]);
  // Stores the current question
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Handles correct answers
  const [correctAnswers, setCorrectAnswers] = useState(0);

  // stores the final score
  const [finalScore, setFinalScore] = useState(null); // State to hold the final score

  // Handle next question
  function handleNextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const { score, correctAnswers } = calculateScore();
      setFinalScore(score);
      setCorrectAnswers(correctAnswers); // Set the final score state
    }
  }

  // Handles previous question
  function handlePrevious() {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  }

  // Handles option select
  function handleOptionSelect(option) {
    const optionSelected = questions.map((q, index) => {
      if (index === currentQuestionIndex) {
        return { ...q, selectedOptions: option };
      }
      return q;
    });
    setQuestion(optionSelected);
  }

  // Calculates score
  function calculateScore() {
    let score = 0;
    let correctAnswers = 0;
    questions.forEach((q) => {
      if (q.selectedOptions === q.correctOption) {
        score += 1;
        correctAnswers += 1;
      }
    });
    return { score, correctAnswers };
  }

  // Handle page naviagtion
  function onPageChange(index) {
    setCurrentQuestionIndex(index);
  }

  return (
    <div>
      {finalScore === null ? ( // Conditionally render based on the score
        <>
          <div className={styles.questions}>
            <DisplayQuestions
              question={questions[currentQuestionIndex].question}
            />
            <span>
              {currentQuestionIndex + 1} / {questions.length}
            </span>
          </div>
          <div>
            <Options
              question={questions[currentQuestionIndex].options}
              handleOptionSelect={handleOptionSelect}
              selectedOptions={questions[currentQuestionIndex].selectedOptions}
            />
          </div>
          <div>
            <Pages
              currentQuestionIndex={currentQuestionIndex}
              totalQuestions={questions.length}
              onPageChange={onPageChange}
            />
          </div>
          <div>
            <Button
              handleNextQuestion={handleNextQuestion}
              handlePrevious={handlePrevious}
              isLastQuestion={currentQuestionIndex === questions.length - 1}
            />
          </div>
        </>
      ) : (
        <div>
          <ScoreBoard
            score={finalScore}
            totalQuestions={questions.length}
            correctAnswers={correctAnswers}
          />{" "}
        </div>
      )}
    </div>
  );
}
