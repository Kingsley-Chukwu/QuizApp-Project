import { Fragment, useState } from "react";
import styles from "../css modules/button.module.css";
export default function Button({
  handleNextQuestion,
  handlePrevious,
  isLastQuestion,
}) {
  return (
    <div>
      <div className={styles.buttonContainer}>
        <button className={styles.previousButton} onClick={handlePrevious}>
          Previous Question
        </button>
        <button
          className={styles.nextButton}
          onClick={isLastQuestion ? handleNextQuestion : handleNextQuestion}
        >
          {isLastQuestion ? "Submit" : "Next Question"}
        </button>
      </div>
    </div>
  );
}
