import styles from "./ButtonsContainer.module.css";

function ButtonsContainer({ onButtonClick }) {
  const buttonNames = [
    "AC",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map(function (i) {
        return (
          <button
            key={i}
            className={styles.button}
            onClick={() => onButtonClick(i)}
          >
            {i}
          </button>
        );
      })}
    </div>
  );
}
export default ButtonsContainer;
