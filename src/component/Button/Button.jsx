import styles from "./button.module.css";

export default function Button({ onClick }) {
  return (
    <button
      type="button"
      className={styles.button}
      data-action="load-more"
      onClick={onClick}
    >
      Load more
    </button>
  );
}
