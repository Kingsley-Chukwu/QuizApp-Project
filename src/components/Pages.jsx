import styles from "../css modules/pages.module.css";
export default function Pages({
  currentQuestionIndex,
  totalQuestions,
  onPageChange,
}) {
  return (
    <div className={styles.pages}>
      {Array.from({ length: totalQuestions }, (_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index)}
          style={{
            backgroundColor:
              currentQuestionIndex === index ? "red" : "lightgray",
            color: currentQuestionIndex === index ? "white" : "black",
            margin: "0 5px",
            padding: "15px 15px",
          }}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}
