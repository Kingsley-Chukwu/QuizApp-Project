import styles from "../css modules/scoreboard.module.css";
export default function ScoreBoard({ score, totalQuestions, correctAnswers }) {
  return (
    <div className={styles.scoreboard}>
      <p className={styles.total}>Total answered: {totalQuestions} </p>
      <p>Correct Answers: {correctAnswers}</p>
      <p>
        Your score is: {score}/{totalQuestions}
      </p>
    </div>
  );
}
