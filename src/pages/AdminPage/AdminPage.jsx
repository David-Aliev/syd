import styles from "./styles.module.css";

const firstButtonHandler = () => {};

const secondButtonHandler = () => {};

function AdminPage() {
  return (
    <div className={styles.admin_page_inner}>
      <div className={styles.admin_page_wrapper}>
        <button onClick={firstButtonHandler} className={styles.admin_page_btn}>
          firstButton
        </button>
        <button onClick={secondButtonHandler} className={styles.admin_page_btn}>
          SecondButton
        </button>
      </div>
    </div>
  );
}

export default AdminPage;
