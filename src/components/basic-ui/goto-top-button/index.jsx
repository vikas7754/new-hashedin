import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./style.module.scss";

function GotoTopButton() {
  const handleClick = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button onClick={handleClick} className={styles.btn}>
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  );
}

export default GotoTopButton;
