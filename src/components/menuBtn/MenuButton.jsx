import styles from "./styles.module.css";

function MenuButton({ text }) {
  return <button className={styles.menuBtn}>{text}</button>;
}

export default MenuButton;
