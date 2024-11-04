import { useState } from "react";
import styles from "../css modules/options.module.css";
export default function Options({
  question,
  handleOptionSelect,
  selectedOption,
}) {
  const [activeOption, setActiveOption] = useState(null);
  return (
    <div className={styles.listOptions}>
      {question.map((option) => (
        <ul className={styles.options}>
          <li
            onClick={() => {
              setActiveOption(option);
              handleOptionSelect(option);
            }}
            className={activeOption === option ? styles.active : ""}
          >
            {option}
          </li>
        </ul>
      ))}
    </div>
  );
}
